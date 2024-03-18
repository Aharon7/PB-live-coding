/*
Task 2

Given an array of numbers, use the reduce method to calculate the sum of only
the even numbers in the array

Complete and fix the code below
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven(accumulator, currentValue) {
  // Wenn currentValue gerade ist (restlos durch 2 teilbar)
  if (currentValue % 2 === 0) {
    // Gebe die Summe von der Zwischensumme und dem jetzigen Wert zurueck
    return accumulator + currentValue;

  } else {
    // Ansonsten: Gebe unveraenderte Zwischensumme zurueck
    return accumulator;
  }
}

// Aufruf reduce mit Zahl 0 als Initialwert (Startwert)
let evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30