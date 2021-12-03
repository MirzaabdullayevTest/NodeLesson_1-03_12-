console.log('Hello', __dirname);
console.log('Hello', __filename);

const userObj = require('./user')

console.log(userObj);
userObj.sayHello()

// (function(require, module, exports, __filename, __dirname){


// })()