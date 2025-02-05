//CREATE AMMEND

// const div = document.createElement('div'); //create a div element

// //ADD ATTRIBUTES TO THE CREATED ELEMENT (e.g the div)
// // div.className = 'my-element'; //add a class name
// // div.id = 'my-element'; //add an ID
// // div.setAttribute('title', 'my element'); //add a title = "my element"

// // div.innerText = 'Hello World';
// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// //APPENDCHILD - Inserts something into something else

// // document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);

// console.log(div);

//__________________________________________________________________

//QUICK & DIRTY

// function createListItem(item) {
//     const li = document.createElement('li');

//     li.innerHTML =`${item}
//         <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     document.querySelector('.items').appendChild(li);
// }
// createListItem('Eggs');

//CLEAN & PERFORMANT - create new Elements and append them

// function createNewItem(item) {

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode('Cheese'));
//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';

//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
    
//     button.appendChild(icon);
//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);
// }

// createNewItem('Cheese');

// REFACTOR TO MULTIPLE ELEMENTS

// function createNewItem(item) {

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode('Cheese'));

//     const button = createButton('remove-item btn-link text-red');
//     const icon = createIcon('fa-')

//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
    
//     button.appendChild(icon);
//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);
// }

// function createButton(classes) {
//     const button = document.createElement('button');
//     button.className = classes;
//     return button;}

// function createIcon(classes) {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// }

// createNewItem('Cheese');
// createNewItem('Sauce');

//___________________________________________________________________________

// //insertAdjacentElement
// function insertElement() {
//     //we want to insert before the filter
//     const filter = document.querySelector('.filter'); 

//     //create the new element to inset
//     const h1 = document.createElement('h1');
//     //add some text to the new
//     h1.textContent = 'this is before filter items';

//     //  position + element we want to insert
//     filter.insertAdjacentElement('beforebegin', h1);
// }

// insertElement();

// //insertAdjacentText
// function insertText() {
//     const list = document.querySelector('li:first-child');

//     const button = document.createElement('button');
//     button.textContent = 'funny';
//     list.insertAdjacentElement('afterbegin',button);
// }
// insertText();

// //insertAdjacentText
// function insertHTML () {
//     const clearBtn = document.querySelector('#clear');

//     clearBtn.insertAdjacentHTML('beforebegin', '<h2>someHTML</h2>');
// }

// insertHTML();


// //insertBefore example
// function insertBefore() {
//     const ul = document.querySelector('ul');

//     const p = document.createElement('p');
//     p.textContent = 'a long story';

//     const thirdItem = document.querySelector('li:nth-child(3');
//     ul.insertBefore(p, thirdItem);
// }

// insertBefore();


//POSITIONS
/*<!--before begin-->
<p>
<!--afterbegin -->
foo
<!--beforeend -->
</p>
<!--afterend --> */


// function insertAfter() {
//     const existingElement = document.querySelector('a');

//     const newElement  = document.createElement('button');
//     newElement.textContent = 'happy';

//     const firstItem = document.querySelector('li:first-child');
// }

// insertAfter();

//CHALLENGE

// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }
    
//     //existing element to insert after
//     const firstItem = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'Insert Me After!';    

//     insertAfter(li,firstItem);

//REPLACING ELEMENTS

// function replaceFirstItem() {
//     const firstItem = document.querySelector('li:first-child');
    
//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';
//     firstItem.replaceWith(li);
// }
// function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');
//     secondItem.outerHTML = '<li>Replaced Second</li>';
// }

// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');

//     //LONG HAND
//     lis.forEach((item,index) => {
//         // item.outerHTML = '<li>Replace All</li>';
//         // item.innerHTML= 'Replace All';
//     if (index === 1 ){
//         item.innerHTML = 'Second Item';
//     } else {
//         item.innerHTML = 'Replace All';
//     }
//     });

//     //SHORTHAND
//     lis.forEach((item,index) =>item.outerHTML = index === 1 ?
//      '<li>Second Item</li>' : '<li>Item</li>');
// }

// //CALL THE PARENT TO REPLACE THE CHILD
// function replaceChildHeading() {
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');

//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Replaced Heading';
//     header.replaceChild(h2,h1);
//     }

// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading();

//-------------------------------REMOVING-------------------------------

function removeClearButton() {
    document.querySelector('#clear').remove();
}
removeClearButton();

function removeFirstItem() {
    //target the ul
    const ul = document.querySelector('ul'); 
    //select the item in the ul you want to remove
    const li = document.querySelector('li:first-child'); 
    //call on the parent
    //parent ul --remove child -- list item
    ul.removeChild(li);
}
removeFirstItem();
//--------------------REMOVING A SPECIFIC ITEM BY NUMBER

function removeItem(itemNumber) {
    const ul= document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

removeItem(3);

//----------------------------

function removeItem(itemNumber) {
    const ul= document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber];

    ul.removeChild(li);
}

removeItem2(2);

function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

removeItem3();

//shorthand

const removeItem4 =  (itemNumber) => document.querySelectorAll
[itemNumber - 1].remove();

removeItem4;