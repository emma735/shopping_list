// let x;

// // Array Literal
// const numbers = [12,45,33,29,39];
// const mixed = [12,'Hello','true','null']

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// x = numbers[0];
// x = numbers [0] + numbers[3];
// x = `My favourite fruit is ${fruits[2]}`;
// x = numbers.length;

// fruits [3] = 'strawberry';
// fruits[fruits.length] = 'blueberry';
// console.log(fruits);

// ARRRAY METHODS
// let x;
// const arr = [34,55,95,20,15];
// // arr.push(100);
// // arr.pop();
// // arr.unshift(99);
// // arr.reverse();
// x = arr.includes(200);
// x = arr.indexOf(340);
// // x = arr.slice(1,4);
// // x = arr.splice(1,4);
// x = arr.splice(1,4).reverse().toString().charAt(0);
// console.log(x);

// ARRAY NESTING
// let x;
// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry','blueberry','rasberry'];
// // fruits.push(berries);
// // x = fruits[3][1];
// const allFruits = [fruits, berries];
// x = allFruits[1] [0];
// x = fruits.concat(berries);

// // Spread Operator (...)
// x = [...fruits, ...berries];

// // Flatten  Arrays
// const arr = [1,2, [3,4],5,[6,7],8];
// x = arr.flat();

// // Static Methods on Array Object
// x= Array.isArray('hello');
// x = Array.from('12345');
// const a = 1;
// const b = 2;
// const c = 3;
// x = Array.of(a,b,c);
// console.log(x);

// ARRAY CHALLENGE
// challenge 1
// let x;
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// arr.push(0);
// arr.unshift(6);
// console.log(arr);

// challenge 2
// const arr1 =  [1,2,3,4,5];
// const arr2 = [5,6,7,8,9,10];

// // Solution 1
// // const arr3 = arr1.slice(0,4).concat(arr2);

// // Soluion 2
// const arr4 = [...arr1,...arr2];
// arr4.splice(4,1);

// const person = {
//     name: 'Emma',
//     age: 30,
//     isAdmin: true,
//     address: {
//         street:'123 Main St',
//         city:'Boston',
//         state: 'MA',
//     },
//     hobbies: ['music','sports']
// };

// x = person.name;
// x = person['age'];
// x = person.address.state;
// x = person.hobbies[0];

// person.name = 'Jane';
// person['isAdmin'] = false;

// delete person.age;

// person.hasChildren = true;
// person.greet = function () {
//     console.log(`Hello, my name is ${this.name}`)
// }
// person.greet();
// x = person;
// console.log(x);

// OBJECT SPREAD
// let x; 
// const todo = new Object();  
// todo.id = 1;  
// todo.name = 'Buy Milk';
// todo.completed = false;
// x = todo;  

// // nesting
// const person = {
//     address: {
//         coords: {
//             lat:42.234,
//             lng:-71.43090
//         }
//     }
// }

// x = person.address.coords.lat;
// const obj1 = {a: 1, b:2};
// const obj2 = {c:3, d: 4};
// const obj3 = {...obj1, ...obj2};
// const obj4 = Object.assign({}, obj1, obj2);

// const todos = [
//     {id: 1, name: 'Buy Milk'},
//     {id: 2, name: 'Pick up Kids'},
//     {id: 3, name: 'Take out trash'},
// ]
// x = todos[0].name;
// x = todo.length;
// x = Object.keys(todo);
// x = Object.keys(todo).length;
// x = Object.values(todo);
// x = Object.entries(todo);
// x = todo.hasOwnProperty('name');
// console.log(x);  

// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//     firstName,
//     lastName,
//     age,
// }

// console.log(person.age);

// // destructuring
// const todo = {
//     id: todoId,
//     title: 'Take out trash',
//     user: {name: 'John',},
// };

// const {id,title,user} = todo;
// console.log(id, title);

// destructure arrays
// const numbers = [23, 67, 33, 49];
// const [first, second, ...rest] = numbers;
// console.log(first,second, rest);


// JSON INTRO
// send data to a server

// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body',
// };

// // convert to JSON string
// const str = JSON.stringify(post);

// // Parse JSON
// const obj = JSON.parse(str);
// const posts = [
//     {
//         id: 1,
//     title: 'Post One',
//     body: 'This is the body',
//     },
//     {
//         id: 2,
//     title: 'Post Two',
//     body: 'This is the body',
//     },
// ]

// const str2 = JSON.stringify(posts);

// console.log(str2);

// OBJECT CHALLENGE


const library = [
    {
    title: 'How to be a Millionaire',
    author: 'Steven Bradshaw',
    status: {
        own: true,       // Correct way to define the property
        reading: false,   // Correct way to define the property
        read: false      // Correct way to define the property
    }
},
{
    title: 'How to be Sexy',
    author: 'Alexander Something',
    status: {
        own: true,       // Correct way to define the property
        reading: false,   // Correct way to define the property
        read: false      // Correct way to define the property
    }
},
{
    title: 'How to Climb Hard',
    author: 'Susanna',
    status: {
        own: true,       // Correct way to define the property
        reading: false,   // Correct way to define the property
        read: false      // Correct way to define the property
    }
}
];

// Remaining the boolean "read" to from "false" to "true"
library [0].status.read = true;
library [1].status.read = true;
library [2].status.read = true;

// destructure 
// const { title: } = library // target the title 
// const { title: } = library [0] // the 0 targets the first book
const { title: firstBook } = library[0]; //renaminig the title
// console.log(library);
console.log(firstBook);

// turn library object into a JSON string
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);

