// // FUNCTIONS:

// function nameoffunction (parameters) {
//    console.log('this will appear'); 
// }

// nameoffunction (); //<--- this is invoking a function

// function add(num1, num2) {
//    console.log(num1 + num2);
// }

// add(5,10);

// HOW TO RETURN 

// function subtract(num1, num2) {
//    return num 1 - num2 ;
// }
// function calculator(num1, num2) {
//     return num1 - num2;
//    }
//    const result = calculator(5,2);
   
//    console.log(result);

// PARAMETERS
// function registerUser(user) {
//    return user + 'is registered';
// }
// console.log(registerUser('John '));


// REST PARAMETERS
// function sum(...numbers) {
//    let total = 0;
//    for (const num of numbers) {
//       total += num;
//    }
//    return total;
// }
// console.log(sum(1,2,3,4,5));


// PUT ---> OBJECT INTO PARAMETER
// function loginUser(user) {
//    return `The user ${user.name} with the id of ${user.id}`
// }

// const user = {
//    id: 1,
//    name: 'John',
// };
// console.log(loginUser(user));

//GLOBAL SCOPE
// const x = 100;
// console.log(x, 'in global scope'); //this is in the global scope

// // FUNCION SCOPE
// function run () {
//    const y = 200;
//    console.log(y, 'in function scope'); //this is in the function scope
// }
// run ();

// //BLOCK SCOPE
// if (true) {                             //'if' is a block 
//    const z = 300;
//    console.log(z, 'in block scope'); //this is in a block scope
// }

// //ERROR 
// function add() {
//    const Biscuit = 50; //This is in the function scope
// }

// console.log(Biscuit); //This is in the global scope
// //This console is looking for 'Biscuit' in the global scope

// add();

// //CORRECION
// function add() {
//    const Biscuit = 50; //This is in the function scope
//    console.log(Biscuit); //This is looking for 'Biscuit' in the function scope
// }
// add();

// ____________________________________________________________________
// BLOCK LEVEL SCOPE

//Don't use var

// ERROR ---> UNDEFINED
//    const x = 100; //this is defined in the global scope

// if (true) {
//    const y = 200; //this is defined in the block scope
//    console.log(X + y); //this is looking for x and y in the block scope
// }

//CORRECTION
// const x = 100; //this is defined in the global scope
// const y = 200; //this is defined in the globa scope

// if (true) {
// }
// console.log(x + y); //this is looking for x and y in the global scope

// // OR
// //CORRECTION

// if (true) {
//    const x = 100; //this is defined in the block scope
//    const y = 200; //this is defined in the block scope
//    console.log(x + y); //this is looking for x and y in the block scope
// }

// //EXCEPTION
// if (true) {
//    const a = 500;
//    let b = 600;
//    var c = 700;
// }

// // console.log(a)   doesn't work: looking in global scope
// console.log(c);     //does work because 'var' is BLOCK LEVEL SCOPED

// //BUT 'VAR' IS NOT FUNCTION SCOPED
// //Example:
// //ERROR
// // function AccessingVar() {
// //    var Lookhere = 100;
// // }
// // console.log(Lookhere);

// // AccessingVar();

// //CORRECTION
// function AccessingVar() {
//    var Lookhere = 100;
//    console.log(Lookhere);
// }

// AccessingVar();
//______________________________________________________________________

// NESTED FUNCTION
// function first () {     //first function                 --->parent
//    const x = 100;       //variable

//    function second () { //a function in a function       --->child
//       const y = 200;    //a variable in the nested function
//       console.log(x + y);  //look for both variables in the function
//    }
//    second();      //run the second variable
// }
// first();          //run the first variable

//____________________________________________________________________


// //ERROR
// if (true) {       //parent scope
//    const x = 100; //x is in the parent scope

//    if (x ===100) {      //child scope
//       const y = 200;
//    }
//    console.log(x +y); //looking for y in the 
// }




// if (true) {       //parent scope
//    const x = 100; //x is in the parent scope

//    if (x ===100) {      //child scope
//       const y = 200;
//       console.log(x +y); //we can access the parent scope
//    }
// }

// _____________________________________________________________________

//FUNCTION DECLARATION 

function addDollarSign(value) {
   return '$' + value;
}

console.log(addDollarSign(100));

// //FUNCTION EXPRESSION 
// const addPlusSign = function(value) {
//    return '+' + value;
// };

// console.log(addPlusSign(200));







// function sayHello () {
//     console.log('Hello Emma');
// }//defining / declaring a function
// sayHello (); //running the function 


//  function add (num1, num2) {
//      console.log(num1 + num2);
//  } //these are parameters 
//  add (5,10); //these are arguments

//  function subtract(num1, num2) {
//      return num1 - num2;
// //     console.log('After the return');
//  }
//  const result = subtract(10,2);
// // console.log(result);

// console.log(result, subtract(12,13)); 

// DEFAULT PARAMETERS
// function registerUser(user) {
//     return user + 'is registered';
// }
// console.log(registerUser('Emma ')); //adds a value

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

// console.log(registerUser()); 

// // REST OPERATOR ...
// // You can destructure values into variables and use the rest operator
// // to put the rest of them into an array
// function sum (...numbers) {
//     return numbers;
// }
// console.log(sum(1,2,3));

// // forloops - adding the numbers together using REST OPERATOR ...
// function sum (...numbers) {
//     let total = 0;
//     for (const num of numbers) {
//         total += num;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));

// // OBJECTS AS PARAMETERS
// function loginUser(user) {
//     return `The User ${user.name} with the id of ${user.id} is logged in`;
//     // temperate literal backtick
// }

// const user = {
//     id : '11Mooner',
//     name: 'Emma',
// };
// console.log(loginUser(user));

// console.log(
//     loginUser({
//         id: '2',
//         name: 'Sara' , 
//     }));
 

// // Arrays as parameters
// function getRandom (...arr) {
//     const randomIndex = Math.floor(Math.random () * arr.length);
//     const item = arr [randomIndex];
//     console.log(item);
// }

// getRandom ([1,2,3,4,5,6]);s

// GLOBAL AND FUNCTION SCOPE
// Current context of a piece of code
// Global: accessible from anywhere

// window.alert('Hello');
// console.log(window.innerWidth);

// const x = 100; 
// console.log(x, 'in global');

// function run () {
//     console.log(window.innerHeight);
//     console.log(x, 'in function');
// }

// run ();

// if (true){
//     console.log(x, 'in block');
// }

// function add () {
//     const x = 1; //variable shadowing 
//     const y = 50;
//     console.log(x + y);
// }

// // console.log(y);
// add ();

// BLOCK SCOPE
// const x = 100;
// const foo = 1;
// var bar = 2;

// if (true) {
//     console.log(x);
//     const y = 200;
// }

// // console.log(x + y);

// for (let i  = 0; i <= 10; i++) {
//     console.log(i);
// }

// // console.log(i);

// if (true) {
//     const a = 500;
//     let b = 600;
//     var c = 700; //var is not block scoped
// }

// console.log(c);

// function run () {
//     var d = 100;
//     console.log(d);
// }

// run ();

// NESTED SCOPE
// function first () {
//     const x = 100;

// function second () {
//     const y = 200;
//     console.log(x + y);} //you can access parent variables but not child variables
// //two seperate scopes
// second ();
// }
// first ();

// if (true) {
//     const x = 100;

// if (x ===100) {
//     const y = 200;
//     console.log(x + y);
// }
// }
//___________________________________________________________-
// DECLARATION VS EXPRESSION 

// A FUNCTION DECLARATION 
// console.log(addDollarSign(100)); //this can come first 
// function addDollarSign(value) {
//     return '$' + value;
// } //don't add a semi-colon


// // A FUNCTION EXPRESSION
// const addPlusSign = function (value) {
//     return '+' + value;
// }; //add semi - colon
// console.log(addPlusSign(200)); //this cannot go on top
//____________________________________________________________ 

//regular function
// function add (a,b) {
//     return a + b;}
// console.log(add (1,2));

// Arrow function 
//used to shorten functions and expressions
// const add = (a,b) => {
//     return a + b;
// };

// const subtract = (a,b) => a - b;
// const double = a => a * 2;

// //returning an object
// const createObj = () => ({
//     name: 'Brad',
// });
// const numbers = [1,2,3,4,5];

// numbers.forEach(function (n) {
//     console.log(n);
// });

// numbers.forEach(n => console.log(n));

// console.log(add(1,2));
// console.log(subtract(10,5));
// console.log(double(10));
// console.log(createObj());

//Immediately Involved Function Expression 

// (function(){                //IFIE
//     const user = 'John';
//     console.log(user);
//     const hello = () => console.log('Hello from the IFIE');
//     hello ();
// }) ();

// (function (name) {
//     console.log('Hello' + name);
// })

//______________________________________________________________________
//IFIE -explained
// (function (parameter) {
//    console.log('a value ' + parameter);
// }) 
// ('argument passed into function, replacing parameter');
//_______________________________________________________________________

//CHALLENGE 1
// function getCelsius (f) {
//    const celsius = ((f-32) * 5) /9;
// return celsius;
// }

// // const getCelsius = (f) => ((f-32) * 5) /9; //arrow function

// console.log(getCelsius(32));

//CHALLENGE 2
// function minMax (arr) {
//    const min = Math.min(...arr);
//    const max = Math.max(...arr);

//    return { min, max}
// }

// console.log(minMax ([1,2,3,4,5]));

//CHALLENGE 3
// ((length, width) => {
//    const area = length * width;
//    const output = `The area of a rectangle with the length of 
//    ${length} and the width of ${width} is ${area}.`
//    console.log(output);
// })(20.3);

// EXECUTION CONTEXT
// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//    const sum = n1 + n1;
//    return sum;
// }

// const sum1 = getSum(x,y);
// const sum2 = getSum (10,5);

// console.log(sum1, sum2);

