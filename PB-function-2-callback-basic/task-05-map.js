/**
 * The myMap() function below takes an array and a function in input
 * 
 * Write the 3 functions and complete the calls to myMap() in order to get the expected output
 * 
 */

function myMap(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
      result.push(callback(items[i]));
  }
  return result;
}

// function plus900(number) {
//   return number + 900;
// }

// function half(number) {
//   return number / 2;
// }

// function reverse(string) {
//   return string.split('').reverse().join('');
// }


// console.log(myMap([1, 2, 3], plus900)); // expected output: [901, 902, 903]
// console.log(myMap([2, 4, 10], half)); // expected output: [1, 2, 5] 
// console.log(myMap(["Rufus", "Lisa", "July"], reverse)); // expected output: ["sufuR", "asiL", "yluJ"]

// ODER direkt anoynm als Arrow-function
console.log(myMap([1, 2, 3], number => number+900)); // expected output: [901, 902, 903]
console.log(myMap([2, 4, 10], number => number/2)); // expected output: [1, 2, 5] 
console.log(myMap(["Rufus", "Lisa", "July"], string => string.split('').reverse().join(''))); // expected output: ["sufuR", "asiL", "yluJ"]
