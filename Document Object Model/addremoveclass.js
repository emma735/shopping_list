

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
// console.log(itemList.className);  // Logs the class name of the item-list element
// text.className = 'dark';

//classList
// console.log(itemList.classList);

itemList.classList.forEach((c) => console.log(c));

// text.classList.add('dark');
// text.classList.remove('card');

//----------toggle on and off with button clicking---------------
text.classList.toggle('dark');

text.classList.replace('card', 'dark');

//change the style directly
// itemList.style.lineHeight = '3';

items.forEach((item, index)=> {
    item.style.color = 'red';

if (index === 2) {
    item.style.color = 'blue';
}
});
}

 document.querySelector('button').onclick = run;