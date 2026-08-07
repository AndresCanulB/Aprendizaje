console.log("Hello world");

let username = "azure";
//let age = 30;
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
  name: "Ryan",
  lastName: "ray",
};
const PI = 3.1415;

console.log(username);
//console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);

const age = 24;

if (age >= 18) {
  console.log("es mayor de edad");
} else if (age >= 13) {
  console.log("es un adolescente");
} else {
  console.log("es menor de edad");
}

const names = ["joe", "sam", "peter"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

function showUserInfo(username, userAge) {
  return `User: ${username} ${userAge}`;
}

console.log(showUserInfo("joe", 30));
