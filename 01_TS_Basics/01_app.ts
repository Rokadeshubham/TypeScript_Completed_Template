// Hello World App
let greeting= "Good Morning"
console.log(greeting)
document.querySelector('#display').textContent = greeting
// Variables Creation in TypeScript
function greetMsg(name:string , age:number):string{
    let greeting:string = 'Hello'+name +'You are '+age+' Year Old!';
    return greeting
}
let greetMessage:string = greetMsg('John',40)
console.log(greetMessage)
document.querySelector('#display').textContent = greetMessage

