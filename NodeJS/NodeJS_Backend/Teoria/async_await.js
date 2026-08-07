const { readFile, writeFile } = require("node:fs");

// async : establece que una funcion trabaja de forma asincrona
// await : nos permite esperar a que una promesa se resuelva

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
};

async function read() {
  try {
    const first = await getText("./data/first.txt");
    const second = await getText("./data/second.txt");
    const third = await getText("./data/third.txt");
    console.log(first);
    console.log(second);
    console.log(third);
  } catch (error) {
    console.log(error.message);
  }
}

read();
