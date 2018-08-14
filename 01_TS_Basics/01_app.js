// Hello World App
var greeting = "Good Morning";
console.log(greeting);
document.querySelector('#display').textContent = greeting;
// Variables Creation in TypeScript
function greetMsg(name, age) {
    var greeting = 'Hello' + name + 'You are ' + age + ' Year Old!';
    return greeting;
}
var greetMessage = greetMsg('John', 40);
console.log(greetMessage);
document.querySelector('#display').textContent = greetMessage;
