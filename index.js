const fs = require('fs');

const testIn=fs.readFileSync('./txt/example.txt','utf-8');
console.log(testIn);

const testOut = `This is what we know about the avocado: ${testIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',testOut);

console.log('File written!');