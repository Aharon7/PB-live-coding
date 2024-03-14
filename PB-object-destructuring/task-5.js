/**
 * Task 4
 *
 * Write a function that accepts a person object as an argument and
 * returns a string with the full name (first name + last name)
 * 
 * Inside the function, use the destructure assignment to get only the properties 
 * that you need
 *
 */

const person = {
  firstName: "Jim",
  lastName: "Saul",
  age: 34,
  profession: "lawyer",
};

function fullName(person) {
  // Destrukturiere übergebenes Personenobjekt in zwei Konstanten mit denselben Namen wie die Properties
  const {firstName, lastName} = person;

  // Gebe zusammengesetzten String aus Vor- und Nachname zurück
  return `${firstName} ${lastName}`;
}

console.log(fullName(person)); // Jim Saul