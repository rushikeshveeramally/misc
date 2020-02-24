
// load thee module
const os = require('os');

// total memory
console.log(`total memory is ${os.totalmem()}`)

//free memory
console.log(`free memory is ${os.freemem()}`);

//host name
console.log(`host name is ${os.hostname()}`);

//platform
console.log(`platform is ${os.platform()}`);

//userInfo
let user=os.userInfo()
console.log(user);