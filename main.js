import { addItem, removeItem, filterItems } from './utils.js';
const form = document.getElementById('add-form');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
const itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);

// Filter
const filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
