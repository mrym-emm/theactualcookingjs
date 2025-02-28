// LOGICAL OPERATORS: https://www.realdigital.org/doc/e127ebfa82dbc904b5c0dac5d1adce8e

// 1. AND (&&)
const a = true;
const b = false;
const c = 4;

console.log(a && b);

console.log(c > 1 && c < 5); // true
console.log(c > 1 && c > 5); // false

// 2. OR (||)
console.log(a || b);
console.log(b || b);

console.log(c > 1 || c < 5); // true
console.log(c > 1 || c > 5); // true
console.log(c < 1 || c > 5); // false

// 3. NOT (!) (turns true to false and vice versa)
console.log(!a);
console.log(!b);

let password = "mmm";

if (password.length >= 3 || password.includes("!")) {
  console.log("Valid password");
} else {
  console.log("Invalid passowrd");
}

let isTrue = true;

console.log(!isTrue);
