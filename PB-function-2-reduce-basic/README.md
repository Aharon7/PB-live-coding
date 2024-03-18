# Reduce basic

## Task 1

Given an array of numbers, use the reduce method to calculate the sum of only the even numbers in the array

Complete the code below

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30
```


## Task 2

Given an array of numbers, use the reduce method to calculate the sum of only the even numbers in the array

Complete and fix the code below

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return ;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, "");

console.log(evenNumbersSum); // 30
```

## Task 3

Given an array of numbers, use the reduce method to calculate the sum of only the even numbers in the array

Complete and fix the code below

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator;
  } else {
    return ;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, 2);

console.log(evenNumbersSum); // 30
```


## Task 4

Given an array of numbers, use the reduce method to calculate the total of all numbers multiplied with each other 

Fix the code below to get the right result

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum(accumulator, currentValue) {
    return accumulator * currentValue;
}

let result = numbers.reduce(multiplySum, 0);

console.log(result); // 3628800
```


## Task 5

Given an array of numbers, use the reduce method to calculate the total of all numbers multiplied with each other 

Fix the code below to get the right result

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum(accumulator, currentValue) {
    return currentValue;
}
 
let result = numbers.reduce(multiplySum, 0);
 
console.log(result); // 3628800
```


## Task 6

Given an array of numbers, use the reduce method to calculate the total of all numbers multiplied with each other 

Fix the code below to get the right result

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum() {
    return currentValue;
}

let result = numbers.reduce(multiplySum, 0);

console.log(result); // 3628800
```


## Task 7

Given an array of numbers, use the reduce method to calculate the total of all numbers multiplied with each other.

If the current value is 0, skip it

Fix the code below to get the right result

```js
let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 9, 10];

function multiplyTotal(accumulator, currentValue) {
  if (currentValue === 0) {
    return ;
  } else {
    return ;
  }
}

let result = numbers.reduce(multiplyTotal, 0);

console.log(result); // 3628800
```


## Task 8

Given an array of numbers, use the reduce method to calculate the total of all numbers multiplied with each other.

If the current value is 0, skip it

Fix the code below to get the right result

```js
let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 9, 10];

function multiplyTotal(accumulator, currentValue) {
}

let result = numbers.reduce(multiplyTotal, 0);

console.log(result); // 3628800
```


## Task 9
 
Given an array of letters in input, use the reduce method to concatenate them all into a string

Fix the code below to get the right result

```js
let letters = ["a", "b", "c"];

let result = letters.reduce((accumulator, currentValue) => {}, 0);

console.log(result); // "abc"
```