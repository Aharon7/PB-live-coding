/*
Task 6

Given an array of numbers, use the reduce method to calculate the total
of all numbers multiplied with each other 

Fix the code below to get the right result
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum(accumulator, currentValue) {
    return accumulator * currentValue;
}

let result = numbers.reduce(multiplySum, 1);

console.log(result); // 3628800