// log function
const fs = require('fs');
function log(msg) {
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var day = new Date().getDate();
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  var milliseconds = new Date().getMilliseconds();
  var time = day + '/' + month + '/' + year + ' | ' + hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
  let message = String(time + ' ' + msg + '\n');
  fs.appendFile('./log.txt', message + '\n', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  console.log(message);
}
// type log(message) whenever you need it
