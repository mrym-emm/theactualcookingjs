// Scope in JS refers to the current context of code, which
// determines the accessibility of variable to JS

// 2 type of scope:

// Global scope variables are those declared outside of a block

let textMessage = "hi"; // can be accessed anywhere even inside a fx

console.log(textMessage);

// local scope variables are those declared inside of a block
// {
//   let textMessage1 = "hi";
// }
// console.log(textMessage1); // will get error here bcs the textMessage
// // variable is inside the block(curly brackers)

// example
function showMessgae() {
  let message = "Hi"; // local (if i run this outside, get error)
  console.log(message);
}

// for example:-
// console.log(message); // will say this is not defined since it exist only locally not globally

showMessgae();

// for loop (index, condition, increment)
// i is local here
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // will get error if we want to access it globally
