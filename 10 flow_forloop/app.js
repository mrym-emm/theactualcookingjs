//  for loops --> repeating a code of block without explicitly repeating oneself
// golden rule --> do not repeat
// syntax
// for (initialExpresson; condition; incrementExpression) {}

// 1) i starts at 0
// 2) as long as i is less than 5, run the code
// 3) increment i by 1 to keep on running
for (let i = 0; i <= 5; i++) {
  console.log(`Hello worlds ${i}`);
}

// nested loop (run outer loop then inner)

for (let i = 0; i < 10; i++) {
  console.log(`---Outer loop--- ${i}`);

  // nested loop
  for (let j = 1; j <= 4; j++) {
    console.log(`---Inner loop--- ${j}`);
  }
}

// Exercise
console.log("Exercise");
// Print your name & numbers from 0 through 100

for (let i = 0; i <= 100; i++) {
  console.log(`my name is mm ${i}`);
}
