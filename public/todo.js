// Create a "close" button and append it to each list item
document.getElementById("Addbtn").addEventListener("click", NewTask);

var count = 0;



// Create a new list item when clicking on the "Add" button
function NewTask(e) {
  e.preventDefault();
  var task = "task" + count;

  var inputValue = document.getElementById("myInput").value;
  // Get a reference to the parent element
  const parentElement = document.getElementById('myUL');

  // Create a new list item element
  const listItemElement = document.createElement('li');
  listItemElement.setAttribute('id', task + "li");
  listItemElement.setAttribute('class', 'list-group-item d-flex align-items-center border-0 mb2 rounded');
  listItemElement.style.backgroundColor = '#f4f6f7';
  listItemElement.style.padding = '15px';
  listItemElement.style.paddingLeft = '20px';

  // Create a new checkbox input element
  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.setAttribute('id', task);
  checkboxElement.setAttribute('name', 'checkbox');
  checkboxElement.addEventListener('change', function (event) {
    Complete(this);
  });

  // Create a new label element
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', task);
  labelElement.textContent = inputValue;

  // Create a new trash icon element
  const trashIconElement = document.createElement('i');
  trashIconElement.setAttribute('class', 'bi bi-trash');
  trashIconElement.setAttribute('style', 'color: rgb(167, 7, 7); position: absolute; right: 20px;');
  trashIconElement.addEventListener('click', function (event) {
    RemoveTask(this);
  });

  // Append the checkbox input element, label element, and trash icon element as children of the list item element
  listItemElement.appendChild(checkboxElement);
  listItemElement.appendChild(labelElement);
  listItemElement.appendChild(trashIconElement);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(listItemElement);
  }
  document.getElementById("myInput").value = "";
}


function Complete(checkbox) {
  if (checkbox.checked) {
    // Get a reference to the parentunordered list and the target unordered list
    const parentList = checkbox.parentNode.parentNode;
    const targetList = document.getElementById('completed');

    // Clone the list item element and remove the original
    const listItem = checkbox.parentNode.cloneNode(true);
    checkbox.parentNode.remove();

    // Append the cloned list item element to the target list
    listItem.querySelector('input[name="checkbox"]').removeAttribute('onchange');
    listItem.querySelector('input[name="checkbox"]').checked = true;
    listItem.removeChild(listItem.children[2]);
    targetList.appendChild(listItem);


  }
}

function RemoveTask(trashButton) {
    // Get a reference to the parent list item element
    const listItem = trashButton.closest('li');
    
    // Check if the listItem parameter is a valid DOM element
    if (listItem instanceof Node) {
      // Get a reference to the parent list element
      const list = listItem.parentNode;
    
      // Remove the list item element
      list.removeChild(listItem);
    }
  }
