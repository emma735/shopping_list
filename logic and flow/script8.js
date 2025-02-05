//IF STATEMENTS are only logged if they are true. 

//FALSY VALUES:                                 TRUTHY VALUES
// -false                          -everything else not falsy
// - 0                              -true
// - "" or '' (Empty string)        -'0' (0 in a string)
// -null                            - ' ' (space in a string)
// -undefined                       - 'false' (false in a string)
// -NaN                             - [] (empty array)
                                // - {} (empty object)
                                // - function () {} (empty function)

//for example
// const x = false; //this will log 'This is falsy'
// if (x) {console.log('This is truthy');}

// else {console.log('This is falsy');}
// console.log(Boolean(x));

//for example
// const x = '0'; //this will log 'This is truthy'
// if (x) {console.log('This is truthy');}

// else {console.log('This is falsy');}
// console.log(Boolean(x));

//________________________________________________________________________
//TRUTHY AND FALSY CAVEATS
// 0 is a falsy value --> triggering the 'else' statement
//                    --> which is not what we want

// const children = 0; 
// if (children) {
//     console.log(`You have ${children} children`);}
// else {
//     console.log('Please enter number of children'); }
//----------------------------------------------------------------
//HOW TO CORRECT THIS 
//if (!isNaN(children))     or      if (children !==undefined)

// const children = 0; 
// if (children !==undefined) {console.log(`You have ${children} children`);}
// else { console.log('Please enter number of children');}
//---------------------------------------------------------------

//CHECKING FOR EMPTY ARRAYS
// const posts = []; // [] is logging as true and triggering the IF statement

// if (posts) {
// //SOLUTION: if (posts.length > 0)    .length tells you no. of items
//     console.log('List Posts');}       the no. of items is less than 0
// else {console.log('No Post to List');}

//CHECKING FOR EMPTY OBJECTS - can't use length on an object
// ---> use Object.keys().length > 0
// const user = {};

// if (Object.keys(user).length > 0) {console.log('List User');}
// else {console.log('No User');}

// -----------------------------------------------------------------------

//LOGICAL OPERATORS
// console.log(10 > 20 && 30 > 15); //Output: false --> because 10 isn't > 20

// console.log(10 > 20 || 30 > 15); //output: true ---> because 1 of these
                                // is true (30 > 15)

// //&& - will return first falsy value or the last value
// let a; 

// a = 10 && 20; //nothing is falsy so it's giving us the last value
// a = 10 && 20 && 30; //no falsy value so it gives us the last
// a = 10 && 0 && 30; //output: 0  because 0 is falsy
// a = 10 && '' && 0 && 30; 

// console.log(a);
// -----------------------------------------------------------------

// // TO PREVENT UNDEFINED iN THE CASE OF EMPTY [] 

// const posts = [];
// posts.length > 0 && console.log(posts[0]); //use post.length > 0 &&
//------------------------------------------------------------------

// OR || OPERATOR - Will return the 1st true value / last value 
// let b;
// b = 10 || 20; //returns the 1st true value
// b = 0 || 20;  //r0 is false
// console.log(b);

// --------------------------------------------------------------------

// ?? Returns the right side operand when the left is null or undefined

// let c;
// c = 10 ?? 20;
// c = null ?? 20;
// c = 0 ?? 30;
// console.log(c);

//---------------------------------------------------------------------

//LOGICAL ASSIGNMENT OPERATORS

// ||    assigns the right side value only if the left is a falsy value
// &&    assigns the right side value only if the left is a truthy value
// ??    assigns the right side value only if the left is null or undefined

// ||    assigns the right side value only if the left is a falsy value
// let a = false;
// if (!a) {a = 10;} //if a is not false, set it to 10
// //here is the shorthand using ||
// a = a || 10; //if a is not false, set it to 10

// &&    assigns the right side value only if the left is a truthy value
// let b = 10;
// if (b) {
//     b = 20;
//     b = b && 20;
//     b &&= 20;
// }
// console.log(b);

// ??    assigns the right side value only if the left is null or undefined
// let c = null;
// if (c === null || c === undefined) {
//     c = 20;
// }
// console.log(c);
//_________________________________________________________________________

//TERNARY OPERATOR                       parameters ? (if) : (else) ;  

// const age = 16;                                      
// if (age >=18) {console.log('You can vote');}     STANDARD IF STATEMENT         
// else {console.log('You cant vote');}                 
// ---------------------------------------------------------------------------
// const age = 16;                               USING TERNARY OPERATOR
// age >= 18 ? conole.log('You can vote!') : console.log('You cannot vote');
// -------------------------------------------------------------------------------
// const canVote = age  >= 18 ? true : false;       ASSIGN A CONDITIONAL
// const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote' ;
// console.log(canVote2);
//----------------------------------------------------------------------------
// MULTIPLE STATEMENTS

// const authorization = true;                STANDARD IF STATEMENT
// let redirect; 
// if (authorization) {
//    alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {alert('Access Denied');
//     redirect = '/login'; };


// const auth = true;                                  currently set to true 
// const redirect = auth 
// ? (alert('Welcome to the dashboard'), '/dashboard')  if true, show this
// : (alert('Access Denied'), '/login');                if false, show this

// console.log(redirect);

// const auth = true;                       if this is false we won't
// const redirect = auth;               see anything because of null
// auth ? console.log('Welcome to the Dashboard') : null ;

// auth && console.log('Welcome to the dashboard');   another alternative