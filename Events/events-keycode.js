//METHOD ONE

// window.addEventListener('keydown', (e) => {
//   //target the insert div
// const insert = document.getElementById('insert');

// //insert the HTML and attach it to the div called insert
// insert.innerHTML = `
// <div class="key">${e.key}<small>e.key</small> </div>
// <div class="key">${e.keyCode}<small>e.keyCode</small></div>
// <div class="key">${e.Code}<small>e.code</small></div>
// <div class="key">${e.key}</div>`
// });


//MY ATTEMPT 

  //create the div
  //create the .key
  //create the .key small 

  // listen for keydown on function(e)
  // window.addEventListener('keydown', (e) => {
   
  //   //create a div
  //   const insert = document.createElement('div'); 
  //   insert.className = 'key'; //give it a name
  //   //give it text (it will register the key pressed)
  //   insert.textContent = `${e.key}`;  // Use backticks for template literals
  //   //create a small element
  //   const small = document.createElement ('small');
  //   //give it text
  //   small.textContent = 'e.key';
  //   //attach the div and the small element
  //   insert.appendChild(small);
  //   //target the parent class in the HTML with the ID of insert
  //   const insert1 = document.getElementById('insert');
  //   //attach the parent div to the child div
  //   insert1.appendChild(insert);
  //   //remove the text from the parent div
  //   insert1.textContent = '';
  //   //attach the child div to the body
  //   document.body.appendChild(insert);

  // });

  // window.addEventListener('keydown', (e) => {
   

  //   const insert = document.createElement('div'); 
  //   insert.className = 'key'; 
  //   insert.textContent = `${e.keyCode}`;  
  //   const small = document.createElement ('small');
  //   small.textContent = 'e.keyCode';
  //   insert.appendChild(small);
  //   const insert1 = document.getElementById('insert');
  //   insert1.appendChild(insert);
  //   insert1.textContent = '';
  //   document.body.appendChild(insert);
  // });

  // window.addEventListener('keydown', (e) => {
  //   const insert = document.createElement('div'); 
  //   insert.className = 'key'; 
  //   insert.textContent = `${e.code}`;  
  //   const small = document.createElement ('small');
  //   small.textContent = 'e.code';
  //   insert.appendChild(small);
  //   const insert1 = document.getElementById('insert');
  //   insert1.appendChild(insert);
  //   insert1.textContent = '';
  //   document.body.appendChild(insert);
  // });
// _____________________________________________________________________
// 

//SHORTENED VERSION ACCORDING TO CHAT GPT
// window.addEventListener('keydown', function(event) {
//   const KeyData = [
//     {label: 'e.key' , value: e.key }, //label = display purpose
//     {label: 'e.keyCode' , value: e.keyCode }, //value = event holder
//     {label: 'e.key' , value: e.code },
//   ];

//   const insert1 = this.document.getElementById('insert');
//   //select parent div insert
//   insert1.textContent = ''; //replace text with nothing

//   KeyData.forEach(data => {
//     const insert = this.document.createElement('div');
//     insert.className = 'key';
//     insert.textContent = data.value;

//     const small = this.document.createElement('small');
//     small.textContent = data.label;

//     insert.appendChild(small);
//     insert1.appendChild(insert);
//   })
// })

//-------------------------------------------------------------------

//ANSWER 
function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = ''; //this clear it after each KEY DOWN

  const keyCodes = { //this creates an object
    'e.key' : e.key === ' ' ? 'Space' : e.key, 
    'e.keyCode': e.keyCode, //this stores e.keyCoe inside KeyCodes
    'e.code': e.code //stores it inside
  };

  for(let key in keyCodes) { //for-in loop {repeats block of code}
    const div = document.createElement('div'); //create the div
    div.className = 'key'; //name it
    const small = document.createElement('small');//create another div

    const keyText = document.createTextNode(key); 
    //creates text noe containing the value of key
    const valueText = document.createTextNode(keyCodes[key]);
    //creates text note the value of keycodes
    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }

  console.log(keyCodes);
}

window.addEventListener('keydown', showKeyCodes);













// window.addEventListener('keydown', (e) => {

//     const insert = createElement('div');
//     const key = createElement()
// })

//CLEAN & PERFORMANT - (CREATE ELEMENTS)

// createNewItem('Cheese');                            //create item
//     function createNewItem (item) {                 //target item              
//     const li = document.createElement ('li');        //create a list
//     li.appendChild(document.createTextNode(item));    //add a TextNode(item = the text) to list

//     const button = createButton ('remove-item btn-link text-red'); //create the classes on button 
//     const icon = document.createElement('i');        //create icon 
//     icon.className = 'fa-solid fa-xmark';           //create classes on icon 
//     button.appendChild(icon);                        //add the icon to the button?
//     li.appendChild(button);                          //add the button to the list? 

//     document.querySelector('.items').appendChild(li);  //add everything to the DOM }

//     }


//the HTML 
/*  <div id="insert">
      <!-- Press and key to get the keycode -->
        <div class="key">
          s
          <small>e.key</small>
        </div>

        <div class="key">
          83
          <small>e.keyCode</small>
        </div>

        <div class="key">
          KeyS
          <small>e.code</small>
        </div>
      </div>*/
//-----------------------------------------------------------------------



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

//     const PressandKey = document.querySelector('#insert');
//     const Sentence= insert.querySelector('#key');

//   Sentence.addEventListener('click', function KeyBlock(Key) {
//             const Letter = document.createElement('div');
//             Letter.classList.add('key')
//             Letter.innerHTML = 
//             `${Key}
//                   <small>e.key</small>`
//                 });
//                 document.body.appendChild(Letter); 
//                 KeyBlock('S');
        
        
    


//shorthand
// clearBtn.addEventListener('click', () => alert('Clear Items'));





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

// createNewItem('Cheese');                            //create item
//     function createNewItem (item) {                 //target item              
//     const li = document.createElement ('li');        //create a list
//     li.appendChild(document.createTextNode(item));    //add a TextNode(item = the text) to list

//     const button = createButton ('remove-item btn-link text-red'); //create the classes on button 
//     const icon = document.createElement('i');        //create icon 
//     icon.className = 'fa-solid fa-xmark';           //create classes on icon 
//     button.appendChild(icon);                        //add the icon to the button?
//     li.appendChild(button);                          //add the button to the list? 

//     document.querySelector('.items').appendChild(li);  //add everything to the DOM }

//     }
