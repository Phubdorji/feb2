const http = require('http');
const fs = require('fs');
const PORT = 4040;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/about.html") {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/services.html") {
        fs.readFile("services.html", (err, data) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/contact.html") {
        fs.readFile("contact.html", (err, data) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile("404.html", (err, data) => {
            res.writeHead(404, { "content-type": "text/html" });
            res.write(data);
            res.end();
        });
    }
});

myServer.listen(PORT, hostname, () => {
    console.log(`Server has been successfully created at http://${hostname}:${PORT}`);
});







