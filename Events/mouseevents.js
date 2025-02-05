// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => {
//     // document.body.style.backgroundColor = 'purple';
//     if(document.body.style.backgroundColor !== 'purple') {
//         document.body.style.backgroundColor = 'purple';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }};

// const onRightClick = () => console.log('right click event');

// const onMouseDown = () => console.log('mouse down event');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDrag = () => console.log('drag event');

// //EVENT LISTENERS
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('drag', onDrag);

//----------------------THE EVENT OBJECT--------------------------------------------

// const logo = document.querySelector('img');

// logo.addEventListener('click', function(event) {
//     console.log(event.target); //simg src = "note2.png" alt>
//     console.log(event.type);
// })



//     const logo = document.querySelector('img');
//     logo.addEventListener('click', onClick);


// function onClick(e) {
//     console.log(e.type);
// }

/*target - the element that triggered the event
current target - the element that the listener is attached to 
type - type of event
timestamp
clientX - x position of mouse relative to window
clientY - y position
offset x 
offset y - position relative to element
page x
page y - position relative to page
screen x
screen y - position relative to screen
*/

//--------------------------KEYBOARD EVENTS-----------------------------
//when we type in the 'input' box, we want to detect these events

//bring in the input
const itemInput = document.getElementById('item-input');

const onKeyUp = e => { 
    // console.log('keypress');
    console.log('keyup');

//KEY
console.log(e.key);
document.querySelector('h1').innerText = e.key;

// if (e.key === 'Enter') {
//     alert('You pressed enter');
// }

//KEYCODE
if (e.keyCode === 13) {
    alert ('You pressed enter');
}

//CODE
if (e.code === 'Digit1') {
    console.log('You pressed 1');
}
 
if (e.repeat) {
    console.log('You are holding down' + e.key);
} 

console.log('Shift:' + e.shiftKey); //if you hold down shift = true
console.log('Control' + e.ctrlKey);

if (e.shiftKey && e.key === k)
    // console.log('keydown');
};

// itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);


