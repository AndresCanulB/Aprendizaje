const { myWebAddress, username, hasHobbies, points, user, PI } = require("./module/myModule");

console.log(myWebAddress, username, hasHobbies, points, user, PI);

const { add, substract, multiply, divide } = require("./math");

console.log(add(1, 2));
console.log(substract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

const math = require("./math");

console.log(math.add(1, 2));
console.log(math.substract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));
