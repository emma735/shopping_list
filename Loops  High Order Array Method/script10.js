//FOR OF; repeat over repeating objects (arrays, strings, maps, sets)

// //LOOP THROUGH ARRAYS
// const array = ['book', 'bag', 'kite', 'car'];
// const users = [{name: 'Emma'}, {name: 'Jack'}, {name: 'Steve'}];

// // for (const item of array) {
//     // console.log(item);
// // }

// for (const user of users) {console.log(user);}

// //LOOP OVER STRINGS
// const string = 'Hello World';
// for (const letter of string) {console.log(letter);}

// //LOOPS OVER MAPS
// const map = new Map ();
// map.set('name', 'John');
// map.set('age', '24');

// for (const [key, value] of map) {console.log(key,value);}

//_______________________________________________________________________

//FOR IN = LOOP THROUGH OBJECTS VALUES

// const colour = {
//     color1: 'red',
//     color1: 'blue',
//     color1: 'orange',
// };
 
// // for (const key in colour) {console.log(key);} //logs colour1
// // for (const key in colour) {console.log(key, colour[key]);} 
//                                     //logs colour1 red

// const colourArr = ['red', 'green', 'blue', 'yellow'];
// for (const key in colourArr) {console.log(colourArr[key]);}
//this logs the values 'blue, red, green, yellow

//_______________________________________________________________________

//HIGH ORDER ARRAY METHODS

//FOR EACH -       runs the function FOR EACH thing in the array
//the forEach() 


// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// // console.log(socials.__proto__);/

// socials.forEach(function (item) {
//     console.log(item);
// }); //this consolelog will run for everything item in the list
    //which in this case is 4 times. 

    //shorthand
// socials.forEach((item) => console.log(item));

//INDEX: 1- Twitter, 2 - Linkedin etc
// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// socials.forEach((item, index, arr) => 
//     console.log(`${index} - ${item}`));

// LOG INDEX, ITEM AND ARRAY
// LOGS: 3 - Instagram (4) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']
// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// socials.forEach((item, index, arr) => 
//     console.log(`${index} - ${item}`, arr));

//LOGS Instagram 3: https://instagram.com
// function logSocials(social) {console.log(social);}
// socials.forEach(logSocials);
// const socialObject = [
//     {name: 'Twitter', url: 'https://twitter.com'},
//     {name: 'facebook', url: 'https://twitter.com'},
//     {name: 'linkedin', url: 'https://twitter.com'},
// ];

// socialObject.forEach((item) => console.log(item.url));

//___________________________________________________________________

//FILTER --> filter out all the odd numbers        logs: 55

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter() ----> create a variable because
//                                      we are going to return something

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0; //test: if the number is divisible by 2
// }); //return some kind of condition

//loop through, run the test on each variable and which ever one pass this
// will be returned and logged

//SHORT WAY
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

//SAME WITH FOREACH
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let evenNumbers;
// numbers.forEach(number => {if (number % 2 === 0) {evenNumbers.push(number);}
// });
// console.log(evenNumbers);

//
// const companies = [
//     {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
//     {name: 'Company Two', category: 'Retail', start: 1981, end: 20012},
//     {name: 'Company Three', category: 'Auto', start: 1981, end: 2007},
//     {name: 'Company Four', category: 'Retail', start: 1981, end: 2005},
//     {name: 'Company Five', category: 'Technology', start: 1981, end: 2010},
//     {name: 'Company Six', category: 'Finance', start: 1981, end: 2034},
//     {name: 'Company Seven', category: 'Auto', start: 1981, end: 2024},
//     {name: 'Company Eight', category: 'Retail', start: 1981, end: 1989},
// ];

// //get only retail companies
// const retailCompanies =                                 //create a variable
// companies.filter((company) => company.category === 'Retail'); //arrow function
// console.log(retailCompanies);

// //get companies that started in or after 1980 and ended before 2005
// const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
// console.log(earlyCompanies);

// //get companies that lasted 10 years or more
// const longCompanies = companies.filter((company) => company.end = company.start >= 10);
// console.log(longCompanies);

//__________________________________________________________________________

//MAP  --> creates a new array populated with the results of calling a
//provided function on every element in the calling array

// const numbers = [1,2,3,4,5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);                 (shorthand)
//I am logging each number times 2

//SAME WITH ForEach
// const numbers = [1,2,3,4,5];
// const doubleNumbers2 = [];                   (long version)
// numbers.forEach((number) => {
//     doubledNumbers2.push(number * 2);
// });
// console.log(doubleNumbers2);

//_______________________________________________________________________

// const companies = [
//         {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
//         {name: 'Company Two', category: 'Retail', start: 1981, end: 20012},
//         {name: 'Company Three', category: 'Auto', start: 1981, end: 2007},
//         {name: 'Company Four', category: 'Retail', start: 1981, end: 2005},
//         {name: 'Company Five', category: 'Technology', start: 1981, end: 2010},
//         {name: 'Company Six', category: 'Finance', start: 1981, end: 2034},
//         {name: 'Company Seven', category: 'Auto', start: 1981, end: 2024},
//         {name: 'Company Eight', category: 'Retail', start: 1981, end: 1989},
//     ];

//Create an array of company names

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// //create an object with company and category
// const companyInfo = companies.map((company) => {
//     return {
//         name: company.name,
//         category: company.category,
//     };
// });

// console.log(companyInfo);

// //create array of objects with name and length of company in years
// const companyYears = companies.map((company) => {
//     return { name: company.name,
//         length: company.end - company.start + 'years',};});

// console.log(companyYears);

//CHAIN MAP METHODS
// const numbers = [1,2,3,4,5];
// const squareAndDouble = numbers
// .map((number) => Math.sqrt(number))
// .map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers.map(function (number) {
//     return Math.sqrt(number);
// })
// .map (function (sqrt) {return sqrt *2;})
// console.log(squareAndDouble2);

//Chain different methods
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenDouble = numbers
//     .filter((number) => number % 2 === 0)
//     .map ((number) => numbers *2);
// console.log(evenDouble);

//______________________________________________________________________

//REDUCE 

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const sum = numbers.reduce(function  (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0); //this function runs on every number
//every time it is adding the Previous Value (accumulator) to the current Value
//so 1 + 3 = 3 and then it added it all together

// SHORTHAND
// const sum2 = numbers.reduce((acc ,cur) => acc + cur, 0);
// console.log(sum2);

// //USING A FOR LOOP
// const sum3 = () => {
//     let acc = 0;
//     for (const cur of numbers) {
//        acc += cur;
//     }
//     return acc; 
// };
// console.log(sum3);

// //ADD A SHOPPING CART TOGETHER
// const cart = [ 
//     {id: 1, name: 'Product 1', price: 130},
//     {id: 2, name: 'Product 2', price: 120},
//     {id: 3, name: 'Product 3', price: 100},
// ];

// //product = current value
// const total = cart.reduce(function (acc, product) {
//     return acc + product.price
// }, 0);
// console.log(total);

//create Array = youngPeople 
// (storing objects: first + lastname, email for those under 25)

//_________________________________________________________________________________________________________________________________________________________________

//CHALLENGE 1:
// Create an array called youngPeople and store the firstname, lastname and email of those under 25. 

// const people = [ 
//     {firstName: 'John',
//     lastName: 'Doe',
//     email: 'johndoe@gmaail.com',
//     phone: '111-111-1111',
//     age: 30,},
// {   firstName: 'Stephanie',                              
//     lastName: 'Moe',
//     email: 'Stephaniemoe@gmaail.com',
//     phone: '333-333-3333',
//     age: 21,},
// {firstName: 'Terence',
//     lastName: 'Woe',
//     email: 'terencewoe@gmaail.com',
//     phone: '444-444-4444',
//     age: 45,},
// {firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'janepoe@gmaail.com',
//     phone: '222-222-2222',
//     age: 25,},
// {   firstName: 'Jose',
//     lastName: 'Rome',
//     email: 'joserome@gmaail.com',
//     phone: '555-555-5555',
//     age: 23,}
// ];

// MY ATTEMPT
// const youngPeople = people.filter((person) => person.age <= 25)             FILTER --> to select those under 25
// .map((person) => {                                                          MAP --> to return the firstname, lastname and email
//     return {
    //         firstName: person.firstName,
    //         lastName: person.lastName,
    //         email: person.email
    //     };
    // });
    // console.log(youngPeople);
    
// ANSWER
//     const youngPeople = people.filter((person) => person.age <=25)
//     .map((person) => (
//         {
//             name: person.firstName + '' + person.lastName,
//             email: person.email,
//         }
//     ))
//     console.log(youngPeople);
//_______________________________________________________________________

//CHALLENGE 2: Add all the positive numbers in the array 

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// console.log(positiveSum); //79
// --------------------------------------------------------------------------

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const positiveSum = numbers
// .filter((number) => number > 0) //logs: (4) [2,50,20,70]
// //filter out all the negative numbers
// .reduce((initialValue, currentValue) => initialValue + currentValue, 0);
// //reduce the numbers to a single number
// console.log(positiveSum); //logs: 79

//______________________________________________________________________

//CHALLENGE 3
//Create array called capitalizedWords with words from the words Array 
//with the first letter of each word capitalized. 
// - map (() => {return }) console.log
// - toUpperCase ()
// - index [0] (target first letter)
// - word.slice(1) (add on the rest of the word)

// const words = ['coder', 'programmer', 'developer'];
// console.log(capitalizedWords);

// const words = ['coder', 'programmer', 'developer'];
// const cWords = words.map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//  });
// console.log(cWords);

