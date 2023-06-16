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

let array = ["apple", "banana", "orange", "mango"];
let longest = array.reduce((firstEl, secondEl) => {
   return firstEl.length > secondEl.length ? firstEl : secondEl; //if the first el is greater than the second el return firstEl
}
);
console.log(longest)

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

// ### H. What's in Your Closet?
const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
];
const thomsCloset = [ // Thom's closet is more complicated. Check out this nested data structure!!
   [ // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
   ], [ // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
   ], [ // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
   ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

kristynsCloset.splice(6, 0, "raybans"); // Add "raybans" to her closet after "yellow knit hat".
console.log(kristynsCloset);

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

const firstShirt = thomsCloset[0][0];
console.log(firstShirt);

const onePant = thomsCloset[1][1];
console.log(onePant);

const oneAcc = thomsCloset[2][2];
console.log(oneAcc);

console.log("Thom is looking fierce in a " + firstShirt + ", " + onePant + " and " + oneAcc + "!");

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);



// ## IV. Functions

// ### A. printGreeting
function printGreeting(name) {
   return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));


// ### B. printCool
function printCool(name) {
   console.log(`${name} is cool`);
}
printCool("Captain Reynolds");


// ### C. calculateCube
function calculateCube(number) {
   const volume = number ** 3; //This calculates the volume of the cube
   console.log(volume);
}
calculateCube(5);


// D. isVowel
function isVowel(character) {
   if (character === 'a' || character === 'A' ||
      character === 'e' || character === 'E' ||
      character === 'i' || character === 'I' ||
      character === 'o' || character === 'O' ||
      character === 'u' || character === 'U') {
      return true;
   }
   return false;
}

console.log(isVowel("a"));
console.log(isVowel("A"));
console.log(isVowel("e"));
console.log(isVowel("E"));
console.log(isVowel("i"));
console.log(isVowel("I"));
console.log(isVowel("o"));
console.log(isVowel("O"));
console.log(isVowel("u"));
console.log(isVowel("U"));
console.log(isVowel("b"));


// ### E. getTwoLengths
function getTwoLengths(str1, str2) {
   const length1 = str1.length;
   const length2 = str2.length;
   return [length1, length2];
}

console.log(getTwoLengths("Hank", "Hippopopalous"));


// ### F. getMultipleLengths
function getMultipleLengths(arr) {
   const lengths = [];
   for (let i = 0; i < arr.length; i++) {
      lengths.push(arr[i].length);  //arr[i].length retrieves the length of the string, then added to the lengths array using the push() method
   }
   return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// ### G. maxOfThree
function maxOfThree(num1, num2, num3) {
   if (num1 >= num2 && num1 >= num3) {
      return num1;
   } else if (num2 >= num1 && num2 >= num3) {
      return num2;
   } else {
      return num3;
   }
}

console.log(maxOfThree(12, 8, 11));


// ### H. printLongestWord
function printLongestWord(words) {
   let longestWord = '';
   for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) { //it checks if the length of the current word (words[i].length) is greater than the length of the longestWord 
         longestWord = words[i];
      }
   }
   return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



//OBJECTS
// ### A. Make a user object
const user = {
   name: "John Doe",
   email: "johndoe@example.com",
   age: 30,
   purchased: []
};

// ### B. Update the user
const updatedUser = {
   ...user, // Spread the properties of the original user object
   email: "newJohnEmail@example.com",
   age: user.age++, // Increment the age value using the postfix operator age++
   location: "John Location" // Add the new key "location" with its value
};

// ### C. Adding keys and values
// const updatedUser = {
//    ...user, 
//    location: "Some Location" // Add the new key "location" with its value
//  };


// ### D. Shopaholic! 
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");
console.log(user.purchased[user.purchased.length - 1]);


// ### E. Object-within-object
user.friend = {
   name: "Grace Hopper",
   age: 85,
   location: "Grace's Location",
   purchased: []
};
console.log(user)
console.log(user.friend.name); //2.
console.log(user.friend.location); // 3.

user.friend.age = 55; //4.

user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend.purchased[1]); // 6.


// ### F. Loops
for (let i = 0; i < user.purchased.length; i++) {
   console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
   console.log(user.friend.purchased[i]);
}

// ### G. Functions can operate on objects
function updateUser() {
   user.age++;
   user.name = user.name.toUpperCase();
}

function oldAndLoud(person) {
   person.age++;
   person.name = person.name.toUpperCase();
}
oldAndLoud(user);


// # Requirements Complete! Hungry for More?

// ## Cat Combinator

// 1. ### Mama cat
const cat1 = {
   name: "Joe",
   breed: "Mog",
   age: 19
}

console.log(cat1.age);
console.log(cat1.breed);

// 2. ### Papa cat
const cat2 = {
   name: "Jam",
   breed: "Siamese",
   age: 45
}

// 3. ### Combine Cats!
function combineCats(mama, papa) {
   console.log(mama);
   console.log(papa);
}
combineCats(cat1, cat2);

combineCats({
   name: "Craig",
   age: 20,
   breed: "unknown"
},
   {
      name: "Linda",
      age: 20,
      breed: "undefined"
   }
);

// **Make it so the combineCats function will return a combination of the two incoming cats!**
function combineCats(mama, papa) {
   const combinedCat = {
      name: mama.name + papa.name,
      age: 1,
      breed: mama.breed + "-" + papa.breed
   };
   return combinedCat;
}
console.log(combineCats(cat1, cat2));

// ### Cat brain bender
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

//**three** levels deep 
console.log(combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));


