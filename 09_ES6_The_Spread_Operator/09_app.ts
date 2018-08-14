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

let array1 = [20,30,40];
let array2 = [10,...array1,50,60,70];
console.log(`Array 2 : ${array2}`);


//Array can be expanded as the parameter for another function
let value = [897,54,6,67,78,3,423,13,6,561,46,1];
let minValue = Math.min(...value);
console.log(`minValue : ${minValue}`);
    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/

//Spread operator is used to create a new copy of an array
let cars = ['Audi','Jag','BMW','RR','Mustang'];
//let cars1 = cars.slice();//Create a new copy
let cars1 = [...cars];

if(cars ===cars1){
    console.log('Both equal');
}
else{
    console.log('both are not equal');
}

