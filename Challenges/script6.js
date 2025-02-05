// function getCelsius(f) {
//     const celsius = (f-32) * 5 / 9;
//     return celsius;
// }

// console.log(getCelsius(50));
//________________________________________________________________________

//CONVERT TO ARROW FUNCTION 

//My attempt
// const celsius = ((f-32) * 5 / 9) => (f)
// console.log(getCelsius(32));

// the answer
// const getCelsius = (f) => ((f-32) * 5 / 9); {
//     console.log(getCelsius(50));
// }

// in a sentence
// console.log(`the temp is ${getCelsius(50)} \xB0C`);}

// explanation
// const FunctionName = (parameter) => (expression-->values/variables/operators/functions);
// {console.log(FunctionName(value));
// }
//__________________________________________________________________________

//CHALLENGE TWO - My attempt       ARRAY in ARRROW FUNCTION RETURN OBJECT
// function minMax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);            full version 
//     return {min,max};
// }
// console.log(minMax([1,2,3,4,5]));

// const minMax = arr => {
//     const min = Math.min(...arr)             arrow function 
//     const max = Math.max(...arr)
//     return {min,max};
// };
// console.log(minMax([1,2,3,4,5]));

//__________________________________________________________________________

//CHALLENGE 3
//create an IIFE that takes the length and width of a rectangle outputs 
//to the console in a message 

//the area of a rectangle with the length of 10 and the width of

//pass this into the IFIE as argument (length * width)
//don't return, just log

// CHATGPT Explanations
// (function(add) {  
//     const x = 10;
//     const y = 15;
//     console.log(add(x, y));  // Call the add function with x and y as arguments
// })
// (function(a, b) { return a + b; });  // This is the function passed as an argument


// (function(rect) {  
//     const length = 10;
//     const width = 12;
//     console.log(`The area of a rect is ${length} and the width is ${width}`);  // Call the add function with x and y as arguments
// })
// (function(length,width) { return length * width; 

// });  // This is the function passed as an argument


// //IFIE
// (function (parameter) {
//     console.log('a value ' + parameter);
// }) 
// ('argument passed into function, replacing parameter');

// THE ANSWER as IIFE
(function(length,width) //length,width = parameters(placeholders for the values) 
    {
        const area = length * width;
        //this is calculated but not logged
        const output = `The area of a rect is ${length} times ${width}`
    
        console.log(output);
    }) (10,5) //these are the values that will replace the parameters;

//THE ANSWER as an ARROW FUNCTION IIFE
// ((length,width) =>
// {
//     const area = length * width;

//     const output = `The area of a rect is ${length} times ${width}`

//     console.log(output);
// }) (10,5);
















// const minMax = (Math.min (1,2,3,4,5), Math.max (1,2,3,4,5)) => ({min,max});
// console.log(minMax(1,2,3,4,5));

//How to RETURN AN OBJECT WITH ARROW FUNCTION
// const Object =  () => ({ name: 'Emma',});
// console.log(Object());


// const FunctionExpression= (a,b) => a + b //return keyword - Implicit Return

// console.log(FunctionExpression(3,2));
//ARRROW FUNCTION 

// function regularfunction(a,b) {
//     return a + b;
// }

// console.log(regularfunction(1,2));

//arrow function: you can get rid of the word "function"
//const FunctionExpression = () function { }
//const FunctionExpression = () => {}  

// const FunctionExpression = (a,b) => {
//     return a + b;
// };

// const subtract = (a,b) => a + b

// console.log(FunctionExpression(1,2));

//even shorter

// const FunctionExpression= (a,b) => a + b //return keyword - Implicit Return

// console.log(FunctionExpression(3,2));

//even shorter!! (if you have one parameter)
// const FunctionExpression = (a) => a * 2; //double A
// console.log(FunctionExpression(10));

//How to RETURN AN OBJECT WITH ARROW FUNCTION
// const Object =  () => ({ name: 'Emma',});
// console.log(Object());


// const Object = [1,2,3,4,5];
// Object.forEach(function(n) {
//     console.log(n);
// });

// const Object = [1,2,3,4,5]
// Object.forEach(n => console.log(n));

