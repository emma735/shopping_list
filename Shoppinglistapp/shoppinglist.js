/* HTML 

<div class="container">
      <form id="item-form">

      <div class="form-control">
          <input type="text"class="form-input" id="item-input" />
        <div class="form-control">
          <button type="submit" class="btn">

          <div class="filter">
        <input type="text" class="form-input-filter" id="filter"></input>
      <ul id="item-list" class="items">
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
 
        <button id="clear" class="btn-clear">Clear All</button>*/

//_____________________________________________________________________________________--

/* ADD ITEMS TO LIST

1. Put elements needed 'in the global scope' (at the top) so that we can 
access them from multiple functions*/

// const itemForm = document.getElementById('item-form'); //form -> parent
// const itemInput = document.getElementById('item-input'); //input box -> child
// const itemList = document.getElementById('item-list'); //ul 

// function addItem(e) /*the event is an object*/ {
// e.preventDefault(); /*because we don't want the form to submit to the file*/

// //VALIDATE INPUT (Ensure person fills in the empty box)   
// /* if (itemInput) {}    will show you the element*/
// if (itemInput.value === '') { //shows you the value of the element
// //if the Input value is equal to nothing alert them to add something
//     alert('please add an item');
//     return;
// }

// console.log('success');
// }

// /*EVENT LISTENERS*/
// itemForm.addEventListener('submit', addItem);

//___________________________________________________________________

//HOW TO LOG THE WORD THE PERSON TYPES INTO THE INPUT BOX

const itemForm = document.getElementById('item-form'); //form -> parent
const itemInput = document.getElementById('item-input'); //input box -> child
const itemList = document.getElementById('item-list'); //ul 

const newValue = itemInput.value //create a variable

function addItem(e) /*the event is an object*/ {
e.preventDefault(); /*because we don't want the form to submit to the file*/


if (newItem === '') { 
    alert('please add an item');
    return;
}

//create a list item
const li = document.createElement('li'); //create this variable
li.appendChild(document.createTextNode(newItem));//attach text to the list

const button = createButton('remove-item btn-link text-red');
console.log(button);
} /* create a button with classes*/ 

function createButton(classes) { //create the function of the button
  //take in 'classes'
  const button = document.createElement('button'); //create a button
  button.className = classes; //add the classes to the classes
  return button; //return the button 
}

/*EVENT LISTENERS*/
itemForm.addEventListener('submit', addItem);