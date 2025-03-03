// When we provide function as an (arguement) to other
//  function that function is known as callback function

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

// so callback is essentially one big function, that would take
// a function as its arguement. the arguement function is declared as well
// for it all to work seamlessly

// so here the main function, greet takes name as its parameter
// and cb as its arguement
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// what is cb? well here you go
function cb() {
  console.log(`I am callback function`);
}

// then call the main function
greet("mrym", cb);

// Exercises
console.log("Exercises");

// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  const number = 10;
  fn(number);
}

showCallFunc(function (number) {
  console.log(number);
});

function saySomething(msg, callback) {
  console.log(`${msg}`); // prints the message
  callback(); // placeholder for the second function
}

function doneTalking() {
  console.log("Im done talking!");
}

saySomething("I think I'll surrender", doneTalking);

//  loops tru the array of number and apply a certain operation on it
function processArray(numbers, callback) {
  for (let num of numbers) {
    console.log(callback(num)); // callback is just a placeholder
  }
}

function mult(num) {
  return num * 2;
}

processArray([1, 3, 5], mult);
