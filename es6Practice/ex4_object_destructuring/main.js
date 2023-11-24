// object destructuring example as per es6 (ecma script version 6)
// es6 is the new version of javascript standard

// const bioData = {
//     name:"ahsan",
//     age:25,
//     education:"MS"
// }

// old method
// console.log(`my name is ${bioData.name}`);

// new method
// these new variables should be same as in object
// let {name,age,education} = bioData;

// console.log(`my name is ${name}`);
// console.log(`my age is ${age}`);
// console.log(`my qualification is ${education}`);

// to get new variable name you have to use ':'

// let {name:myname,age:ages,education:edu} = bioData;

// console.log(`my name is ${myname}`);
// console.log(`my age is ${ages}`);
// console.log(`my qualification is ${edu}`);

// to access object in object 

const bioData = {
    name:"ahsan",
    age:25,
    education:"MS",
    hobbies :{first:'programming',
    second:'music'
    }
} 

let {name:myname,age:ages,education:edu,hobbies:hob} = bioData;

console.log(`my name is ${myname}`);
console.log(`my age is ${ages}`);
console.log(`my qualification is ${edu}`);
console.log(`my hobbies are ${hob.second}`);