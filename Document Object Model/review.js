// let output;

// output = document.all; //access all elements in the document 
// output = document.all[10];  //access element 10 in the document

// output = document.documentElement;

// output = document.head; //logs the head
// output = document.head.children; //logs everything in the head

// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;
// output = document.forms;
// output = document.forms[0].method;
// output = document.forms[0].action;

// document.forms[0].id = 'new-id';

// output = document.links;
// output = document.links[0];
// output = document.links[0].href; //access the link
// output = document.links[0].id = 'google-link'; //set an id on the link
// output = document.links[0].className = 'google-class';

// output = document.images[0];
// output = document.images[0].src; //get the source of an image

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);

//____________________________________________________________________________

//document.getElementById()

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// // console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

// //set attributes
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');
// console.log(title);

// //Get/change content

// console.log(title.textContent);
// title.textContent = 'Hello World' ; 
// title.innerText = 'Hello Again';
// title.innerHTML= '<strong>Shopping List</strong>';

// //change styles
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// //document.querySelector()          ---> only selects single elements
// console.log(document.querySelector('h1'));           - select by element
// console.log(document.querySelector('#app-tite'));    - select by ID
// console.log(document.querySelector('.container'));    - select by class
// console.log(document.querySelector('input[type="text"]'));   -by input type

console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

//use these methods on other elements

// const list = document.querySelector('ul');
// console.log(list);
// //you can use queryselector on the list
// // example: list.querySelector('li')

// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

//EXPERIMENTS

// const form = document.querySelector('form');
// form.style.backgroundColor = 'pink';
// form.style.border = '2px solid purple';

// form.addEventListener('mouseenter', () => {
//     form.style.transform = 'scale(1.08)';
// });
// form.addEventListener('mouseleave', () => {
//     form.style.transform = 'scale(1)';
// });

// console.log(form);

// const UnsubscribeButtom = document.createElement('button');
// UnsubscribeButtom.textContent = 'unsubscribe';
// form.appendChild(UnsubscribeButtom);

// UnsubscribeButtom.addEventListener('click', (e) => {
//     e.preventDefault();
//     const newInput = document.createElement('input');
//     newInput.type = 'text';
//     newInput.placeholder = 'New Field';
//     form.appendChild(newInput);
// })

// form.addEventListener('submit',(e) => {
//     const emailField = form.querySelector('input[type = "email"]');
//     if (!emailField.value.includes('@')) {
//         e.preventDefault();
//         alert('Please enter a valid email address');
//     }
// });

// const inputs = form.querySelectorAll('input'); //select all inputs in form
// inputs.forEach(input => {
//     input.addEventListener('focus', () => {
//         input.style.backgroundColor = '#f0f8ff';
//         input.style.outline = '2px solid yellow';
//     });
// input.addEventListener('blur', () => {
//     input.style.backgroundColor = '';
//     input.style.outline = '';
// })
// });

// const nameInput = form.querySelector('input[name="name"]');
// nameInput.addEventListener('mouseenter', () => {
//     const tooltip = document.createElement('div');
//     tooltip.textContent = 'Enter your full name';
//     tooltip.style.position = 'absolute';
//     nameInput.parentNode.appendChild(tooltip);
//     nameInput.tooltip = tooltip;
// })

// nameInput.addEventListener('mouseleave', () => {
//     if (nameInput.tooltip) {
//         nameInput.tooltip.remove();
//     }
// });

//--------------------------------------------

//querySelectorAll()

const listItems = document.querySelectorAll('.item');  //select by class of item
console.log(listItems); //targets the listItems
console.log(listItems[1]); //targets list Item number 1
console.log(listItems[1].innerText); //targets JUST THE TEXT of item 1

//MISTAKE
// listItems.style.color = 'red';
//style can only be used on one specific element, not a whole list

//CORRECTION (you can use style with [1] element)
// listItems[1].style.color = 'red';

//CORRECTION (you can target all elements with forEach)
// listItems.forEach((item) => {
//     item.style.color = 'red';
// });

listItems.forEach((item, index) => {
    item.style.color = 'red';
    
    if (index === 1) {
        item.remove();
    }

    if (index === 0 ) {
        item.innerText = 'Strawberries'
    }
});
