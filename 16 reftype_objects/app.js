// OBJECTS --> {label: value}
// allow us to store data in key value (essentially dictionary in python)

const person = {
  firstName: "marcy",
  lastName: "abadeer",
  age: 26,
  location: ["land of oo", "treehouse"],
  isAwesome: true,
};

console.log(person);
console.log(typeof person);

//Accessing items from our object / dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.isAwesome);

//Accessing items from our object: alternative/ bracket notation
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["location"]);
console.log(person["isAwesome"]);

console.log(
  "Depending on case, either use bracket or dot to access properties in object"
);

const bestSong = {
  singer: "niki",
};
console.log(bestSong);

bestSong.song = "Oceans & Engines";

console.log(bestSong);

//delete something from object

delete bestSong.singer;
console.log(bestSong);

//Exercise
console.log("Exercise");
// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console

const car = {
  type: "perodua",
  model: "myvi",
  color: "black",
};

console.log(car);

// updatinf propeties
car.type = "toyota";

//adding new property
car.wheels = "FWD";

console.log(car);
