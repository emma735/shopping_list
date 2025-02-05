
//______________________________________________________________________
//ADD AN ITEM TO THE SHOPPING LIST. 
// INCLUDE THE TITLE, THE BUTTON AND THE ICON. 

//the HTML 
/* <li class="item">Milk
<button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
</button> */
//-----------------------------------------------------------------------

//QUICK & DIRTY METHOD - (INNER HTML)

// function createListItem(item) {   //
//     const li = document.createElement('li');   //create variable
//     //replace <li class="item">Milk      with the item, which will be eggs
//     li.innerHTML = `${item}                      
// <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
// </button>`;
//     document.querySelector('.items') //get the UL 
//     .appendChild(li); //add li
//     }

// createListItem('Eggs'); //you want to pass in 'Eggs' to the list

//CLEAN & PERFORMANT - (CREATE ELEMENTS)

// createNewItem('Cheese');                            //create item
//     function createNewItem (item) {                 //target item              
//     const li = document.createElement ('li');        //create a list
//     li.appendChild(document.createTextNode(item));    //add a TextNode(item = the text) to list

//     const button = createButton ('remove-item btn-link text-red'); //create the classes on button 
//     const icon = document.createElement('i');        //create icon 
//     icon.className = 'fa-solid fa-xmark';           //create classes on icon 
//     button.appendChild(icon);                        //add the icon to the button?
//     li.appendChild(button);                          //add the button to the list? 

//     document.querySelector('.items').appendChild(li);  //add everything to the DOM }

//     }

//_______________________________________________________________________

//Making functions out of things so they are more re-usable later on. 

// function createNewItem(item) {
//     const li = document.createElement('li');  
//     li.appendChild(document.createTextNode(item)); 

//     const button = createButton('remove-item btn-link text-red'); 

//     li.appendChild(button);//connect button to list

//     document.querySelector('.items').appendChild(li);
// }

// //creating a function that takes in the classes
// function createButton(classes) {
//     const button = document.createElement('button');
//     button.className = classes;
//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);
//     return button;
// }

// function createIcon(classes) {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// }

//     createNewItem('Cheese');
//     createNewItem('Sauce');

//_______________________________________________________________________

// //INSERT ADJACENT ELEMENT 
// function insertElement() {
//     const filter = document.querySelector('.filter')  //<div class = 'filter' <div> 
//     //create element to place new element before before or after
//     const h1 = document.createElement('h1'); 
//     //create new element
//     h1.textContent = 'insertAdjacentElement';
//     //what the text is going to be
//     filter.insertAdjacentElement('beforebegin', h1);
//     //(position a Heading 1 BEFORE the filter) 
// }

// // insertElement();

// //INSERT ADJACENT TEXT
// function insertText() {
//     const item = document.querySelector('li:first-child'); 
//     //which item do we want to put the text before? e.g. the first list item
//     item.insertAdjacentText('afterend', 'insertAdjacentText');
//     //(position: after, text to be inserted
// }

// insertText(); //run it

// //INSERT ADJACENT HTML
// function insertHTML() {
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
// }

// insertHTML();

// //INSET BEFORE
// //define a parent and choose the item inside the parent that you want
// //to position your item before
// function insertBefore() {
//     const ul = document.querySelector('ul')
// }

/* <!--beforebegin-->
<p>
 <!--afterbegin-->
foo
<!--beforeand-->
</p>
<!--afterand-->
*/

// ______________________________________________________
//insertAdjacentElement Example
// function insertElement() {
//     const filter = document.querySelector('.filter');
//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';
//     filter.insertAdjacentElement('beforebegin', h1);
// }
// //insertAdjacentText Example
// function insertText() {
//     const item = document.querySelector('li:first-child');
//     item.insertAdjacentText('afterend', 'insertAdjacentText');
// }
// //innsertAdjacentHTML Example
// function insertHTML() {
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
// }
// //insertBefore Example
// function insertBeforeItem(){
//     const ul = document.querySelector('ul');
//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';
//     const thirdItem = document.querySelector('li:nth-child(3');
//     ul.insertBefore(li,thirdItem);
// }

// insertElement();
// insertText();
// insertHTML();
// insertBeforeItem();
/* <!--beforebegin --> 
<p>
<!-- afterbegin --> foo
<!-- beforeend --> </p>
<!-- afterend -->*/

// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
// }

// //new element to insert
// const li = document.createElement('li');
// li.textContent = 'Insert Me After!';

// //existing element to insert after
// const firstItem = document.querySelector('li:first-child');

// //our custom function 
// insertAfter(li,firstItem);

//------------------------------------------------------------

//REPLACING ELEMENTS

//the function replaceFirstItem identifies the first <li> item on the page
//using querySelector. it then creates a new <li> element with the text
//"replaced first". finally, it replaces the original <li> with the new one

// function replaceFirstItem() {
//     const firstItem = document.querySelector('li:first-child'); 
//     //this finds the first element (first child of the parent container)
//     //firstItem (stores the reference to the list of first child)
//     const li = document.createElement('li');
//     //this creates a new element called 'li'
//     li.textContent = 'Replaced First';
//     //this sets the content inside the 'li'
//     firstItem.replaceWith(li);
//     //this replaces the first element with the new element 
// }

// function replaceSecondItem(){
//     const secondItem = document.querySelector('li:nth-child(2)');
//     secondItem.outerHTML = '<li>Replaced Second</li>'
// } //

// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');
//     // lis.forEach((item,index) => {
//     //     // item.outerHTML = '<li>Replace All</li>';
//     //      // item.innerHTML = 'Replace All';
//     // if(index === 1) {
//     //     item.innerHTML = 'Second Item';
//     // } else {
//     //     item.innerHTML = 'Replace All';
//     // }
//     // });
//     lis.forEach(
//         (item,index) =>
//              (item.outerHTML = index ===1 ? '<li>Second Item</li>' :
//                  '<li>Item</li>')
//                 ); //shorthand method
// }

// function replaceChildHeading() {
//     const header= document.querySelector('header');
//     const h1 = document.querySelector('header h1');
//     const h2 = document.querySelector('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'words';
//     header.replaceChild(h2, h1);
// }

// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading();

//REMOVE ELEMENTS
// function removeClearButton() {
//     document.querySelector('#clear').remove();
// }

// removeClearButton();

// //removing a child element
// function removeFirstItem() {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:first-child');
//     ul.removeChild(li);
// }

// removeFirstItem();

//REMOVING ITEMS
// function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemNumber})`);
//     ul.removeChild(li);
// }

// removeItem(2); //removing the second item 

//REMOVING ITEMS
// function removeItem2(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll('li') [itemNumber - 1];
//     ul.removeChild(li);
// }

// // removeItem2(1); //removing the second item 

// function removeItem3(itemNumber) {
//     const li = document.querySelectorAll('li');
//     li[itemNumber - 1].remove();
// }

//SHORTHAND
// function removeItem3() {
//     const li=document.querySelectorAll('li');
//     li[itemNumber -1].remove();
// }

// const removeItem4 = (itemNumber) => document.querySelectorAll ('li') [
//     itemNumber - 1].remove();
//     removeItem4(1);

// removeItem3(3);

//____________________________________________-
//EVENTS

// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// // const onDoubleClick = () => console.log('double click event');
// const onDoubleClick = () => {
//    if (document.body.style.backgroundColor !== 'purple') {
//     document.body.style.backgroundColor = 'purple';
//     document.body.style.color = 'red';
//    } 
//    else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'blue';
//    }
// };

// const onRightClick = () => console.log('right click event');


// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse down up');
// const onMouseWheel = () => console.log('mouse down wheel');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDrag = () => console.log('drag');
// const onDragEnd = () => console.log('drag end');


// //Event listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown); //holding mouse down
// logo.addEventListener('mouseup', onMouseUp); //letting go of mouse
// logo.addEventListener('wheel', onMouseWheel); //scroll
// logo.addEventListener('mouseover', onMouseOver); //hover above something
// logo.addEventListener ('mouseout', onMouseOut); //hover on something else
// logo.addEventListener('drag', onDrag); 
// logo.addEventListener('dragend', onDragEnd); 

//_______________________________________________________________________
// const logo = document.querySelector('img');

// function onClick(e) {
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     // e.target.style.backgroundColor = 'black';
//     // console.log(e.type);
//     // console.log(e.timeStamp);
//     console.log(e.screenX);
// }

// function onDrag(e) {
//     document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener('click', onClick);
// logo.addEventListener('drag', onDrag);

// PREVENTING THINGS
//e.g. if you have a form and you want to stop it submitting
// document.querySelector('a').addEventListener('click',function (e) {
//     e.preventDefault();
//     console.log('Linked was clicked'); //this will be logged
// })

// document.body.addEventListener('click', function () {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

/*
- target - the element that triggered the event
-currentTarget' - the element that the event listener is attached to 
-type - type of event triggered
- timeStamp
-clientX - the x postion mouseclick relative to the window
-clientY - the y position of the click relative to the window
-offsetX - x position of click relative to elemen
-offsetY - y position 
-pageX and page y - x and y position relative to page
-screen X and Y - relative to screen
*/

//________________________________________________________________________
// KEYBOARD EVENTS 

const itemInput = document.getElementById('item-input');

const onKeyPress = e => { 
    console.log('keypress');
}; //if you press any key

const onKeyUp = e => { 
    console.log('keyup');
}; //when you release the key

const onKeyDown = e => { 

    //KEY - Shows and targets individual keys
    // console.log(e.key);  

    // if(e.key === 'Enter') {
    //     alert('You Pressed Enter');
    // }

    //KEYCODE -
    console.log(e.keyCode);

    if(e.keyCode === 13) {
        alert('Enter is the number 13');
    }

    //CODE
    console.log(e.code);
    // console.log('keydown');
 //when you hold down the key 

if (e.code === 'Digit1') {
    console.log('You pressed 1');
}

if (e.repeat) {
    console.log('You are holding down' + e.key);
}

console.log('Shift' + e.shiftKey);
console.log('Control' + e.ctrlKey);
console.log('Alt:' + e.altKey);

if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift' + K);
}
};


// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);

//___________________________________________________


