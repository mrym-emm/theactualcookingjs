const fruits = ["apples", "pomegranate", "mango", "strawberries", "pineapple"];

console.log(fruits);
console.log(fruits.length);

//push(): adds a new element to the end of an array and returns the new length of an array
fruits.push("durian");

console.log(fruits);
console.log(fruits.length);

//pop(): removes the last element of an array and returns the removed element
fruits.pop("durian");

console.log(fruits);
console.log(fruits.length);

//shift(): removes the first element of an array and returns the removed element
let x = fruits.shift();

console.log(fruits);
console.log(x);
console.log(fruits.length);

//unshift(): adds a new element to the beginning of an array and returns the new length of an array
let y = fruits.unshift("epal");

console.log(fruits);
console.log(fruits.length);
console.log(y); //length of array

// concat(): joins two or more arrays and returns a result
const moreFruits = ["stawberry", "pineapple", "grapefruit"];

const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits);

const codeLanguage = ["JS", "Python", "Golang", "PHP"];

const numbers = [4, 3, 2, 5, 1];

// includes(): checks if an array contains a specified element, returns true or false
console.log(codeLanguage.includes("JS"));

// join(): allows the gabungan of elements in array
console.log(codeLanguage.join(", "));

// reverse(): reverse items in list
console.log(codeLanguage.reverse());

// slice(): selects the part of an array and returns the new array (start;inc, end;exc)
console.log(codeLanguage.slice(0, 2));

//sort(): sorts an array
console.log(numbers.sort());
