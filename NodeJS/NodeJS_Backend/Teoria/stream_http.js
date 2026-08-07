const http = require("node:http");
const { createReadStream } = require("node:fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", { encoding: "utf8" });

  fileStream.on("data", (chunk) => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
