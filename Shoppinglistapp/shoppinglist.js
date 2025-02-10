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

//VARIABLES

const itemForm = document.getElementById('item-form'); //form -> parent
const itemInput = document.getElementById('item-input'); //input box -> child
const itemList = document.getElementById('item-list'); //ul 
const clearBtn = document.getElementById('clear'); //clear button
const itemFilter = document.getElementById('filter'); //the filter box
const formBtn = itemForm.querySelector('button');

let isEditMode = false;

//DISPLAY ITEMS FROM LOCAL STORAGE-------------------------------------
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach(item => addItemtoDOM(item));
  checkUI();
}

function onAddItemSubmit(e) /*the event is an object*/ {
  e.preventDefault(); /*because we don't want the form to submit to the file*/
  
  const newItem = itemInput.value //create a variable

//validate input
if (newItem === '') { 
    alert('please add an item');
    return;
}

//UPDATE AND RESET STATE----------------------------------------
//check for edit mode
if (isEditMode) {
  const itemToEdit = itemList.querySelector('edit-mode');

  removeItemFromStorage(itemToEdit.textContent);
  itemToEdit.classList.remove('edit-mode');
  itemToEdit.remove();
  isEditMode = false;
} else { 
  if (checkIfItemExists(newItem)) {
    alert('That item already exists');
    return;
  }
}


//Create item DOM element
addItemtoDOM(newItem);

//add item to local storage
addItemToStorage(newItem);
checkUI();
itemInput.value ='';
} 

function addItemtoDOM(item) {
//create a list item
const li = document.createElement('li'); //create this variable
li.appendChild(document.createTextNode(item));//attach text to the list
const button = createButton('remove-item btn-link text-red');
li.appendChild(button);
itemList.appendChild(li); //add li to the DOM 
}

//BUTTON -------------------------------------------------------------------
// function createButton(classes) { //create the function of the button
//   //take in 'classes'
//   const button = document.createElement('button'); //create a button
//   button.className = classes; //add the classes to the classes
//   return button; //return the button 
// }
// function createIcon(classes) {
//   const icon = document.createElement('i');
//   icon.className = classes;
//   const icon = createIcon('fa-solid fa-xmark');
//   return icon;
// }
// button.appendChild(icon);

//CREATE BUTTON & ICON -----------------------------------------------------------
function createButton(classes) { 
  const button = document.createElement('button'); 
  button.className = classes; 
  const icon = createIcon('fa-solid fa-xmark'); // Create icon separately
  button.appendChild(icon); // Append icon to button
  return button; 
}

function createIcon(classes) {
  const icon = document.createElement('i'); 
  icon.className = classes; 
  return icon; // Return icon correctly
}

function addItemToStorage(item) {
  let itemsFromStorage = getItemsFromStorage(); // Fix: Declare once

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert back to JSON and save
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

//   //CHECK IF THERE ARE ITEMS IN STORAGE -------------------------------
// function addItemToStorage(item) {
//   const itemsFromStorage = getItemsFromStorage(); 
//   //this variable prevents a repeat of 'let itemsFromStorage'
//   if (localStorage.getItem('items') === null) {
//     //if there are no items in localstorage
//     itemsFromStorage = []; //set that variable to empty array
//   } else {
//     itemsFromStorage = JSON.parse(localStorage.getItem('items'));
//   } //put the JSON string into an array and put them in this variable

//   //ADD NEW ITEM TO AN ARRAY 
//   itemsFromStorage.push(item); 

//   //convert back into a JSON String and sent to local storage
//   localStorage.setItem('items', JSON.stringify(itemsFromStorage));
// }

//DISPLAY ITEMS FROM LOCAL STORAGE-----------------------
function getItemsFromStorage() {
  let itemsFromStorage;  
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = []; 
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
return itemsFromStorage; }

//REMOVE ITEM FROM LOCAL STORAGE----------------------------------

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

//NO DUPLICATION-------------------------------------------------------------------
function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();

  return itemsFromStorage.includes(item);
}

//SET TO EDIT MODE -------------------------------------------------
function setItemToEdit(item) {
  isEditMode = true;
  
  itemList.querySelectorAll('li') 
  .forEach(i => i.classList.remove('edit-mode'));
  //when I click one button,
  //  the previously clicked button returns to original color
  
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class ="fa-solid fa-pen">Update Item</i>';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;
}

function removeItem(item) {
  if (confirm)
  // (confirm('Are you sure?'))
     {
    const itemText = item.firstChild.textContent; // Get the item text (exclude button)
    item.remove(); 
    removeItemFromStorage(itemText); // Pass the item text to remove from storage
    checkUI();
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  
  // Filter out the item based on text content
  itemsFromStorage = itemsFromStorage.filter(i => i !== item);
  
  // Re-set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}


/*EVENT DELIGATION----------------------------------------------------------
 --> to remove the item when we click the 'x'
Put the event on the itemList(ul) and target whatever we click inside.*/

// /*we need to make it so we click on the 'x' but the li>item deletes */
//   /*if we do this, it will delete the button
//   because this is deleting the target (what i click on) */
// function removeItem(e) {
//   e.target.remove(); }
//--------------------------------------------------------------------------

// function removeItem(item) { //SOLUTION: Parent Element
//   console.log(item);
// // /*button is the parent*/
// //    if (e.target.parentElement.classList.contains
// //     ('remove-item')) {
// //      /*if the parent of what we click on contains the class 'remove-'item'
// //      work only if click => icon whose parent=button class = 'remove-item'
// //      */ 
// //     if (confirm('Are you sure?')) {
// //       e.target.parentElement.parentElement.remove(); 
// //     }}
// }

  
//-----------------------------------------------------------------------
function clearItems() {
  while (itemList.firstChild) {
/*when the list has the first item, remove the child */
    itemList.removeChild(itemList.firstChild);
  }

  //clear from local storage
  localStorage.removeItem('items');

  checkUI();
}

//FILTER ITEMS ----------------------------------------------------
function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  //connecting 'items' to itemList --> the ul 
  const text = e.target.value.toLowerCase(); 
  //target the text inside = make it all lowercase

  items.forEach(item => {
  //usinig 'items' 
    const itemName = item.firstChild.textContent.toLowerCase();
//get the text content (the first Child of the ul is text

    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }); 
}

/*CLEAR UI STATE-----------------------------------------------------------------------
When the food list is there, keep the 'filter items' box
when the food list is gone, hide the 'filter items */


/*CHECK THE STATE OF THE APPLICATION
Run a function to check if there are items */
function checkUI() {
  itemInput.value = '';
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i>Add Item';
  formBtn.style.backgroundColor = '#333';
  
  isEditMode = false;
}


//INITIALIZE APP -----------------------------------------------------
function init() {

//EVENT LISTENER ---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', checkUI);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
itemForm.addEventListener('submit', onAddItemSubmit);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI(); }
init();
//-------------------------------------------------------------------