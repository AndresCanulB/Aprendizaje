// Los streams nos permiten enviar un archivo grande en chunks o pedazos para que sea transportado facilmente

// const { writeFile } = require("node:fs/promises");

// (async () => {
//   await writeFile("./data/bigfile.txt", "hello world".repeat(1000000));
// })();

// createReadStream ya esta basado en eventos, no se ocupa promises
const { createReadStream } = require("node:fs");

const stream = createReadStream("./data/bigfile.txt", { encoding: "utf8", highWaterMark: 1024 });

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Ya termine de leer el archivo.");
});

stream.on("error", (error) => {
  console.log(error);
});
