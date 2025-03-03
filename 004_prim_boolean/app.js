// Booleans -> true || false

let isTrue = true;
let number = 10;

console.log(number + undefined);
console.log("NaN is non a number");

// falsy values

// -> false
// -> null
// -> undefined
// -> 0
// -> -0
// -> NaN
// -> '', "" (thts an empty string)

let notDefined = undefined; // set by js compiler
notDefined = null; // set by programmer
console.log(notDefined);

console.log("Exercises");
// 1. Create Variable name (isJsProgrammingLanguage) & store true as a value.
// 2. Create variable name (isJsHard) & store false as a value.
// 3. Create variable name (favNumb) & store your favorite number inside.
// 4. Now Add favNumber with the value of undefined.

let isJsProgrammingLanguage = true;
let isJsHard = false;

let favNumb = 6;

console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined); // returns a NaN
