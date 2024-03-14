/**
 * Task 2
 * 
 * Same as task 1, but with objects instead of strings
 *
 * Your task is to save in separate variables the people who finished first, second
 * and third place.
 *
 * Save the rest of the names as an array, in a separate variables.
 *
 * Print the full name (first name and last name) of the winner to the console.
 *
 * Expected output:
 *
 * Winner: Sylvia Sound
 *
 */
const results = [
    { firstName: "Sylvia", lastName: "Sound", age: 27 },
    { firstName: "Michael", lastName: "Meln", age: 25 },
    { firstName: "Kat", lastName: "Kramer", age: 29 },
    { firstName: "Jeff", lastName: "James", age: 33 },
    { firstName: "Cindy", lastName: "Clap", age: 31 },
    { firstName: "Brandon", lastName: "Blue", age: 24 },
    { firstName: "Dylan", lastName: "Cat", age: 28 },
];

// Destrukturiere das Array in 4 Konstanten
const [firstPlace, secondPlace, thirdPlace, ...rest] = results;

console.log(firstPlace);
console.log(secondPlace);
console.log(thirdPlace);
console.log(rest);

console.log(`Winner: ${firstPlace.firstName} ${firstPlace.lastName}`);