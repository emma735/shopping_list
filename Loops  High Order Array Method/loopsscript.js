//LOOPS ---> Provide a way to do iteration 
//Iteration --> a process where you repeat
//Structure -->
//for ([initialExpression];[conditionExpression];[incrementExpression])
//statement

//INITIAL EXPRESSION - Initializes a variable / counter
//CONDITION EXPRESSION - Condition that the loop will continue to run as long 
//as it is meet or until the conditon is false
//INCREMENET EXPRESSION - Expression that will be executed after each 
//iteration of the loop. Usually increments the variable
//STATEMENT - Code that will be executed each time the loop is run. 
//To execute a 'block of code, usethe ; '{}' syntax

// for (let i = 0;    //initial expression 
//      i <= 10; //condition: as long as i is less than/equal to 10 run the loop
//      i++)           //++ means add on by 1
//                     //+++ means incremement by 2
//       {console.log('Number' + i);} 
//this will log Number1, number2, number 3 until 10 and then stop because of the condition
//---------------------------------------------------------------------
// IF I WANT TO MAKE A CHANGE TO ONE OF THE LOOPS
// for (let i = 0;    i <= 10; i++) {
//     if (i === 7) {console.log('7 is my lucky number');
//     }
//   else  {console.log('Number' + i);} 
// }           
//------------------------------------------------------------------
//NEST LOOPS
// for (let i = 1; i <= 10; i++) {
//     console.log('Number' + i);

//     for (let j = 1; j <= 5; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
//-------------------------------------------------------------------

//Loop through an array
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

//CHALLENGE - Make a change to Sara
// const names = ['Brad','Jack','Sara','Sam','Tim'];
// for (let i = 0; i < names.length; i++) {
//     if (i === 3) {console.log('Sara is my name');}
//     else {
//         console.log(names[i]);
//     }
// }

//BREAK AND CONTINUE STATEMENTS
//BREAK --> Break out of the loop

// for (let i = 0; i <= 20; i++) {
//     if (i ===15) {
//         console.log('Breaking...');
//         break;
//     }
//     console.log(i);}

//CONTINUE
// for (let i = 0; i <= 20; i++) {
//     if (i === 13) {console.log('Skipping 13...');
//         continue;}
//     console.log(i);}
//________________________________________________________________________

//WHILE & DO WHILE LOOP
//put the variable outside of the while loop
//eg. let i = 0;
// while () {}

// let i = 0;
// while (i <= 20) {
//     console.log('Number' + i);
//     i++;    //this is how you incremenet in a while loop
// }

//LOOP OVER ARRAYS
// let i = 0;
// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

//NESTING WHILE LOOPS
// while (i <= 5) {
//     console.log('Number' + i);
//     let j = 1;
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i *j}`);
//         j++;
//     }
// }

//DO WHILE LOOP: Use when you want the block of a code to run atleast once
//even if the condition is never met

// let i = 21;
// do {console.log('Number' + i); i++;} //runs this code no matter what
// while (i < 20);

//______________________________________________________________________

//FIZZBUZZ CHALLENGE
//print/log numbers 1 - 100
//for multiplies of 3 print the word "Fizz"
//for multiples of 5 print "Buzz"
//for multiplies of both 3 and 5 print "FizzBuzz"

//write a loop and log something for each iteration 
//check condiion if/else/else if
//get a remainder of a number using the modulus operator (%)



// for (let i = 0;    //initial expression 
//      i <= 10; //condition: as long as i is less than/equal to 10 run the loop
//      i++)           //++ means add on by 1
//                     //+++ means incremement by 2
//       {console.log('Number' + i);} 
//this will log Number1, number2, number 3 until 10 and then stop because of the condition

// let i = 0;
// for (let i = 0; i <=10; i++)
//     {console.log('Number' + 1);}

// IF I WANT TO MAKE A CHANGE TO ONE OF THE LOOPS
// for (let i = 0;    i <= 100; i++) {
//     if (i % 3 === 0) {console.log('Buzz');}
//     if (i % 5 === 0) {console.log('Fizz');}
//     if (i % 3 === 0 , i % 5 === 0) {console.log('FizzBuzz');}
//     else  {console.log('Number' + i);} 
// }    

//ANSWER
for (let i = 1; i <=100; i++) {
    if (i % 3 ===0 && i % 5 === 0) {    //this must be first 
        console.log('FizzBuzz');
    }
     else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0 ) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}