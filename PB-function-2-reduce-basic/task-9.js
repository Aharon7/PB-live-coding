/*
Task 9
 
Given an array of letters in input, use the reduce method to 
concatenate them all into a string

Fix the code below to get the right result
*/


let letters = ["a", "b", "c"];

let result = letters.reduce((accumulator, currentValue) => accumulator + currentValue, "");

console.log(result); // "abc"