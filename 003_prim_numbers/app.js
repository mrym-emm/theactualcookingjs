// primitive -> set of basic data types from which all other data types are constructed

// 1. numbers

let num = 11.01;

// to check type of variable (in this case its number)
console.log(typeof num);

// basic math
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// first declare and assign counter
let counter = 0;

console.log("The ++ in js allows incrementation of 1");
console.log("before is ", counter);

counter++;
counter++;

console.log("now is", counter);

console.log("the opposite is also true, use -- to decrement by 1");

counter--;
counter--;
counter--;
counter--;

console.log("Voila! now its: ", counter);

console.log("Exercises!");
// Exercise
// 1. Create Variable name (firstFavNum) & store your favorite number.
// 2. Create Variable name (secondFavNum) & store your second fav number.
// 3. Add (firstFavNum & secondFavNumber).
// 4. Subtract (firstFavNum & secondFavNumber).
// 5. Multiply (firstFavNum & secondFavNumber).
// 6. Divided (firstFavNum & secondFavNumber).
// 7. Check (firstFavNum Mod secondFavNumber)
// 8. Check the power of (firstFavNum)

let firstFavNum = 6;
let secondFavNum = 11;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);
