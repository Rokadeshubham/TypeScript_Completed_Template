/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

// Usage of let vs Var inside for loop created variables
for (var i =0;i<=10;i++){

}
console.log(i)//we can access i cause this is var
/*
for (let j =0;j<=10;j++){

}
console.log(j)//cannot access J outside cause its let
*/
// Usage of let vs var inside if block
var model = 'BMW';
if(model === 'BMW' ){
    var color = 'red';
}
console.log(color)//we can access the color cause its var


if(model === 'BMW' ){
    let color2 = 'black';
}
//console.log(color2)//we can't access the color cause its let



// Usage Const variable creation
const CAR = 'R8';
//car ='Porche'//we cant change this cause its a constant
console.log(CAR)
