const fs = require("node:fs/promises");
const path = require("node:path");

// ?? — Nullish coalescing
// Significa: “usa este valor solo si el anterior es null o undefined”.
// La diferencia importante es que NO considera falsos valores como 0, "" o false.
// 0 ?? 10 = resultado: 0
// "" ?? "Hola" = resultado: ""
// null ?? "Hola" = resultado: "Hola"
// undefined ?? "Hola" = resultado: "Hola"

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  // Consejo, es mejor utilizar try/catch en errores concretos para identificar el problema, no envolver toda la aplicacion en un solo
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.log(`No se pudo leer el directorio: ${folder}`);
    process.exit(1);
  }

  // El .map es un callback, se ejecuta en paralelo
  const filesPromises = files.map(async (file) => {
    // El .map no espera por ejecutar el async y await secuencialmente
    // Por esto el .map lo que hace es mapear todas las promesas y devolverlas de una sola vez
    const filePath = path.join(folder, file);
    let fileStats;
    try {
      fileStats = await fs.stat(filePath); // status - informacion del archivo
    } catch (error) {
      console.log(`No se pudo leer el directorio: ${folder}`);
      process.exit(1);
    }
    const isDirectory = fileStats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = fileStats.size.toString();
    const fileModified = fileStats.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo);
  });
}

ls(folder);
