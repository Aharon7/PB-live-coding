/*
Task 1

Given an array of numbers, use the reduce method to calculate 
the sum of only the even numbers in the array

Complete the code below
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven(accumulator, currentValue) {
  // Wenn currentValue ohne Rest durch 2 teilbar (gerade Zahl)
  if (currentValue % 2 === 0) {
    // Gebe currentValue auf accumulator aufgerechnet zurueck
    return accumulator + currentValue;

  } else {
    // sonst gebe accumulator (Zwischensumme zurueck)
    return accumulator;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30