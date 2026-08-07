const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Welcome to the server");
    return res.end();
  }

  if (req.url === "/about") {
    res.write("acerca de");
    return res.end();
  }

  res.write(`
        <h1>Not found</h1>
        <p>Only work if the URL is http://localhost:3000</p>
        <a href="/">Back to home</a>
        <a href="/about">About</a>
        `);
  res.end();
});

server.listen(3000);

console.log("Server started on port http://localhost:3000");
