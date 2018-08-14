/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

// Normal No-args function , same Arrow Function
let greetNormal = function () {
    return "Good Morning";
};
console.log(greetNormal());

let greetArrow = () => "Good Morning";
console.log(greetArrow());
// Normal function with Args and Arrow Function
let greetMeNormal = function (name) {
    return `Good Morning ${name}`
};
console.log(greetMeNormal('John'));

let greetMeArrow = (name) => `Good Morning ${name}`;
console.log(greetMeArrow('Williams'))
// Normal function to find the sum of two numbers with Arrow Function

let sumNormal = function (a,b) {
    return a + b;
};
console.log(`The sum of a, b is : ${sumNormal(10,20)}`);

let sumArrow = (a , b) => (a+b);
console.log(`the of a, b is: ${sumArrow(20,30)}`);
// Normal function to find the length of an array with Arrow Function


// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);

// Arrow Function for the above example

let movieArrow = movies.map((movies)=>movies.length);
console.log(movieArrow);
