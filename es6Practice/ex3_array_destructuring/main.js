// array destructuring example as per es6 (ecma script version 6)
// es6 is the new version of javascript standard
const proglang = ['js','php','c','python','java']

// old method before es6
// var top1 = proglang[0];
// var top2 = proglang[1];
// var top3 = proglang[2];

// console.log(`my fav lang is ${top1}`);

// new es6 method called array destructuring

// this initializing is called array destructuring
let [top1,top2,top3,top4,top5] = proglang;
console.log(`my fav lang is ${top1}`);
console.log(`array length is ${proglang.length}`);

// we can use this to find only first or last element too
let [tfirst,,,,tlast]=proglang;
console.log(`my fav lang is ${tfirst} and ${tlast}`);

// 1. Swap two number without using third variables
// donot do let c = a; a=b,b=c;
// use js arrays assignment

let a = 10;
let b= 20;
console.log(`a=${a} and b=${b}`);
[a,b] = [b,a];
console.log(`a=${a} and b=${b}`);