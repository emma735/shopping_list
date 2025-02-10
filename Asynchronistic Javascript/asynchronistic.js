// setTimeout(function () {
//     console.log('hello from callback');
// } , 2000);

// console.log('hello from global scope');


//     function ChangeText() {
//         document.querySelector('h1').textContent = 'Hello from callback';
//     }
        
//         const timerId = setTimeout(ChangeText, 3000);
        
//         document.querySelector('#cancel').addEventListener('click', () => {
//             console.log(timerId);
//             clearTimeout(timerId);
//             console.log('Timer Cancelled');
//         });
//-------------------------------------------------------------

//SET INTERVAL: 
// Repeatidly call a snippet and stop from running

// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//     console.log(a, Date.now());
// }

let intervalID;
            
 function startChange() {
  if (!intervalID) {
 intervalID = setInterval(() => {
    changeRandomColor();
    changeHeadingColor();
 }, 1000);
}
 }


// //FLASH BLACK  & WHITE ----------------------------------------
// // function changeColor() {
//     //     if (document.body.style.backgroundColor !== 'black') {
//         //         document.body.style.backgroundColor = 'black';
//         //         document.body.style.color = 'white';
//         //     } else {
//             //         document.body.style.backgroundColor = 'white';
//             //         document.body.style.color = 'black';
//             //     }
//             // }
            
// //CHANGE RANDOM COLOR-------------------------------------------------
            
 function changeRandomColor() {
const randomColor = Math.floor(Math.random() * 16777215).toString(16)
document.body.style.backgroundColor = `#${randomColor}`;
 } 

function changeHeadingColor() {
const randomColor = Math.floor(Math.random() * 16777215).toString(16)
document.getElementById('heading').style.color = `#${randomColor}`;
  }

function stopChange() {
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);


