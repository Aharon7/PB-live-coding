/* 
    Task 1
*/
function myMap(items, callback) {
    let result = [];

    // items.forEach(item => result.push(callback(item)));

    for (const item of items) {
        result.push(callback(item));
    }

    return result;
}

// doubles the number
console.log(myMap([1,2,3], item => item*2)); // [2, 4, 6]

// uppercase strings
console.log(myMap(["dish", "fork", "table"], word => word.toUpperCase())); // ["DISH", "FORK", "TABLE"]

// capitalize strings
console.log(myMap(["pizza", "beer", "fries"], word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
})); // ["Pizza", "Beer", "Fries"]


/* 
    Task 2
*/
function myFilter(items, callback) {
    let result = [];

    for (const item of items) {
        if (callback(item)) result.push(item);
    }

    return result;
}

// filter strings that contain "green"
const clothes = ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"];
console.log(myFilter(clothes, word => word.toLowerCase().includes('green'))); // ["green shirt", "green hat"]


// filter numbers larger equal than 100
const numbers = [9.99, 100, 299.99, 27.99, 2.99, 99.99];
console.log(myFilter(numbers, number => number >= 100)); // [100, 299.99]


// filter even numbers
console.log(myFilter([1, 2, 3, 4, 5, 6], number => number % 2 === 0)); // [2, 4, 6]