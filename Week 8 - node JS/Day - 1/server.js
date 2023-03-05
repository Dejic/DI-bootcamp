let http = require("http");

let server = http.createServer ((req, res) => {

    res.writeHead(200);
    res.end("Hi")
});

server.listen((3000), () => console.log("listening on port 3000"))