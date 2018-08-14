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
var greetNormal = function () {
    return "Good Morning";
};
console.log(greetNormal());
var greetArrow = function () { return "Good Morning"; };
console.log(greetArrow());
// Normal function with Args and Arrow Function
var greetMeNormal = function (name) {
    return "Good Morning " + name;
};
console.log(greetMeNormal('John'));
var greetMeArrow = function (name) { return "Good Morning " + name; };
console.log(greetMeArrow('Williams'));
// Normal function to find the sum of two numbers with Arrow Function
var sumNormal = function (a, b) {
    return a + b;
};
console.log("The sum of a, b is : " + sumNormal(10, 20));
var sumArrow = function (a, b) { return (a + b); };
console.log("the of a, b is: " + sumArrow(20, 30));
// Normal function to find the length of an array with Arrow Function
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
// Arrow Function for the above example
var movieArrow = movies.map(function (movies) { return movies.length; });
console.log(movieArrow);
