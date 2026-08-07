// console.log("first");
// setTimeout(() => {
//   (console.log("second"), 0);
// });
// console.log("third");

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home");
    return res.end();
  }
  if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }
    return res.end("<h1>About Page</h1>");
  }
  res.end("404 Not found");
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
