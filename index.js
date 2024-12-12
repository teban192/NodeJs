const fs = require('fs');
//Blocking synchronous way

//const testIn=fs.readFileSync('./txt/example.txt','utf-8');
//console.log(testIn);

//const testOut = `This is what we know about the avocado: ${testIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt',testOut);

//console.log('File written!');

//Non-blocking ,  asynchronous way
fs.readFile('./txt/starts.txt','utf-8',(err,data) =>{
 console.log(data);
});

console.log('Will read file!');

