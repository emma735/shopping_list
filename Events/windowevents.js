//WINDOW EVENTS

//1. On Load: this wait for the entire page to load before triggering the javascript
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// };

//another way to do it
// window.addEventListener('load',() => document.querySelector('h1').
// textContent = 'Hello World');

window.addEventListener('load', () => console.log('Page Loaded'));
window.addEventListener('DOMContentLoaded', () => 
console.log('DOM Loaded'));
console.log('Run me');

//DEFER           - if you fancy your js script tag in the head
//<script src = "javascript.js" defer></script>


//RESIZING THE WINDOW 
window.addEventListener('resize', () => { 
    document.querySelector('h1').innerText = `Resized to ${window.innerHeight} x ${window.innerWidth}`;
});

//SCROLLING 
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
} );

//SCROLLING 2
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

if (window.scrollY > 70) //if the scroll hits 70
 { document.body.style.backgroundColor = 'black'; //turn the background black
  document.body.style.color = 'white'; //and the text white
} else { //but if it doesn't
document.body.style.backgroundColor = 'white'; //turn it back to white
document.body.style.color = 'black'; //turn text back to black
}
} );

//FOCUS & BLUR (when you click in & when you click out)
//-click a paragraph to turn it blue! 

window.addEventListener('focus', () => {
//when you click in 
    document.querySelectorAll('p').forEach(p => {
//select all paragraphs and for each one 
    p.style.color = 'blue';
//and set it to blue
    });
});
 //click outside the window to turn the words black! 
window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';
});
});