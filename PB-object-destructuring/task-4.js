/**
 * Task 4
 * 
 * You have an object with the information about a pet.
 * 
 * Using the destructuring assignment, save the `type` and `age`
 * into 2 separate variables and log them to the console
 * 
 * Expected output:
 * 
 * Type: cat
 * Age: 3
 *
 */

const pet = {
  name: "Bob",
  type: "cat",
  color: "orange",
  age: 3,
};

// Destukturiere das Objekt in zwei Konstanten mit denselben Namen wie die Properties
const {type, age} = pet;

console.log(`Art: ${type}`);
console.log(`Alter: ${age}`);