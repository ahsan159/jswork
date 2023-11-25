let num1 = 5;
let num2 = 5.2;
let num3 = "ahsan";
let num4 = NaN;
let num5 = Infinity;

console.log("Checking isFinite")
console.log(isFinite(num1));
console.log(isFinite(num2));
console.log(isFinite(num3));
console.log(isFinite(num4));
console.log(isFinite(num5));

console.log("Checking isNaN")
console.log(isNaN(num1));
console.log(isNaN(num2));
console.log(isNaN(num3));
console.log(isNaN(num4));
console.log(isNaN(num5));

console.log("Checking isInteger")
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
console.log(Number.isInteger(num3));
console.log(Number.isInteger(num4));
console.log(Number.isInteger(num5));
