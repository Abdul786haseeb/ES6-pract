//ES6 FEATURES OF JS-ES6
//ES6 Or the ECMAScript 2015 is the 6th and major edition of the ECMASvript language specification standard.

// (1)
//1.const
//this const can't reassigned

// we can create a constant(const) array:
const fruits = ['mango','apple','tomato']

//changing an element:
fruits[0] = 'banana';

//add element:
fruits.push('grapes');

//2. let
// let keyword allows to declare variable that are limitedto the scope of a block statement, or expression which its used. unlike the variable keyword, which declares a variable.
// variable
function assest(){
    var a = 'hello';
    console.log(a);
} 
assest();
// Using let keyword
function assest(){
    let a = 'hello';
    console.log(a);
} 
assest();

//(2)
//Arrow function:- used to write consice function.
//1.FE
var print = function(){
    return 'hello';
}
//2.Arrow
var print = () =>{
return 'hello'
}
//ex_1
var add = (a,b) =>{
    sum = a + b;
    return sum;
}
console.log(add(5,7));
//ex_2
var sum = (a,b) => a+b;
console.log(sum(7,9));

//(3)
//default values parameters - using default parameters in functions expression
var sum = (m,n=3) => m-n;
console.log(sum(5,7));
//O/T= -1 bcoz(5 - 7)

console.log(sum(5,));
//O/t =  2 bcoz (5 - 3)

//(4)
// Template literals:- Use the BACK-TICKS(``) rather than the quotes("") to define a string:
//ex 
let hello = `hello world!`;
console.log(hello);
//ex2
firstName = "Abdul";
lastName = "Haseeb";
age = "24";
let text = `Welcome ${firstName}, ${lastName}, ${age}!`;
console.log(text);

// Destructuring:Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables.
//Array destructuring:
const fruitss = ["Orange", "Banana", "Lemon"];
// we can access each element of an array by their index.
const fruit1 = fruitss[0]
//or else we can use destructuring to get those elements without using indexes
const [first, second] = fruitss
console.log(first, second);

//Destructing of object:-
const movie = {
    name: 'Avengers',
    released: '2019',
    director: 'Stanley'
};
const {name, released, director} = movie;
console.log(released);

//Array Helper Methods:
//These Array helper methods were introduced in ES6 which is used for data manipulation.

const arr = [3, 5, 6, 1];
const multiply = arr.map((item) => {
    return item * 2
  });
console.log(multiply);
console.log(arr);
