// Add new item to list
export const addItem = (e) => {
  // Prevent default
  e.preventDefault();
  // Get input value
  const input = document.getElementById('item-input');
  if (input.value.length > 0) {
    // Create a new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // Add text node with  input value
    li.appendChild(document.createTextNode(input.value));
    // Create delete button element
    const deleteButton = document.createElement('button');
    // Add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    // Create text node
    deleteButton.appendChild(document.createTextNode('X'));
    // Append button to the li
    li.appendChild(deleteButton);
    // Append li to ul
    const itemList = document.getElementById('items');
    itemList.appendChild(li);
    // Reset input
    input.value = '';
  }
};

// Remove from list
export const removeItem = (e) => {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement;
      console.log(li);
      li.parentElement.removeChild(li);
    }
  }
};

// Filter items by search
export const filterItems = (e) => {
  // Convert to lower text
  const text = e.target.value.toLowerCase();
  // Get list li's
  const itemList = document.getElementById('items');
  const items = itemList.getElementsByTagName('li');
  // Convert collection to array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};
