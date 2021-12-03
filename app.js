const http = require('http')  // server yaratiladi

const server = http.createServer((req, res) => {
    // console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html charset=utf-8'
    })
    res.write('<h1>Hello  world</h1>')
    res.end('<p>Final</p> ')
})

server.listen(3000, () => {
    console.log('Biz portni 3000 port bilan eshityapmiz');
})