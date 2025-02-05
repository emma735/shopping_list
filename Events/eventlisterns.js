
// const clearBtn = document.querySelector('#clear');
// const itemList = document.querySelector('ul');


// clearBtn.addEventListener('click', function() {
//     const items = itemList.querySelectorAll('li');
//     items.forEach(function(item) {
//         item.remove();
// });
// });

//Javascript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Items');
// }

//ADD EVENT LISTENER
// clearBtn.addEventListener('click', function () {
//     alert('Clear Items');
// });

//shorthand
// clearBtn.addEventListener('click', () => alert('Clear Items'));


//TWO EVENT LISTERNS

// clearBtn.addEventListener('click', function () {
//     alert('Clear Items');
// });

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click',onClear),5000);
//the event listener is removed after the timeout, of 5 seconds

//CHALLENGE------CLEAR THE ITEMS ON THE CLICK
//one method
// const clearBtn = document.querySelector('.btn-clear');

// function onClear() {
//     const itemList = document.querySelector('ul');

//     itemList.innerHTML = '';
// }

// clearBtn.addEventListener('click', onClear);

//_________________________________________________________-

// const clearBtn = document.querySelector('.btn-clear');

// function onClear() {
//     const itemList = document.querySelector('ul');
//     const items = itemList.querySelectorAll('li');

//     items.forEach((item) => item.remove()); }

// clearBtn.addEventListener('click', onClear);

//___________________________________________________

// const clearBtn = document.querySelector('#clear');

// function onClear() {
//     const itemList = document.querySelector('ul');
//     const item = itemList.querySelectorAll('li');

//     while (itemList.firstChild) {
//         itemList.removeChild(itemList.firstChild);
//     }
// }

// clearBtn.addEventListener('click', onClear);
