// Type conversion --> changing one to another

let money = 100;
console.log(`Money is type ${typeof money}`);

money = "100";
console.log(`Now is type ${typeof money}`);

// convert string to numbero
let tip = "1";
console.log(`Tip ${tip} is originally type ${typeof tip}`);

// methods of converting
// tip = parseInt(tip); // (1)
// tip = +tip; // (2)
tip = Number(tip); // (3)

console.log(`Now tip ${tip} is type ${typeof tip}`);

//------------------------------------------
// convert number to string

// declare
let tax = 100;
console.log(`Tax ${tax} is originally type ${typeof tax}`);

// methods of converting
// tax = tax.toString(); //(1)
tax = String(tax); //(2)

console.log(`Now tax ${tax} is type ${typeof tax}`);

//------------------------------------------
// convert string to floating
let debt = "00.00";
console.log(`Debt ${debt} is originally type ${typeof debt}`);

debt = parseFloat(debt);
console.log(`Now debt ${debt} is type ${typeof debt}`);
