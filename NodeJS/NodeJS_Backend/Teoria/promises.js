const { readFile, writeFile } = require("node:fs");

// Una promesa es un valor que puede estar disponible ahora, en el futuro o nunca
// new Promise(function (success, error) {});

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

getText("./data/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .then(() => {
    getText("./data/second.txt")
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  })
  .then(() => {
    getText("./data/third.txt")
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  });
