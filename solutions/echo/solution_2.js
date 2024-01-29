const fs = require('fs');

function echoProgram() {
  return fs.readFileSync('solution.txt').toString();
}
