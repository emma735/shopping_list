//get child elements

//to look at the parent element
// const parent = document.querySelector('.parent');
// console.log(parent);

//___________________________________

//to look at the children inside the parent
// let output;

// const parent = document.querySelector('.parent');
// output = parent.children;
// console.log(output);

//VIEW ALL THE PROPERTIES YOU CAN USE --> dir

// let output;
// const parent = document.querySelector('.parent');
// output = parent.children;
// console.dir(output);

//__________________________________________


//use () for methods 
//use ; for properties 

let output;
const parent = document.querySelector('.parent');

output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two'; //change the text of the HTML
parent.children[2].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

//get parent elements from the child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//sibling elements
const secondItem = document.querySelector('.child:nth-child(2');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';


console.log(output);