/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/



/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/



/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */


// You can also use template strings, which can span multiple lines and have embedded expressions.



/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */


/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */


/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */


/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */
//Boolean ,Number ,String ,Array ,enum,void

//Boolean
let isTsEasy : boolean = true;
console.log(`isTsEsay:= ${isTsEasy}`);

//String
let tsAuthor:string = 'Microsoft';
console.log(`tsAuthor:= ${tsAuthor}`);
//Number
let versionTs : number = 3.0;
console.log(`varsion of ts is:= ${versionTs}`);
//Any
let test:any = 10;
console.log(test);
test = true;
console.log(test);

//Array
let languages:Array<string> = ['HTML', 'CSS' , 'JavaScript'];
console.log(languages);


//Enum
enum Month{
    Jan = 'January',
    Feb = 'February'
}
console.log(`Jan:${Month.Jan}`);//January

//Month.Jan = 'January';Cannot reassign cause it is enum

//Void ---->Empty return or no return
function greet(name:string):void{
    console.log(`Good Morning: ${name}`);

}
greet('john');