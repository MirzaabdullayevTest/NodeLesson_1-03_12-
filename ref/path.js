const path = require('path')
// console.log(path);
console.log('dirname', __dirname);
console.log('filename', __filename);
console.log('Extname', path.extname(__filename));  /// .js 
console.log('Basename', path.basename(__filename)); // path.js
console.log('parse', path.parse(__filename)); // {}

console.log('join', path.join(__dirname, '/test', '/index.html'));  // 
console.log('resolve', path.resolve(__dirname, '/test', '/index.html')); // C:/index.html
