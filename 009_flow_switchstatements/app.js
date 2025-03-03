// switch statements another way to control the flow
// syntax:
// switch (expression) {
// case x:
// print
// break;
// case y:
// print
// break;
//}

let x = 1;
let bulb;

switch (x) {
  case 0:
    bulb = "Off";
    console.log(bulb);
    break;

  case 1:
    bulb = "On";
    console.log(bulb);
    break;

  default:
    bulb = "no value found";
    console.log(bulb);
}

let day = "wednesday";

switch (day) {
  case "monday":
    console.log("Today is monday");
    break;

  case "tuesday":
    console.log("Today is tuesday");
    break;

  case "wednesday":
    console.log("Today is wednesday");
    break;

  case "saturday":
    console.log("Today is saturday");
    break;

  default: // the eqivalent of else
    console.log("i dont know what day is it");
}

// Exercise
console.log("Exercise");
// 1. Create variable name (fruit) & store "banana".
// 2. If case is "Banana" print "Banana is good!"
// 3. If case is "Orange" print "I am not a fan of orange."
// 4. If case is "Apple" print "How you like them apples?"
// 5. default "I  have never heard of that fruit."

let fruit = "durian";

switch (fruit.toLowerCase()) {
  case "banana":
    console.log("Banana is good!");
    break; // always rememeber to break
  case "orange":
    console.log("I am not a fan of orange.");
    break;
  case "apple":
    console.log("How you like them apples?");
    break;
  default:
    console.log("I  have never heard of that fruit.");
}
