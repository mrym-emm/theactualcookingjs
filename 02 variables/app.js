// Variablessss

// steps -> 1. reserved keyword(var, const, let) 2. variable name 3. type of value

// declare variable via reserved keyword
let names;

// can also declare and assign one short
let age = 26;

// or make it in different lines
let hobbies;
hobbies = "sleep";

console.log(names); // if you dont assign it it will be undefined
console.log(age);
console.log(hobbies);

console.log("Cant use reserved keword as variable names");

console.log("Conventional case is likeThis");
console.log("This is called camelCase 🐪");

console.log("Differece between let and const");

let example = "mrym";

// let allows the changing the value of the variable (var also but rarely used in practice)
example = "mm";
console.log(example);

const example2 = 1;

// example2 = 2; // you cant reassign value of constant variable
console.log(example2);

// Exercises

// 1. Create variable name (name) & store your name.
// 2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
// 3. Create variable name (gender) & store your gender.
// 4. Create variable name (twitterHandle) & store your twitter handle.
// 5. Finally log all variables to the console.

let nickname = "mm";
let whatDoYouWannaBecomeInYourLife = "happy";
let gender = "girly";
let twitterHandle = "no ones cool is on twitter";

console.log(nickname);
console.log(whatDoYouWannaBecomeInYourLife, gender);
console.log(twitterHandle);
