const fs = require ('fs');

const buffer = fs.readFileSync(process.argv[2]);
// storing data 

const result = buffer.toString().split('\n').length - 1;
console.log(result);