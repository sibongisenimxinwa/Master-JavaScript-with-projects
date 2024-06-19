/* Activating strict mode */
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // error
// const private = 534; // error

/* Functions */
// function logger() {
//   console.log("My name is Sibongiseni Mxinwa");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num = Number('23');

/* Function Declarations vs. Expressions */
// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

/* Function  Expressions */
// const calcAge2 = function calcAge2(birthYear) {
//   const age2 = 2037 - birthYear;
//   return age2;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

/* Arrow Functions */
// const calcAge2 = function calcAge2(birthYear) {
//   return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Sibongiseni'));
// console.log(yearsUntilRetirement(1995, 'Sibo'));

/* Functions calling other functions */
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/* Reviewing Functions */
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//   }
// };

// console.log(yearsUntilRetirement(1991, "Sibongiseni"));
// console.log(yearsUntilRetirement(1950, "Mike"));

/* Coding Challenge #1 */

/* 
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
 */

/* Coding Challenge Solution #1 */
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

/* Introduction to Arrays */
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Sibongiseni";
// const Sibongiseni = [firstName, "Mxinwa", 2024 - 1991, "teacher", friends];
// console.log(Sibongiseni);
// console.log(Sibongiseni.length);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(age1, age2, age3, ages);

/* Basic Array Operations (Methods) */
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// const popped = friends.pop(); // removes the last element
// console.log(popped);
// console.log(friends);

// friends.unshift("John");// adds an element to the beginning
// console.log(friends);

// const shifted = friends.shift(); // removes the first element
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Michael"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//Coding Challenge #2
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

/** Objects */
// const sibo = {
//   firstName: "Sibongiseni",
//   lastName: "Mxinwa",
//   age: 2037 - 1991,
//   job: "Software Developer",
//   friends: ["Michael", "Peter", "Steven"]
// };
// console.log(sibo);

// console.log(sibo.lastName);
// console.log(sibo["lastName"]);

// const nameKey = "Name";
// console.log(sibo["first" + nameKey]);
// console.log(sibo["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Sibongiseni? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(sibo[interestedIn]);

// if (sibo[interestedIn]) {
//   console.log(sibo[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// sibo.location = "South Africa, Johannesburg";
// sibo["twitter"] = "@sibomxinwa";
// console.log(sibo);

// // Challenge
// // "Sibongiseni has 3 friends, and his best friend is called Michael"
// console.log(
//   `${sibo.firstName} has ${sibo.friends.length} friends, and his best friend is called ${sibo.friends[0]}`
// );

// Object Methods

// const sibo = {
//   firstName: "Sibongiseni",
//   lastName: "Mxinwa",
//   birthYear: 1991,
//   job: "Software Developer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(sibo.calcAge(1991));

// // Challenge
// // "Sibongiseni is 46 years old and he has a drivers license"
// console.log(
//   `${sibo.firstName} is ${sibo.age} years old and he has ${
//     sibo.hasDriversLicense ? "a" : "no"
//   } drivers license`
// );

// Coding Challenge #3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }


// Iterators and loops

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// Looping Arrays, Breaking and Continuing

// const sibo = [
//   "Sibongiseni",
//   "Mxinwa",
//   2037 - 1991,
//   "Software Developer",
//   ["Michael", "Peter", "Steven"],
//   true
// ];

// const types = [];
// for (let i = 0; i < sibo.length; i++) {
//   // Reading from sibo array
//   console.log(sibo[i], typeof sibo[i]);

//   // Filling types array
//   // types[i] = typeof sibo[i];
//   types.push(typeof sibo[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < sibo.length; i++) {
//   if (typeof sibo[i] !== "string") continue;
//   console.log(sibo[i], typeof sibo[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < sibo.length; i++) {
//   if (typeof sibo[i] === "number") break;
//   console.log(sibo[i], typeof sibo[i]);
// }

// Looping Backwards and Loops in Loops
// const sibo = [
//   "Sibongiseni",
//   "Mxinwa",
//   2037 - 1991,
//   "Software Developer",
//   ["Michael", "Peter", "Steven"],
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = sibo.length - 1; i >= 0; i--) {
//   console.log(i, sibo[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise} --------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// The while Loop
// rep = 1;
// while (rep <= 2) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

// Coding Challenge #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); 
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
