// Function Declaration
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("mm");

// Function expression -> when you store a function in a variable
// you need to initialize this function before calling it
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("mrym");
