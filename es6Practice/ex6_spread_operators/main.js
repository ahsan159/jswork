// this is completely reverse of rest operators
// spread operators replace apply()  method;
const sum = (a,b,c) =>{
    return a+b+c;
}
let arrayInput = [3,6,9];
// this triple dot operator ... will divide array into seperate variables
console.log( sum(...arrayInput));

// array concatenation using spread operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

// old method
arr1 = arr1.concat(arr2);
console.log(arr1);

// new method using spread operator
arr1 = [...arr1,...arr2,...arr3];
console.log(arr1);

// array copy function using spread operator

let arrc1 = [1,2,3];
let arrc2 = arrc1;
console.log(arrc2);
//adding two new words to arrc2
// old method
arrc2.push(4,5);
console.log("arr2 " + arrc2);
console.log("arr1 " + arrc1);
// this will add two values in both arrc1 and arrc2
// spread operator will avoid this and keep arrc1 const/unaltered

let arrc3 = [...arrc1,6,7];
console.log("arrc3 is " + arrc3);
console.log("arrc1 is " + arrc1);
// this time arrc1 will not be altered
let arrc4 = [...arrc1,4,5,...arrc3];
console.log("arrc4n is " + arrc4);