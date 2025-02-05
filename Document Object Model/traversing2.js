// let output;
// const parent = document.querySelector('.parent');
// output = parent.childNodes;
// console.log(output);

//THE HTML                                  NODELIST LOG
{/* <div class="parent">                    
<!-- Children -->                       0: text   1: comment
<div class="child">Child 1</div>        2: text   3: div.child
<div class="child">Child 2</div>
<div class="child">Child 3</div>
</div> */}

//_______________________________________________________________

let output;
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[1].textContent;
output = parent.childNodes[1].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[3].innerText = 'Child One';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

//Parent Nodes

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';

//siblings

const secondItem = document.querySelector('.child:nth-child(2)');
output  = secondItem.nextSibling;

console.log(output);

