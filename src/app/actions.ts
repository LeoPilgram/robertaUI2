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

export async function navTest(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec('rosrun auto_nav goal_pose.py pickup_point1', (err, stdout, stderr) => {
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
