/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//Ex:
//to add an array in the middle of the another array
var array1 = [20, 30, 40];
var array2 = [10].concat(array1, [50, 60, 70]);
console.log("Array 2 : " + array2);
//Array can be expanded as the parameter for another function
var value = [897, 54, 6, 67, 78, 3, 423, 13, 6, 561, 46, 1];
var minValue = Math.min.apply(Math, value);
console.log("minValue : " + minValue);
/*let values = Array.prototype.splice.call(arguments,[0]);
return values;*/
//Spread operator is used to create a new copy of an array
var cars = ['Audi', 'Jag', 'BMW', 'RR', 'Mustang'];
//let cars1 = cars.slice();//Create a new copy
var cars1 = cars.slice();
if (cars === cars1) {
    console.log('Both equal');
}
else {
    console.log('both are not equal');
}
