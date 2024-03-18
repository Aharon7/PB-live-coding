/*
Task 7

Given an array of numbers, use the reduce method to calculate 
the total of all numbers multiplied with each other.

If the current value is 0, skip it

Fix the code below to get the right result
*/

let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 9, 10];

function multiplyTotal(accumulator, currentValue) {
  // Wenn derzeitiger Wert 0 ist
  if (currentValue === 0) {
    // Gebe unveraenderte Zwischensumme zurueck
    return accumulator;

  } else {
    // Ansonsten: Gebe Produkt aus Zwischensumme und derzeitigem Wert zurueck
    return accumulator * currentValue;
  }
}

let result = numbers.reduce(multiplyTotal, 1);

console.log(result); // 3628800
