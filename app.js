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
// for (let i = 12; i <= 4000; i += 3) {
//    console.log(i);
//  }

//Get Even
// for (let i = 1; i <= 100; i++) {
//    if (i % 2 === 0) {
//      console.log(i + " <-- is an even number");
//    } else {
//      console.log(i);
//    }
//  }

//Give Me 5
// for (let i = 0; i <= 100; i++) {
//    if (i % 5 === 0) {
//       console.log("I found a " + i + ". High five!");
//    }
//    else if (i % 3 === 0) {
//       console.log("I found a " + i + ". Three is a crowd");
//    }
// }

//Savings Account
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
   bank_account += i;
}

console.log("Bank Account: $" + bank_account);
bank_account = 0;

for (let i = 1; i <= 100; i++) {
   bank_account += i * 2;
}

console.log("Bank Account (Doubled Weekly): $" + bank_account);



//ARRAYS & CONTROL FLOW

// ### B. Easy Does It
let quotes = [
   "Happy coding!",
   "Happiness is when your code runs without error.",
   "You are the {CSS} to my </HTML>."
];


//### C. Accessing elements
const randomThings = [1, 10, "Hello", true];

const firstElement = randomThings[0]; // access the 1st element in the array
console.log(firstElement);

randomThings[2] = "World"; // Change the value of `"Hello"` to `"World"`
console.log(randomThings);


// ### D. 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

const thirdElement = ourClass[2]; // access the 3rd element of the array
console.log(thirdElement);

ourClass[4] = "Octocat"; // Change the value of "Github" to "Octocat"

ourClass.push("Cloud City"); //Add a new element, "Cloud City" to the array
console.log(ourClass);


// ### E. Mix It Up
const myArray = [5, 10, 500, 20];

myArray.push("Aegon", "Hello"); // Add strings to the end of the array

myArray.shift(); // Remove the 5 from the beginning of the array

myArray.unshift("Bob Marley"); // Add "Bob Marley" to the beginning of the array

myArray.pop(); // Remove a string from the end of the array

myArray.reverse(); // Reverse the array

console.log(myArray);


// ### F. Biggie Smalls
const number = 101;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// ### G. Monkey in the Middle
const Middle = 8; 

if (Middle < 5) {
  console.log("little number");
} else if (Middle > 10) {
  console.log("big number");
} else {
  console.log("Monkey")
}


//OBJECTS


// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


