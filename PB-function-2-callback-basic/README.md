# Callback basic

## Task 1

The `simpleMap()` function below takes a number and a function in input

It should return the result of applying that function to the number.

Complete the code below to get the correct output


```javascript
function simpleMap(number, callback) {
  let result = callback();

  return result;
}

function double(number) {
  return number * 2;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, double)); // expected output: 6
console.log(simpleMap(50, double)); // expected output: 100
console.log(simpleMap(0, double)); // expected output: 0
```

## Task 2

The `simpleMap()` function below takes a number and a function in input

It should return the result of applying that function to the number.

Complete the code below by declaring the missing functions (`double()`, `square()`, `triple()`) to get the correct output


```javascript
function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, square)); // expected output: 9
console.log(simpleMap(50, triple)); // expected output: 150
console.log(simpleMap(4, square)); // expected output: 16
```

## Task 3

Complete the code for the function `simpleMap()`:

- it should take a string and a function in input
- it should return the result of applying that function to the string


```javascript
function simpleMap(string, callback) {
}

function greet(string) {
  return "Hey " + string;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(simpleMap("Mark", greet)); // expected output: "Hey Mark"
console.log(simpleMap("Lenny", reverse)); // expected output: "ynneL"
console.log(simpleMap("pizza", capitalizeFirstAndLast)); // expected output: "PizzA"
```

## Task 4

The `myMap()` function below takes an array and a function in input

Complete its code so that it returns the expected output

```javascript
function myMap(items, callback) {
   let result = [];
   for (let i = 0; i < items.length; i++) {
       result.push();
   }
 
   return result;
}
 
function double(number) {
   return number * 2;
}

function square(number) {
  return number * number;
}
 
function greet(string) {
  return "Hey " + string;
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
   );
}

console.log(myMap([1, 2, 3], double)); // expected output: [2, 4, 6]
console.log(myMap([2, 4, 10], square)); // expected output: [4, 16, 100] 
console.log(myMap(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // expected output: ["PizzA", "BroccolI", "Ice creaM"]
console.log(myMap(["Rufus", "Lisa", "July"], greet)); // expected output: ["Hey Rufus", "Hey Lisa", "Hey July"]
```

## Task 5

The `myMap()` function below takes an array and a function in input

Write the 3 functions and complete the calls to `myMap()` in order to get the expected output

```javascript
function myMap(items, callback) {
   let result = [];
   for (let i = 0; i < items.length; i++) {
       result.push(callback(items));
   }
   return result;
}
 
console.log(myMap([1, 2, 3])); // expected output: [901, 902, 903]
console.log(myMap([2, 4, 10])); // expected output: [1, 2, 5] 
console.log(myMap(["Rufus", "Lisa", "July"])); // expected output: ["sufuR", "asiL", "yluJ"]
```

## Task 6

The `myFilter()` function takes an array and a function in input 

If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item

It returns the filtered array

Complete the code below to get the expected output

```javascript
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push();
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
```

## Task 7


The `myFilter()` function takes an array and a function in input 

If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item

It returns the filtered array

Complete the code below to get the expected output

```javascript
function myFilter(array, callback) {
   let result = [];
   for (let i = 0; i < array.length; i++) {
     if () {
       result.push(array[i]);
     }
   }
   return result;
}
  
function longerThan5(string) {
    return string.length > 5;
}
  
console.log(myFilter(["house", "dog", "banana", "watermelon"], longerThan5)); // expected output: ["banana", "watermelon"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => number % 3 === 0)); // expected output: [3, 6, 9, 12]
```

## Task 8


The `myFilter()` function takes an array and a function in input

If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item

It returns the filtered array

Complete the code below to get the expected output

```javascript
function myFilter(array, callback) {}

function endsWithP(string) {
  return string[string.length - 1].toLowerCase() === "p";
}

console.log(myFilter(["grasp", "clash", "laptop", "mouse", "dish"], endsWithP)); // expected output: ["grasp", "laptop"]

console.log(
  myFilter(["a", "b", "c", "d", "e", "f", "g", "h", "i"], (letter) =>
    "aeiou".includes(letter.toLowerCase())
  )
); // expected output: ["a", "e", "i"]
```