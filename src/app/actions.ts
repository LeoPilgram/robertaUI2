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
export async function dance3(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec('src/app/scripts/dance_3.py', (err, stdout, stderr) => {
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
