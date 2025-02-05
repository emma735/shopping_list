// IF STATEMENTS

// if (true) {
//     console.log('This is true');
// }

// if (false) {
//     console.log('This is NOT true');
// }

// const x = 10;
// const y = 5;

// if (x > y) {
//     console.log(`${x} is greater than ${y}`);
// } //this will run because it's true (10 IS greater than 5)

// if (x === y) {
//     console.log(`${x} is equal to ${y}`);//10 isn't equal to 5, it's false
// }   else {  //it is true that this is false
//     console.log(`${x} is NOT equal to ${y}`);
// }

// if (x!==y) {
//     const z = 20;
//     console.log(`${z} is 20`);
// }

// //Shorthand If
// if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
// else console.log('This is false');

// ELSE-IF and NESTING
//  const d =  new Date (10,30,2022,6,0,0);
//  const hour = d.getHours();
//  console.log(hour);

//  if (hour < 12) {console.log('Goodmorning');}
//  else if (hour < 18) {console.log('Good Afternoon');}
//  else {console.log('Good Night');}

// //  Nested If
// if (hour < 12) {
//     console.log('Good Morning');}
// if (hour === 6) {console.log('Wake Up');} //equal to
// else if (hour < 18) {console.log('Good Afternoon');}
// else {console.log('Good Night');} 
// if (hour >= 20) {
//     console.log('sleeping');}

// if (hour >= 7 && hour < 15) {
// console.log('It is work time!');
// }

// if (hour === 6 || hour === 20) {
//     console.log('Brush your teeth');
// } //the hour is 6 or 20

//SWITCHES
// const d = new Date(2022,4, 10, 8, 0, 0);
// const month = d.getMonth ()
// console.log(month);

// switch(month) {
//     case 1: 
//     console.log('It is January');
//     break;
//     case 2:
//         console.log('It is Feb');
//     case 3:
//         console.log('It is March');
//     break;
//     default: 
//     console.log('It is not Jan, Feb or March');
// }

// switch (true) {
//     case hour < 12:
//         console.log('Good Morning'); 
//         break, 
//     case hour < 18:
//         console.log('Good Afternoon');
//         break;
// }

// const  =  new Date (10,30,2022,6,0,0);
//  const hour = d.getHours();
//  console.log(hour);

//  if (hour < 12) {console.log('Goodmorning');}
//  else if (hour < 18) {console.log('Good Afternoon');}
//  else {console.log('Good Night');}

// // How to set a default User
// function registerUser(user) {
//     if (!user) {
//         user = 'Bot ';
//         return user + 'is registered';
//     }
// }
// console.log(registerUser()); 

// // How to set a default User easier
// function registerUser(user = 'Bot ') {
//     return user + 'is registered';
// }

//_________________________________________________________________________

//FUNCTION DECLARATION

// function addDollarSign(value) {
//     return '$' + value;
// }

// console.log(addDollarSign(100));

//FUNCTION EXPRESSION 
// const addPlusSign = function(value) {
//     return '+' + value;
// };

// console.log(addPlusSign(200));
// //Note: Can't hoist console.log with function expressions

//_________________________________________________________________

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

//______________________________________________________________________

//IMMEDIATELY INVOKED FUNCTION 
//avoid global scope pollution 
//2 Javascript files declaring functions
//FORMAT: (() {}) ();
//format: (function(functionName) {console.log('parameters' + functionName)}) (run);

// (function () { //this is the format --> IFIE
//     const user = 'John';
//     console.log(user); //this looks for the user in the function scope
// }) 

// ();//this is to run the function

//e.g
// (function (name) {
//     console.log('parameter ' + name);
// }) ('Shawn');

//________________________________________________________________________



