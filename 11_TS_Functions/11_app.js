// Create a simple function to add two numbers
function sum(a, b) {
    var addition = a + b;
    return addition;
}
console.log("Sum of a, b is: " + sum(10, 20));
// Create the same add function with first number as 'any' type
function add(a, b) {
    var summ = 0;
    if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            summ = b;
        }
        else {
            summ = parseFloat(a) + b;
        }
    }
    else {
        summ = b;
    }
    return summ;
}
console.log("Sum of A and B is " + add(10, 40));
console.log("Sum of A and B is " + add('10', 40));
console.log("Sum of A and B is " + add({}, 40));
function findMax(a, b, c) {
    //for a
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
//console.log(`Max : no args ${findMax()}`);
console.log("Max : 1-args " + findMax(10));
console.log("Max : 2-args " + findMax(59, 30));
console.log("Max : 3-args " + findMax(3, 87, 43));
// Function Overloading in TypeScript , findMin using Math
// Create an Employee function and get an Employee Object
