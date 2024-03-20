# Callbacks: map and filter

## Task 1

Create a function called `myMap` that takes an array and a callback function in input.

Inside, it applies the callback function to every element of the array.

It returns a new array containing the values from the original array modified depending on the result of the callback.

The function should work with different kind of inputs and different callbacks.

Also write the functions to use as callbacks so that in the examples below, given the input on the left we get the output on the right.

Examples:
```plaintext
doubles the number: [1, 2, 3] => [2, 4, 6]

uppercase strings: ["dish", "fork", "table"] => ["DISH", "FORK", "TABLE"]

capitalize strings: ["pizza", "beer", "fries"] => ["Pizza", "Beer", "Fries"]
```

## Task 2

Create a function called `myFilter` that takes an array and a callback function in input.

The function returns a new array containing only certain items, depending on the result of the callback.

Write also the functions to use as callbacks so that in the examples below, given the input on the left we get the output on the right.

Examples:

```plaintext
strings that contain "green": ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"] => ["green shirt", "green hat"]

numbers larger equal than 100: [9.99, 100, 299.99, 27.99, 2.99, 99.99] => [100, 299.99]

even numbers: [1, 2, 3, 4, 5, 6] => [2, 4, 6]
```