// arrays --> 0 index based , a data structure that allows us to store data

// declare array
const numArrays = [1, 2, 3, 4, 5];

console.log(typeof numArrays); // return as object
console.log(numArrays);

const stringArray = ["eat", "sleep", "run"];

console.log(stringArray);

// access items from array

console.log(`array[i] --> stringArray${0} is ${stringArray[0]}`);
console.log(`stringArray${1} is ${stringArray[1]}`);
console.log(`stringArray${2} is ${stringArray[2]}`);

//nested arrays
const nestArr = [1, [2, 3], true, "hi"];
console.log(nestArr);
console.log(nestArr[1][0]);

const myLetter = ["m", "r", "y", "m"];
console.log(myLetter);

console.log("Exercise");
// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

const favSingers = ["niki", "laufey", "lyn lapid"];

console.log(`First fave singer is ${favSingers[0]}`);

const favNumbers = [11, 6, 99, 2];

for (let i = 0; i < favNumbers.length; i++) {
  console.log(`fave number is ${favNumbers[i]}`);
}

const mixedArray = ["string", ["otherarray"], 123, true];

console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
