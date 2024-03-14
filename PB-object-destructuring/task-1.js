/**
 * Task 1
 *
 * 7 people participated in a marathon
 *
 * You have an array called `results` containing the names of the participants in
 * the order in which they finished the marathon: on the left, the ones that arrived
 * first
 *
 * Your task is to save in separate variables the people who finished first, second
 * and third place.
 *
 * Save the rest of the names as an array, in a separate variables.
 *
 * Print the results.
 *
 * Expected output:
 *
 * First: Sylvia
 * Second: Mike
 * Third: Kat
 * Rest: [ 'Jeff', 'Cindy', 'Brandon', 'Dylan' ]
 *
 */
const results = ["Sylvia", "Mike", "Kat", "Jeff", "Cindy", "Brandon", "Dylan"];
// Ansatz ohne destructuring
// const firstPlace = results[0];
// const secondPlace = results[1];
// const thirdPlace = results[2];
// const rest = results.slice(3);

// mit destructuring
const [firstPlace, secondPlace, thirdPlace, ...rest] = results;

console.log("First:", firstPlace); // First: Sylvia
console.log("Second:", secondPlace); // Second: Mike
console.log("Third:", thirdPlace); // Third: Kat
console.log("Rest:", rest); // Rest: [ 'Jeff', 'Cindy', 'Brandon', 'Dylan' ]
