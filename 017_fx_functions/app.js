// a function is a blcok of code that performs a specific task
// functions makes the code reusable. declare it once and use it multiple times
// fx makes program easier as each small task is divided into a function
// fx increases readability
// DRY --- ugh but dont repear urself eventho i know you want to
// syntax --> functionName(parameterIfAny) {...}

// function declaration
function greet() {
  console.log("Hello!"); //console log is mostly for programmer
}

// call or run or execute the function
greet();

// fx with parameter
function sayHello(name) {
  console.log(`Hi ${name}`);
}

sayHello("maryam");

// return --> function

function add(a, b) {
  return a + b;
}

let y = add(1, 2);

console.log(y);

console.log(add(11, 2));

console.log("Exercises");
// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(a, b) {
  return a * b;
}

console.log(myFunction(3, 8));
