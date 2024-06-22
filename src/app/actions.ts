'use server';
import { exec } from 'child_process';

export async function runTest() {
  exec('src/app/scripts/test.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}
