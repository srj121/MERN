// Using let and const to define variables
let name = "Suraj";
const age = 26;

// Using template literals for string interpolation
console.log(`My name is ${name} and I am ${age} years old.`);

// Using arrow functions
const add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5

// Using default parameters
const greet = (name = "World") => console.log(`Hello, ${name}!`);
greet(); // Output: Hello, World!
greet("Suraj"); // Output: Hello, Suraj!

// Using object destructuring
const person = { name1: "Suraj", age1: 26 };
const { name1, age1 } = person;
console.log(name1); // Output: Suraj

// Using the spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// Using classes and inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Rufus");
d.speak(); // Output: Rufus barks.
