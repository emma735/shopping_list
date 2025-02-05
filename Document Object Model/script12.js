// let output;
// output = document.all;
// output = document.all[10]; //index: logs 10th element
// output = document.all.length; //logs: 38 (no. of items)

// //log HTML and everything in it
// output = document.documentElement; 

// //logs head / body
// output = document.head;

// //logs the children in the head tag
// output = document.head.children;

// output = document.doctype;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;
// output = document.forms;
// output = document.forms[0].id; // logs: item-form
// output = document.forms[0].method; //logs: get

// document.forms[0].id = 'new-id';
// output = document.links; //logs HTML Collection [a]
// output = document.links[0]; //logs: a
// output = document.links[0].href; //logs:https://google.com
// output = document.links[0].id = 'google-link'; //remains the link 
// output = document.links[0].cla = 'google-link';
// output = document.links[0].classList; //DOMTokenList
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// document.forms.forEach((form) => console.log(form));

// console.log(output);

//_________________________________________________________________________

//DOM SINGLE ELEMENT - select single elements on the page

//document.getElementById()

// console.log(document.getElementById('app-title')); //log h1#app-title
// console.log(document.getElementById('app-title').className); //log 'hello'
// console.log(document.getElementById('app-title').getAttribute('id')); //log app-title

// //set attributes
// document.getElementById('app-title').title = 'shopping list';
// document.getElementById('app-title').setAttribute('class', 'title');

//put into a variable if you don't want to repeat document.getElementById...

// const title = document.getElementById('app-title');
// // console.log(title);

// // GET or CHANGE the CONTENT in the HTML 
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again'; //changes the title 
// // title.innerHTML = '<strong>Shopping List</strong>' //changes the title and makes it bold

// //CHANGE STYLES
// title.style.color = 'red'; //makes title red
// title.style.backgroundColor = 'black'; //background black
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// //DOCUMENT.QUERYSELECTOR()
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title')); //logs h1#app-title.hello
// console.log(document.querySelector('.container')); //logs div.container
// console.log(document.querySelector('input[type="text"'));
// console.log(document.querySelector('li:nth-child(2)').innerText); //oranges
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// //use these methods on other elements 
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

//_______________________________________________________________________

//SELECTING MULTIPLE ITEMS   --> querySelectorAll()
// // 
// const listItems = document.querySelectorAll('.item');
// console.log(listItems); //logs:NodeList [] --> array structure

// const listItems = document.querySelectorAll('.item');
// console.log(listItems [1].innerText); //logs:2nd element text

// listItems[1].style.color = 'red';

// //turns each element red
// listItems.forEach((item, index) => {item.style.color = 'red';
// if (index === 1) {item.remove();}
//changes the text from Oranges to Orange Juice
// if (index === 0) {item.innerText = 'Orange Juice';} }); 

// if (index === 0) {
//     item.innerHTML = `Orange Juice'
//     <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
// </button>``;} }); 

// const listItems2 = document.getElementsByClassName('.item');
// console.log(listItems2[2].innerText); //logs HTMLCollection

// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {console.log(item.innerText);});
// //if you want to use foreach first convert to an Array 

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);
//_________________________________________________________________________

//INNER HTML VS CREATE ELEMENT - APPEND CHILD

// const div = document.createElement('div');
// // div.className = 'my-element';
// // div.id = 'my-element'; //log div#my-element.my-element
// // div.setAttribute('title', 'My Element'); //log:div
// // div.innerText = 'Hello World'; 

// //APPEND CHILD (ADD CHILD)
// const text = document.createTextNode('Hello World');
// div.appendChild(text);//add the text to the div with AppendChild
// //APPEND CHILD --> Adds text to inside whatever it follows
// //so, div.appendChild (puts the text inside the div)
// //document.body.appendChild (puts the text inside the body)
// // document.body.appendChild(div); 
// // document.querySelector('ul').appendChild(div);
// //puts the text inside the UL
// console.log(div);

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

createNewItem('Cheese');          //create item

function createNewItem (item) {                 //target item              
    const li = document.createElement ('li');    //create a list
    //the text for the list  be awill textNode so create textNode
    li.appendChild(document.createTextNode(item));    //add a TextNode(item = the text) to list

    const button = document.createElement('button');    //create a button
    button.className = 'remove-item btn-link text-red'; //create the classes on button 
    
    //check
    // console.log(button); //logs: <button class = "remove-item btn-link text-red"

    const icon = document.createElement('i');   //create icon 
    icon.className = 'fa-solid fa-xmark';     //create classes on icon 

    button.appendChild(icon); //add the icon to the button?
    li.appendChild(button); //add the button to the list? 

    document.querySelector('.items').appendChild(li); //add everything to the DOM 
    
    console.log(li.innerHTML); //check the log
}





