const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';
const { exec } = require('child_process');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  exec('./test.sh', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send('Das Skript wurde ausgeführt!');
});

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
