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
var input = document.querySelector('input');
input.value = 'Hello World';

// QUERYSELECTORALL //
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i <odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}


