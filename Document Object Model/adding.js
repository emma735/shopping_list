const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
    //className 
    // console.log(itemList.className);
    // text.className = 'card dark';

    // //classList
    // console.log(itemList.classList);
    itemList.classList.forEach((c) => console.log(c));
    // text.classList.add('dark');
    // text.classList.remove('card'); --make it black or white
    // text.classList.toggle('hidden'); --make it disappear 
    // text.classList.replace('card', 'dark');
    //change the style
    // itemList.style.lineHeight = '3';

    //change something in all the list items
    items.forEach((item,index) => {
        item.style.color = 'red';

        if (index ===2) {
            item.style.
        }
    })
}

document.querySelector('button').onclick = run ;