// STRINGS

// firstVariable = "hello world";
let firstVariable = "Hello World!";
// firstVariable = 1;
firstVariable = 1;
// let secondVariable = firstVariable;
let secondVariable = firstVariable;
// secondVariable = "any string";
secondVariable = "I am a string.";

// console.log(firstVariable); //1
console.log(firstVariable);

// const yourName = "Ariel";
const myName = "Miranda";
// let hello = `Hello, my name is ${yourName}`
let hello = `Hello!, my name is ${myName}.`
// console.log(hello);
console.log(hello);

//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a <= b);
console.log(c >= d);
console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');
console.log(48 == '48');

//the Farm
let animal = "cow";
const moo = (a) => {
   return a.toLowerCase === "cow" ? "mooooo" : "Hey! You're not a cow."
}
console.log(moo(animal));

//Driver's Ed
function checkAge(personAge) {
   if (personAge >= 16) {
     return "Here are the keys!";
   } else {
     return "Sorry, you're too young.";
   }
 }
 var age = 15;
 var message = checkAge(age);
 console.log(message);

//LOOPS
// for (let i = 0; i < 100; i++)

//The Basics
for (let i = 0; i <= 10; i++) {
   console.log(i);
 }
 
//  for (let i = 10; i <= 400; i++) {
//    console.log(i);
//  }

// for (var i = 12; i <= 4000; i += 3) {
//    console.log(i);
//  }

//Get Even

//Give Me 5

//Savings Account

//ARRAYS & CONTROL FLOW

//OBJECTS


// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


