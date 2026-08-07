const { readFile, writeFile } = require("node:fs/promises");

// No se ocupa usar promisify, ya que al agregar /promises ya las funciones se convierten en promesas

async function read() {
  try {
    const first = await readFile("./data/first.txt", "utf-8");
    const second = await readFile("./data/second.txt", "utf-8");
    const third = await readFile("./data/third.txt", "utf-8");
    console.log(first);
    console.log(second);
    console.log(third);
  } catch (error) {
    console.log(error.message);
  }
}

read();
