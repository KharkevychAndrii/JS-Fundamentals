const http = require('http');
const moment = require('moment-timezone');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  const username = 'Andrii';

  const date = new Date();
  const timezone = moment.tz(date, 'Europe/Kiev').format('Z');

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.write('Date of request: ' + date.toString() + ' (GMT' + timezone + ')' + '\n');
  res.end(personalModule.getGreetingMessage(username));
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
