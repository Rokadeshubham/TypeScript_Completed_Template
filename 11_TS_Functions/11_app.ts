// Create a simple function to add two numbers

function sum(a:number,b:number):number{
    let addition =a+b;
    return addition;
}
console.log(`Sum of a, b is: ${sum(10,20)}`);
// Create the same add function with first number as 'any' type

function add(a:any,b:number):number{
    let summ =0;
    if (typeof a=== 'string'){
        if (isNaN(parseFloat(a))){
            summ=b;
        }
        else{
            summ = parseFloat(a) + b;
        }

    }else {
        summ = b
    }
    return summ;
}
console.log(`Sum of A and B is ${add(10,40)}`);
console.log(`Sum of A and B is ${add('10',40)}`);
console.log(`Sum of A and B is ${add({},40)}`);

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers


function findMax(a:number):number;
function findMax(a:number,b?:number):number;
function findMax(a:number,c:number,b?:number):number;
function findMax(a:number,b?:number,c?:number):number{
    //for a
    if(b=== undefined && c=== undefined){
        return a;
    }
    else if (c===undefined){
        return Math.max(a,b);

    }
    //for abc
    else{
        return Math.max(a,b,c);

    }
}
//console.log(`Max : no args ${findMax()}`);
console.log(`Max : 1-args ${findMax(10)}`);
console.log(`Max : 2-args ${findMax(59,30)}`);
console.log(`Max : 3-args ${findMax(3,87,43)}`);



// Function Overloading in TypeScript , findMin using Math

// Create an Employee function and get an Employee Object
