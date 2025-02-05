// string   

// const firstName = 'Sara';

// number
// const age = 30;
// const temp = 98.9;

// boolean
// const hasKids = true;

// Null
// const aptNumber = null;

// undefined
// let score;

// symbol
// const id = Symbol ('id');

// BigInt
// const n = 9007199254740991n;

// Reference Types
// const numbers = [1,2,3,4];

// Person 
// const person = {name:'Brad'};
// function sayHello () {console.log('Hello');}
// const output = sayHello;

// console.log(output, typeof output);

// const name = 'John';
// const age = 30;
// Reference values are stored on the heap
// const person = {
//     name: 'Brad', 
//     age: 40,
// };
// let newName = name;

// let newPerson = person;
// newPerson.name = 'Bradley';
// console.log(name,newName);
// console.log(person, newPerson);

// let amount = 'hello';
// Change string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);
// Change number to string
// amount = amount.toString();
// amount = String(amount);
// change string to decimal
// amount = parseFloat(amount);
// Convert number to Boolean
// amount = Boolean(amount);
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo'/ 3);

// console.log(amount,typeof amount);


// Arithmeti Operators
// let x;
// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5; 
// x = 5 % 5 ;

// // concatenation 
// x = 'Hello' + 'World';

// // exponent
// x = 2 ** 3;

// // increment
// x = 1;
// x = x + 1;
// x ++;

// // decrement
// x = x -1;
// x --;

// // assignment operators
// x = 10;
// x +=5;
// x = x + 1;
// x *=5;
// x%=5;

// // comparison operators
// x = 2 == '4';
// x= 2 === '2';

// x = 2 != '2';

// x = 10 > 5;
// x = 10 < 5;
// x = 10 >= 5;

// console.log(x);

// let x;
// x = 5 + '5';
// x = 5 + Number('5');
// x= 5 * '5';
// x = 5 + null;
// x = Number(null);
// x = Number(true);
// x = Number(false);
// x = 5 + false;
// x = 5 + undefined;

// console.log(x, typeof x);

// let x;
// const name = 'John';
// const age = 30;
// x = 'Hello, my name is' +  name + 'and I am ' + age + 'years old';
// // template literals
// x = `Hello, my name is ${name}`; 

// // string properties and methods
// const s = new String ('Hello World');
// x = s.length;
// x = typeof s;
// x = s [1];
// x = s.__proto__;
// x = s.toLowerCase;
// x = s.charAt(0);
// x = s.indexOf('d');
// x = s.substring(2,5);
// x = s.substring(7);
// x = s.slice (-11);
// console.log(x);

// WORKING WITH NUMBERS
// let x;
// const num = new Number(5.4567);
// X = num.toString().length;
// x = num.toFixed(6);
// x = num.toPrecision(2);
// x = num.toExponential(2);
// x = num.valueOf();
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x);


// const myString = 'developer';
// let myNewString;

// solution 1
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// // solution 2
// myNewString = myString[0].toUpperCase() + myString.substring(1);

// // solution 3
// myNewString = `${myString[0].toUpperCase()} ${myString.substring(1)}`;

// console.log(myNewString);

// MATH OBJECT
// let x;
// x = Math.sqrt(9);
// x = Math.abs(-5);
// x = Math.round(4.6);
// x = Math.ceil(4.2);
// x = Math.floor(4.2);
// x = Math.pow(2,3);
// x= Math.min(4,5,3);
// x = Math.random();
// x = Math.floor(Math.random()*10 + 1); 
// console.log(x);

// number challenge
// const x = Math.floor(Math.random()* 100 + 1);
// const y = Math.floor(Math.random()*50 + 1);
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// const difference = x - y;
// const differenceOutput = `${x} - ${y} = ${difference}`;
// console.log(differenceOutput);

// const product = x * y;
// const productOutput = `${x} x ${y} = ${product}`;
// console.log(productOutput);

// const quotient = x / y;
// const quotientOutput = `${x} / ${y} = ${quotient}`;
// console.log(quotientOutput);

// const remainder = x % y;
// const remainderOutput = `${x} % ${y} = ${remainder}`;
// console.log(remainderOutput);

// DATES AND TIME
// let d;
// d = new Date (2021,0,10,12,30,0);
// d = new Date ('2021-07-10T12:30:00');
// d = new Date ('07/10/2021 12:30:00');
// d = new Date ('2022-07-10');
// // d = d.toString(2021, 0, 10, 12,);

// d = Date.now();
// d = new Date ('07-10-2022 12:30:00');
// d= d.getTime();
// d = d.valueOf();
// d = new Date (1657449000000)
// d = Math.floor(Date.now ()/ 1000);
// console.log(d);

// DATE METHODS & DATETIMEFORMAT
// let x; 
// let d = new Date ('2020/10/12');
// x = d.getTime();
// x= d.toString;
// x = d.getTime();
// x = d.valueOf();
// x = d.getFullYear();
// x = d.getMonth() + 1;
// x = d.getDate();
// x = d.getDay();
// x = d.getMinutes();
// x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
// x = Intl.DateTimeFormat('en-US').format(d);
// x = Intl.DateTimeFormat('en-GB').format(d);
// x = Intl.DateTimeFormat('default', {month:'long'}).format(d);
// x = d.toLocaleString('default', {month: 'short'});
// x = d.toLocaleString('default',)
// console.log(x);