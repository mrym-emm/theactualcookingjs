// if == money
// -> buy some stuff
// else (no money)
// -> bring money

// if (condition) {...}
// else if (condition) {...}
// else {...}

let a = 10;
let b = 10;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

console.log(a >= b); // will return false

let time = 26;
let greetings;

if (time < 10) {
  greetings = "Good Morining!";
  console.log(greetings);
} else if (time < 20) {
  greetings = "Good Day";
  console.log(greetings);
} else {
  greetings = "Good Night";
  console.log(greetings);
}

// Exercises

// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

let password;
password = 8;

if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too Long Password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}
