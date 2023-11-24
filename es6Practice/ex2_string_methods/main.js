// tempelate literal example as per es6 (ecma script version 6)
// es6 is the new version of javascript standard
let firstname = "Ahsan";
let lastname  = "Saddique";

console.log("my name is " + firstname + " " + lastname);
console.log(`my name is ${firstname} ${lastname}`);

let a = 20;
let b = 20;

console.log(`Fifty is ${a+b} and 
             not ${2*a+b}.`);


// old exersice of template literals

console.log(`${firstname}`.startsWith('A'));
console.log(`${firstname}`.endsWith('n'));
console.log(`${firstname}`.includes('san'));
console.log(`${firstname} `.repeat(10));

// templating the literal
const fname=`${firstname}`;
const lname=`${firstname} ${lastname}`;

console.log(fname.startsWith('A'));
console.log(fname.endsWith('n'));
console.log(fname.includes('san'));
console.log(lname.repeat(5));