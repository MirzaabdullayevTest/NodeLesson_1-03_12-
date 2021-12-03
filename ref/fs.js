const fs = require('fs')
const path = require('path')

// ================== papka yaratish
// fs.mkdir(path.join(__dirname, 'test1'), (err) => {
//     if (err) {
//         console.err(err);
//     }
// })

// ================== fayl yaratish
// fs.writeFile(path.join(__dirname,'..', 'test.js'), '//Salom fs module', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.unlink(path.join(__dirname, 'test.js'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Fayl o`chirildi');
//     }
// })

/* fs.writeFile('helloworld1.txt','', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
}); */

// fs.unlink(path.join(__dirname, 'test1', 'sdf.txt'), (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('File o`chdi');
//     }
// })

// fs.rmdir(path.join(__dirname, 'test1'), (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Papka o`chdi');
//     }
// })

// fs.writeFile(path.join(__dirname, 'test1.js'), 'const user = {name: `John`, age: 25, number: 4}', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('fayl yaratildi');
//         fs.readFile(path.join(__dirname, 'test1.js'), 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         })
//     }
// })


// fs.appendFile(path.join(__dirname, 'test1.js'), 'const city = `Tashkent`', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Qo`shildi");
//     }
// })

// fs.rename(path.join(__dirname, 'test1.js'), 'renamed.js', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Renamed');
//     }
// })