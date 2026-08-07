const EventEmitter = require("node:events");

const customEmitter = new EventEmitter();

// La funcion on es un oyente de eventos
// on es como el addEventListener pero para eventos de nodejs
customEmitter.on("response", (data, secondData) => {
  console.log("Respuesta recibida");
  console.log(data);
  console.log(secondData);
});

// Un payload en informatica es un paquete de datos que se transmite de un sistema a otro.

// La funcion emit emite un evento
// emit es como hacer click a un boton
// Se puede pasar informacion a los oyentes mediante parametros
// customEmitter.emit("response", "Este es un payload");
// customEmitter.emit("response", "Azure");
// customEmitter.emit("response", 4324324);
// customEmitter.emit("response", { name: "Juan" });
customEmitter.emit("response", "Este es un payload", "Este es otro payload");

// Existe un paradigma llamado Event Driven Programming
// Es programacion orientada a eventos
// El modulo http esta basado en estos eventos
