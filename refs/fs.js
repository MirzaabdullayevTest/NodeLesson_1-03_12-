const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error(err)

//     console.log('Papka yaratildi');
// })

// fs.writeFile(path.join(__dirname, 'notes', 'notes.txt'), 'Hello world', (err) => {
//     if (err) throw new Error(err)
//     console.log('Fayl yaratildi');

//     fs.appendFile(path.join(__dirname, 'notes', 'notes.txt'), 'from append', (err) => {
//         if (err) throw new Error(err)
//         console.log('Fayl o`zgardi');
//     })

//     fs.readFile(path.join(__dirname, 'notes', 'notes.txt'), 'utf-8', (err, data) => {
//         if (err) throw new Error(err)
//         // console.log(data);
//         // console.log(Buffer.from(data).toString());
//         console.log(data);
//     })
// })


// fs.readFile(path.join(__dirname, 'notes', 'notes.txt'), 'utf-8', (err, data) => {
//     if (err) throw new Error(err)
//     // console.log(data);
//     // console.log(Buffer.from(data).toString());
//     console.log(data);
// })

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'newnotes.txt'),
    (err) => {

        if (err) throw err
        console.log('Fayl nomi');
    }
)