//1.TARGETING THE EMPTY TEXTBOX
// const itemInput = document.getElementById('item-input'); //empty textbox

// const heading = document.querySelector('h1'); //heading

// function onInput(e) {
// //  console.log('Input');
// //  console.log(e.target); //when I type it gives me the target element
//  //which is the input element itself
// console.log(e.target.value); //gives me what I type
// heading.textContent = e.target.value; //what you type changes the heading
// }

// itemInput.addEventListener('input', onInput);
// //'input' --> an event --> fires when user types --> same as keydown except
// //keydown can't be used on select lists when input can

// //________________________________________________________________

// //THE DROPDOWN LIST
// const priorityInput = document.getElementById('priority-input');//dropdown list

// function onInput(e) {
//     heading.textContent = e.target.value; 
//     //the h1 is changing to whatever option on the dropdown you choose
// }

// priorityInput.addEventListener('input', onInput);

// //_______________________________________
// //CHECKBOX

// const checkbox = document.getElementById('checkbox');

// function onChecked(e) {
//     heading.textContent = e.target.value; 
//     //the h1 is changing to whatever option on the dropdown you choose
//     console.log(e.target.checked);
//     //click checkbox = true , unclick = false
// }

// //______________________________________________

// // VISUAL EFFECT - The box goes green when you click it

// function onFocus(e) {
//     console.log('Input is focused');
//     itemInput.style.outlineStyle = 'solid'; //these styles are appled
//     itemInput.style.outlineWith = '1px'; //when the mouse is focused
//     itemInput.style.outlineColor = 'green'; //on the box
// }

// function onBlur(e) {
//     console.log('Input is blurry');
//     itemInput.style.outlineStyle ='none';
// }

// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);

// checkbox.addEventListener('input', onChecked);

// //______________________________________________________________-_

// //FORMS and submissions

// const GetForm = document.getElementById('item-form');

// function onSubmit(e) {
// //if you don't have an action on your form then the entry will submit
// //to the same page
//     console.log('submit!');
// }

// GetForm.addEventListener('submit', onSubmit);
// //-------------------------------------------------------
// //PREVENT SUBMISSION TO THE FILE
// const GetForm1 = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();
//     console.log('submit!');
// }

// GetForm1.addEventListener('submit', onSubmit);

// //________________________________________________________
// //GET THE VALUES BEING SUBMITTED TO THE FORM 

// const GetForm2 = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();

//     const item = document.getElementById('item-input');
//     const priority = document.getElementById('priority-input').value;

//     if (item === '' || priority === '0')
//   //if item = nothing OR priority is 0 
// { alert('Please fill in all fields');
//     return; //its not logging because you returned
// }

//     console.log(item,priority.value);
// }

// GetForm2.addEventListener('submit', onSubmit);
// //------------------------------------------------------------

// //FORM DATA FUNCTION 

// const GetForm3 = document.getElementById('item-form');

// function onSubmit2(e) {
//     e.preventDefault();

//     const formData = new FormData(GetForm3);
    
//     const item = formData.get('item');
//     const priority = formData.get('priority');

//     console.log(item,priority);
// }

// GetForm3.addEventListener('submit', onSubmit2);

// //_____________________________________________________--

// //EVENT BUBBLING

// const button = document.querySelector('form button');
// const div = document.querySelector('div');

// button.addEventListener('click', () => {
//     alert('You are beautiful and you send hard')
//     e.stopPropagation();
// });

// div.addEventListener('click', () => {
//     alert ('You are awesome');
// });

// document.body.addEventListener('click', () => {
//     alert ('Body was clicked');
// });

//________________________________________________

 //EVENT DELIGATION 

const listItems = document.querySelectorAll ('li');
const list = document.querySelector('ul'); //this is the parent

// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove(); //removes the element
//     });
// });

//target: gives you what you click on 
//current target: gives you what the event listener is on
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});