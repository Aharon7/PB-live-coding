/*
Task 3

Given an array of numbers, use the reduce method to calculate 
the sum of only the even numbers in the array

Complete and fix the code below
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven(accumulator, currentValue) {
  // Wenn gerade ist
  if (currentValue % 2 === 0) {
    // Gebe neue Summe zurueck
    return accumulator + currentValue;

  } else {
    // Gebe unveraenderte Zwischensumme zurueck
    return accumulator;
  }
}

// Auruf reduce mit Initialwert 0
let evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30