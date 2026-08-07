const http = require("node:http");

// Un servidor es un programa que escucha peticiones de clientes y responde a ellas
// Un cliente es un navegador u otro programa que hace peticiones al servidor
// El servidor es un programa que debe estar ejecutandose siempre
// El servidor se crea con el metodo createServer del modulo http
// El metodo createServer recibe como parametro una funcion que se ejecuta cuando el servidor recibe una peticion

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(3000);

console.log("Server started on port 3000");

// Existen puertos que ya estan reservados por defecto
// 20 y 21 :FTP
// 22 :SSH
// 23 :Telnet
// 25 :SMTP
// 53 :DNS
// 80 :HTTP
// 110 :POP
// 443 :HTTPS
// 465 :SMTP
// 993 :IMAP
// 995 :POP3

// Para crear un servidor se debe agregar un puerto elevado para no interferir
// Los puertos se dividen en:
// 0 - 1023 : Puertos reservados
// 1024 - 49151 : Puertos registrados
// 49152 - 65535 : Puertos dinamicos
