// Examining the document object //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;     -- Can change elements in the document
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.forms);
// console.log(document.links);



// GETELEMENTBYID //
// console.log(document.getElementById('random_form'));
// var mainCol = document.getElementById('random_form');
// var header = document.getElementById('main-header');
// mainCol.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';
//header.innerHTML = '<h3>Hello</h3>';


// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello: Item 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'red';

// for (var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello: Item 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'red';

// for (var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'white';
// }

// QUERYSELECTOR //
// var input = document.querySelector('input');
// input.value = 'Hello World';

// // QUERYSELECTORALL //
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i <odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Traversing the DOM //
var itemList = document.querySelector('#miscthings');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// //childNodes
// console.log(itemList.childNodes);


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style. backgroundColor = 'red';

// //FirstChild
// console.log(itemList.firstChild); //gives #text (usually kind of useless)
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello there friend';


// //nextSibling
// console.log(itemList.nextSibling)
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);

// createElement

//Creating a div
var newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello-friend';
newDiv.setAttribute('title', 'Hello div');

var newDivText = document.createTextNode('Some Text for the div');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv, h1);
