// //GET CHILD ELEMENT

// let output;
// const parent = document.querySelector('.parent');
// output = parent.children;
// output = parent.children [1]; //log: div.child
// output = parent.children [1].innerText; //log: child 2

// parent.children [1].innerText = 'Child Two'; //replaces the text
// parent.children [1].style.color = 'red'; //changes the colour

// parent.firstElementChild.innerText = 'Child One'; //changes HTML Text
// parent.lastElementChild.innerText = 'Child Three'; //changes HTML Text

// //GET PARENT ELEMENTS FROM CHILD 
// const child = document.querySelector('.child');
// output = child.parentElement; //log: div.parent
// child.parentElement.style.border = '1px solid #ccc'; //border to HTML on parent

// //SILING ELEMENTS
// const secondItem = document.querySelector('.child:nth-child(2');
// //nth-child () --> you can target a different child 

// console.log(output);

//_____________________________________________________________________

//NODES AND ELEMENTS: CHILD AND PARENT 

// let output;
// const parent = document.querySelector('.parent');
// // output = parent.childNodes;
// output = parent.childNodes[1].textContent; // log:Child 1
// output = parent.childNodes[1].nodeName; //log: DIV
// output = parent.childNodes[1].outerHTML; //log: <div class="child">Child1</div>
// output = parent.childNodes[1].style.color = 'red'; //change the colour
// output = parent.firstChild; //log: #text
// output = parent.lastChild.textContent = 'Hello'; //replacing with text

// //PARENT NODE
// const child = document.querySelector('.child');
// output = child.parentNode; //log : div.parent
// output = child.parentElement; //log: div.parent 

// child.parentNode.style.backgroundColor = '#ccc'; //set the backgroundcolor

// //SIBLINGS
// const secondItem = document.querySelector('.child:nth-child(2)');
// output = secondItem.nextSibling; //logs #text
// output = secondItem.previousSibling;

// console.log(output); //logs Nodelist(7) [text,child,text,child,text]

//_______________________________________________________________________

//INNER HTML VS CREATE ELEMENT

//check script12.js

