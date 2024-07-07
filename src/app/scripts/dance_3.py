import rospy
from geometry_msgs.msg import Twist
import time
import math
from math import cos, sin, atan2, sqrt, pi

class DanceBot:
    def __init__(self):
        # Initialize robot's position and orientation
        self.initial_x = 0.0
        self.initial_y = 0.0
        self.initial_theta = 0.0
        self.x = 0.0
        self.y = 0.0
        self.theta = 0.0
        # ROS publisher for robot movement commands
        self.pub = rospy.Publisher('cmd_vel', Twist, queue_size=10)
        # ROS rate for timing
        self.rate = rospy.Rate(10)
        # PID parameters for orientation control
        self.Kp_orientation = 1.0
        self.Ki_orientation = 0.0
        self.Kd_orientation = 0.1
        self.orientation_error_sum = 0.0
        self.last_orientation_error = 0.0
        # PID parameters for position control
        self.Kp_position = 1.0
        self.Ki_position = 0.0
        self.Kd_position = 0.1
        self.position_error_sum = 0.0
        self.last_position_error = 0.0

    def move(self, linear_x=0.0, linear_y=0.0, angular_z=0.0, duration=1.0):
        # Create a Twist message for movement
        twist = Twist()
        twist.linear.x = linear_x
        twist.linear.y = linear_y
        twist.angular.z = angular_z
        # Calculate end time based on duration
        end_time = time.time() + duration
        # Time increment for position update
        dt = 1.0 / 10.0
        while time.time() < end_time:
            # Publish the Twist message and update position
            self.pub.publish(twist)
            self.update_position(linear_x, linear_y, angular_z, dt)
            self.rate.sleep()
        # Stop the robot immediately after movement
        self.stop_immediate()

    def update_position(self, linear_x, linear_y, angular_z, dt):
        # Update the robot's estimated position and orientation
        self.theta += angular_z * dt
        self.theta = self.normalize_angle(self.theta)
        self.x += (linear_x * cos(self.theta) - linear_y * sin(self.theta)) * dt
        self.y += (linear_x * sin(self.theta) + linear_y * cos(self.theta)) * dt
        rospy.loginfo(f"Updated Position: x={self.x}, y={self.y}, theta={self.theta}")

    def stop_immediate(self):
        # Stop movement immediately
        twist = Twist()
        self.pub.publish(twist)
        self.rate.sleep()

    def calibrate_initial_position(self):
        # Move to the initial position and orientation
        rospy.loginfo("Calibrating initial position...")
        self.move_to_position(self.initial_x, self.initial_y)
        self.rotate_to_orientation(self.initial_theta)
        rospy.loginfo("Calibration complete.")

    def crazy_dance(self):
        # Define a list of movements for the dance
        moves = [
            (0.5, 0, 0, 0.5), (-0.5, 0, 0, 0.5),
            (0, 0.5, 0, 0.5), (0, -0.5, 0, 0.5),
            (0, 0, 6.0, 1.0), (0, 0, -6.0, 1.0),
            (0.5, 0, 3.0, 0.5), (-0.5, 0, -3.0, 0.5),
            (0.5, 0.5, 0, 0.5), (-0.5, -0.5, 0, 0.5),
            (0.3, 0.3, 3.0, 0.5), (-0.3, -0.3, -3.0, 0.5)
        ]
        # Record initial position and orientation
        self.initial_x = self.x
        self.initial_y = self.y
        self.initial_theta = self.theta
        rospy.loginfo(f"Starting Dance at Position: x={self.initial_x}, y={self.initial_y}, theta={self.initial_theta}")

        start_time = time.time()
        executed_moves = []  # To store the executed moves
        # Dance for 20 seconds
        while not rospy.is_shutdown() and time.time() - start_time < 20:
            for move in moves:
                if time.time() - start_time >= 20:
                    break
                linear_x, linear_y, angular_z, duration = move
                self.move(linear_x, linear_y, angular_z, duration)
                executed_moves.append((linear_x, linear_y, angular_z, duration))

        time.sleep(2)  # Wait for 2 seconds before returning to start
        self.return_to_start()

    def move_to_position(self, x, y):
        # Move to the specified position
        distance = sqrt(x**2 + y**2)
        angle_to_goal = atan2(y, x)
        rospy.loginfo(f"Moving to Position: x={x}, y={y}, angle_to_goal={angle_to_goal}, current_theta={self.theta}")
        self.rotate_to_orientation(angle_to_goal - self.theta)
        self.move(linear_x=1.5, duration=distance / 1.5)
        self.stop_immediate()
        rospy.loginfo(f"Arrived at Position: x={self.x}, y={self.y}, theta={self.theta}")

    def rotate_to_orientation(self, theta):
        # Normalize the angle and rotate to the desired orientation
        theta = self.normalize_angle(theta)
        rospy.loginfo(f"Rotating to Orientation: target_theta={theta}, current_theta={self.theta}")
        angular_speed = 1.0 if theta > 0 else -1.0
        if theta != 0.0:  # Avoid division by zero
            duration = abs(theta) / abs(angular_speed)
            self.move(angular_z=angular_speed, duration=duration)
            self.stop_immediate()

            # Fine-tuning the rotation using PID control
            remaining_error = theta - self.theta
            angular_speed = self.calculate_pid_rotation_speed(remaining_error)
            duration = abs(remaining_error) / abs(angular_speed)
            self.move(angular_z=angular_speed, duration=duration)
            self.stop_immediate()
        rospy.loginfo(f"Arrived at Orientation: theta={self.theta}")

    def normalize_angle(self, angle):
        # Normalize angle to the range [-π, π]
        while angle > pi:
            angle -= 2 * pi
        while angle < -pi:
            angle += 2 * pi
        return angle

    def calculate_pid_rotation_speed(self, orientation_error):
        # PID coefficients for rotation
        Kp = self.Kp_orientation
        Ki = self.Ki_orientation
        Kd = self.Kd_orientation
        P = Kp * orientation_error
        self.orientation_error_sum += orientation_error
        I = Ki * self.orientation_error_sum
        D = Kd * (orientation_error - self.last_orientation_error)
        self.last_orientation_error = orientation_error
        return P + I + D

    def calculate_pid_position_speed(self, distance_error):
        # PID coefficients for position
        Kp = self.Kp_position
        Ki = self.Ki_position
        Kd = self.Kd_position
        P = Kp * distance_error
        self.position_error_sum += distance_error
        I = Ki * self.position_error_sum
        D = Kd * (distance_error - self.last_position_error)
        self.last_position_error = distance_error
        return P + I + D

    def return_to_start(self):
        # Calculate errors in position and orientation
        dx = self.initial_x - self.x
        dy = self.initial_y - self.y
        distance_error = sqrt(dx**2 + dy**2)
        angle_to_start = atan2(dy, dx)
        orientation_error = angle_to_start - self.theta
        orientation_error = self.normalize_angle(orientation_error)

        # Rotate to face the initial orientation using PID control
        self.rotate_to_orientation(orientation_error)

        # Move towards the initial position using PID control
        linear_speed = self.calculate_pid_position_speed(distance_error)
        self.move(linear_x=linear_speed, duration=distance_error / linear_speed)

        rospy.loginfo("Returned to Start Position with Improved Accuracy")

if __name__ == "__main__":
    try:
        rospy.init_node('robot_crazy_dance')
        dance_bot = DanceBot()
        dance_bot.calibrate_initial_position()  # Calibrate initial position
        dance_bot.crazy_dance()  # Perform the crazy dance
    except rospy.ROSInterruptException:
        pass
