const http = require('http');
const os = require('os');
const path = require('path');

function getSystemInfo() {
  const userInfo = os.userInfo();
  const osType = os.type();
  const uptimeInMinutes = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  return `
    <html>
      <head>
        <title>Node.js Server Info</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p>Username: ${userInfo.username}</p>
        <p>OS Type: ${osType}</p>
        <p>Uptime (minutes): ${uptimeInMinutes}</p>
        <p>Current Directory: ${currentDir}</p>
        <p>Server File Name: ${serverFileName}</p>
      </body>
    </html>
  `;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const systemInfoHtml = getSystemInfo();
  res.end(systemInfoHtml);
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
