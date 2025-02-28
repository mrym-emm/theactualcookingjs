// strings

let userName = "mm";
let realName = "            mrym          ";

console.log(userName.length);

let catName = userName + realName;

console.log(userName);
console.log(realName);
console.log(catName);

//1. concatenations
let catName1 = userName.concat(realName); // another way to concat
console.log(catName1);

//2. append (aka adding at the end of the string)
userName += " something else";
console.log(userName);

//3. length
console.log(userName.length);

//4. cases
console.log(userName.toLowerCase()); // change string to lower
console.log(userName.toUpperCase()); // change string to UPPER

//5. slice(inc, exc)
console.log(realName.slice(0, 2));

//6. split & join --> split returns an array of the splitted characters
// then join it back
console.log(realName.split("").join(""));

// 7. includes --> checks is the character is in string
console.log(realName.includes("m"));
console.log(realName.includes("M")); // return false bcs m != M

//8. trim (removes empty spaces)
console.log(realName.trim());

// 9. backticks (allow multiline)

let desc = `isnt this
cool?`;

console.log(desc); // and will print it as it is

// something like a f string
let fakeName = "marcy";
let fakeName2 = "pan";

let fullFakeName = `${fakeName}${fakeName2} isnt this cool?`;

console.log(fullFakeName);

// Exercises
console.log("Exercises");

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Kyungsoo";
let favActorLastName = "Do";
let fullActorName = `${favActorLastName} ${favActorFirstName}`;

console.log(fullActorName);
console.log(fullActorName.toLowerCase());
console.log(fullActorName.toUpperCase());

let message = `My favourite person is ${favActorLastName} ${favActorFirstName}
Mostly because he seems kind. And it helps that he has a voice of an angel.
He, like all of us, deserves the best <3`;

console.log(message);
