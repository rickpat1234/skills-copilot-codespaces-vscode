// Create web server
// Create a web server that listens on port 8080 and serves the comments.json file. If the file is not found, the server should respond with a 404 status code.
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const readStream = fs.createReadStream(path.join(__dirname, 'comments.json'));

    readStream.pipe(res);
    readStream.on('error', (err) => {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not found');
    })
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

// Path: comments.json
// Create a JSON file with the following structure:
// [
//     {
//         "id": 1,
//         "name": "John Doe",
//         "email": "