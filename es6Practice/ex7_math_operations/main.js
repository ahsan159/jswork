// use of Math.sign() and Math.trunc()

let number = 5.5;
console.log(Math.sign(number));
// Math.sign(num) return 1 if number is positive -1 for negative
// 0 == 0 and -0 == -0
// NaN for invalid function

let num2 = 5.556;
console.log(Math.trunc(num2));
// using this function we can remove decimal places

// Exponenetial operators in ES6
// The exponenetial operator (**) raised the first operand to the
// power of the second operand.
// this is same as x**y == Math.pow(x,y)

let x = 3;
let y = 5;
console.log(`${x**y}`);
console.log(`${[x,y]}`)
let d = [x,y];
console.log(`${d[0]} ${d[1]}`)