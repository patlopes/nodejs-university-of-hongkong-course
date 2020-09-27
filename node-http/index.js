const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Requst for " + req.url + 'by meyhod ' + req.method);

    if (req.method == 'GET') {
        let fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url

        const filePath = path.resolve('./public' + fileUrl);
        const fileExtension = path.extname(filePath);
        if (fileExtension == ".html") {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404, file is not an HTML</h1></body></html>');
            return;
        }
    }
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404,'+ req.method +' not supported</h1></body></html>');
        return;
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});