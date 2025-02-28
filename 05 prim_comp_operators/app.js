// comparison operators

// 1) Relational operators (>, <, >=, <=)
console.log("Relational operators");
console.log(" ");
console.log(11 > 6);
console.log(11 >= 6);
console.log(11 < 6);
console.log(11 <= 6);

//-------------------------------
// 2) Equality operators (people ususally use strict)
// === strict equality (check type + value)
// !== strict non equality (type + value)
// == loose equality (only check value)
// != not equality (value)

console.log("Equality operators");

console.log(11 === "11"); // will return false bcs string 11 and number 11 not the same data type

console.log(11 == "11"); // true

console.log(11 !== "11"); // true

console.log(11 != "11"); // false bcs its doesnt check datatype

// Exercise
console.log("Exercises");
// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

let firstFavNumb = 6;
let secondFavNumb = 11;

console.log(
  "Is ",
  firstFavNumb,
  "greater than",
  secondFavNumb,
  ":",
  firstFavNumb > secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "less than",
  secondFavNumb,
  ":",
  firstFavNumb < secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "greater than or equals to",
  secondFavNumb,
  ":",
  firstFavNumb >= secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "less than or equals to",
  secondFavNumb,
  ":",
  firstFavNumb <= secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "strictly equal to",
  secondFavNumb,
  ":",
  firstFavNumb === secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "loosely equal to",
  secondFavNumb,
  ":",
  firstFavNumb == secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "losely not equal to",
  secondFavNumb,
  ":",
  firstFavNumb != secondFavNumb
);

console.log(
  "Is ",
  firstFavNumb,
  "strcitly not equal to",
  secondFavNumb,
  ":",
  firstFavNumb !== secondFavNumb
);
