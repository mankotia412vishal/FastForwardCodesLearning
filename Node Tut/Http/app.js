const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Welcome to our home page');
    } else if (req.url === "/about") {
        res.end("Here is our short story");
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>Sorry, we cannot seem to find the page that you are looking for</p>
            <a href="/">Back Home</a>
        `);
    }
});

server.listen(5000);
