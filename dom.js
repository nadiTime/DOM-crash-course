//Examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'Hola';
// console.log(document.title);

//GET element by ID
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const mainHeader = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'nadiTime';
// headerTitle.innerText = 'Aragorn';
// headerTitle.innerHTML += '<h3>Blat</h3>';
// mainHeader.style.borderBottom = 'solid 3px black';

//GET elements by class name, no array methods

// const listItems = document.getElementsByClassName('list-group-item');
// console.log(listItems[0]);
// listItems[1].textContent = 'hello';
// listItems[2].style.fontWeight = 'bold';
// listItems[3].style.backgroundColor = 'yellow';

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = '#f4f4f4';
// }

//GEt  elements by tag name no array methods

// const listItems = document.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = '#ccc';
//   listItems[i].style.fontWeight = 'bold';
//   listItems[i].textContent = `Nadi item number ${i + 1}`;
// }
// let x = 0;
// let directionUp = true;

//QUERY selector

// const header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');

// input.value = 'hello world';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'PAY NOW';

// const item = document.querySelector('.list-group-item');
// const lastItem = document.querySelector('.list-group-item:last-child');
// item.style.color = 'red';
// lastItem.style.color = 'blue';

//QUERY selector all, array functions

// const titles = document.querySelectorAll('.title');
// titles.forEach((element) => {
//   element.style.backgroundColor = 'pink';
// });

// TRAVERSING the DOM

const itemList = document.querySelector('#items');
//Parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = 'red';

//Parent element /  same as parent node

// console.log(itemList.parentElement);

//Child nodes / Nodes list - an array / Not recommended

// console.log(itemList.childNodes);

//children / not a node list
// console.log(itemList.children);

//First child // like child node gives us the white space / kind of useless
// console.log(itemList.firstChild);

//first element child / actual li

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

//Last child // like child node gives us the white space / kind of useless
// console.log(itemList.lastChild);

//last element child / actual li

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';

// Siblings

//next sibling / text node
// console.log(itemList.nextSibling);

// next element sibling
// console.log(itemList.nextElementSibling);

// prev sibling - text node
// console.log(itemList.previousSibling);

//prev element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// Create dom elements

//Create element
//Create a div

// const newDiv = document.createElement('div');
// //add class
// newDiv.className = 'hello';
// //add ID
// newDiv.id = 'hello1';
// //add attr
// newDiv.setAttribute('title', 'hello world');
// //create a text node
// const newDivText = document.createTextNode('nadi time is upon us');
// //add  text to dov
// newDiv.appendChild(newDivText);

// //append to html

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';

// console.log(newDiv);

//EVENTS!!!!!
//Best practice for adding an event

// const buttonClick = (e) => {
// console.log(123);
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// event object
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// const output = document.getElementById('output');
// output.innerHTML = `<h3>${e.target.id}</h3>`;
// console.log(e.type);
// console.log('X', e.clientX);
// console.log('Y', e.clientY);
// console.log('X', e.offsetX);
// console.log('Y', e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);

// };
// const button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);
// const output = document.getElementById('output');
// const runEvent = (e) => {
//   e.preventDefault();
//   console.log(`Event type: ${e.type}`);
//   // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`;
//   // output.innerHTML = `<h3>Mouse X: ${e.offsetX}</h3><h3>Mouse Y: ${e.offsetY}</h3>`;
//   // e.target.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
//   // e.target.style.borderRadius = `${e.offsetX}px`;
// };

//Select elements
// const button = document.getElementById('button');
// const box = document.getElementById('box');
// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector('form');
// const select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent); //for any inner elements
// box.addEventListener('mouseout', runEvent); // for any inner elements
// box.addEventListener('mousemove', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);
