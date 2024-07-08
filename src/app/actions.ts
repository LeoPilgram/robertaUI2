'use server';
import { exec } from 'child_process';

export async function runTest(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      'sshpass -p "turtlebot" ssh ubuntu@192.168.50.53 "bash -s" < src/app/scripts/test.sh',
      (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        console.log(stdout);
        resolve();
      }
    );
  });
}
export async function dance(i: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      `sshpass -p "123" ssh vinzenz@192.168.1.22 "source /opt/ros/noetic/setup.bash && python3 /home/vinzenz/${i}.py" `,
      (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        console.log(stdout);
        resolve();
      }
    );
  });
}

export async function sing(i: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      `sshpass -p "123" ssh vinzenz@192.168.1.22 "source /opt/ros/noetic/setup.bash && python3 /home/vinzenz/${i}.py" `,
      (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        console.log(stdout);
        resolve();
      }
    );
  });
}

export async function deliver(i: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      `sshpass -p "123" ssh vinzenz@192.168.1.22 "source /opt/ros/noetic/setup.bash && python3 /home/vinzenz/${i}.py" `,
      (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        console.log(stdout);
        resolve();
      }
    );
  });
}

let isInUse: boolean = false;

export async function onToggleButton(): Promise<boolean> {
  if (!isInUse) {
    isInUse = true;
    return true;
  } else {
    return false;
  }
}

export async function onDoneWithRoberta(): Promise<void> {
  isInUse = false;
}

export async function isRobertaInUse(): Promise<boolean> {
  return isInUse;
}
