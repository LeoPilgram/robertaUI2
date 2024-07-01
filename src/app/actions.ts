'use server';
import { exec } from 'child_process';

export async function runTest(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec('src/app/scripts/test.sh', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      console.log(stdout);
      resolve();
    });
  });
}

//possible agruments for goal_pose.py: 'pickup_point1', 'pickup_point2', 'pickup_point3', 'pickup_point4', 'pickup_point5', 'pickup_point6'
export async function navToPickupPoint(pickupPoint: String): Promise<void> {
  return new Promise((resolve, reject) => {
    exec('rosrun auto_nav goal_pose.py ${pickupPoint}', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      console.log(stdout);
      resolve();
    });
  });
}
