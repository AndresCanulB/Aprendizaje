/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos

// Mi solucion:
// const mailRegex = /@gmail.com/;

// Solucion perfecta
// ^ → inicio del texto
// [^\s@]+ → uno o más caracteres válidos antes del @
// @ → símbolo obligatorio
// [^\s@]+ → dominio
// \. → punto
// [^\s@]+ → extensión (com, net, org, etc.)
// $ → fin del texto
const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mail = "jose@gmail.com";

mailRegex.test(mail)
  ? console.log("El correo electronico es valido")
  : console.log("El correo electronico no es valido");

// 2. Crea una RegEx que obtenga Hashtags de un Texto

// Mi solucion:
// const hashtagRegex = /#[\w]+/;
// const text = "Estoy #feliz";
//
// hashtagRegex.test(text)
//   ? console.log(hashtagRegex.exec(text))
//   : console.log("No hay hashtags en el texto");

// Mejor solucion
const hashtagRegex = /#[\w]+/g;

// #
// Busca el símbolo hashtag.

// [\w]+
// Significa:
// “uno o más caracteres de palabra”.

// \w incluye:
// letras
// números
// _

//g
//La bandera global.

const text = "Estoy #feliz y #motivado";

const hashtags = text.match(hashtagRegex); //.match() es un método de strings para buscar coincidencias usando una RegEx.

hashtags ? console.log(hashtags) : console.log("No hay hashtags en el texto");

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)

// Mi solucion:
// const passwordRegex = /\w\w\w\w\w\w\w\w/;
// const password = "password123";
//
// passwordRegex.test(password)
//   ? console.log("La contraseña es segura")
//   : console.log("La contraseña no es segura");

// Solucion correcta:

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

// ^
// Inicio del texto.

// (?=.*[A-Za-z])
// Debe existir al menos una letra.

// (?=.*\d)
// Debe existir al menos un número.

// .{8,}
// Debe tener mínimo 8 caracteres.

// .
// Cualquier carácter

// {8,}
// 8 o más

// $
// Fin del texto.

// Lookaheads
// (?=...) funcionan como condiciones obligatorias.

const password = "password123";

passwordRegex.test(password)
  ? console.log("La contraseña es segura")
  : console.log("La contraseña no es segura");
