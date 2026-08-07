const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const read = fs.createReadStream("static/index.html");
  read.pipe(res);
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
