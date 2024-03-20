/**
 * The myFilter() function takes an array and a function in input 
 * 
 * If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item
 * It returns the filtered array
 * 
 * Complete the code below to get the expected output
 */
function myFilter(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    // Wenn Ergebnis des Callbacks auf das jeweilige Element
    // truthy Wert darstellt
    if (callback(array[i])) {
      // Fuege jeweiliges Element dem Ergebnisarray hinzu
      result.push(array[i]);
    }
  }
  
  return result;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 === 1;
}


console.log(myFilter([1, 2, 3, 4, 5], isEven)); // expected output: [2, 4]
console.log(myFilter([1, 2, 3, 4, 5], isOdd)); // expected output: [1, 3, 5]
console.log(myFilter(["pizza", "pasta", "ice cream", "potato", "broccoli"], (item) => item.startsWith("p"))); // expected output: ["pizza, "pasta", "potato"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number > 5)); // expected output: [6, 7, 8, 9, 10]
