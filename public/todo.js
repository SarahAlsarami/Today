// Create a "close" button and append it to each list item
document.getElementById("Addbtn").addEventListener("click", NewTask);

var count= 0;



// Create a new list item when clicking on the "Add" button
function NewTask(e) {
    e.preventDefault();
    var task = "task"+count;

    var inputValue = document.getElementById("myInput").value;
    // Get a reference to the parent element
const parentElement = document.getElementById('myList');

// Create a new list item element
const listItemElement = document.createElement('li');
listItemElement.setAttribute('id', task+"li");
listItemElement.setAttribute('class', 'list-group-item d-flex align-items-center border-0 mb2 rounded');
listItemElement.style.backgroundColor = '#f4f6f7';
listItemElement.style.padding = '15px';
listItemElement.style.paddingLeft = '20px';

// Create a new checkbox input element
const checkboxElement = document.createElement('input');
checkboxElement.setAttribute('type', 'checkbox');
checkboxElement.setAttribute('id', task);
checkboxElement.setAttribute('name', 'checkbox');
checkboxElement.addEventListener('change', function(event) {
  Complete(this, event);
});

// Create a new label element
const labelElement = document.createElement('label');
labelElement.setAttribute('for', task);
labelElement.textContent = inputValue;

// Create a new trash icon element
const trashIconElement = document.createElement('i');
trashIconElement.setAttribute('class', 'bi bi-trash');
trashIconElement.setAttribute('style', 'color: rgb(167, 7, 7); position: absolute; right: 20px;');
trashIconElement.addEventListener('click', function(event) {
  RemoveTask(event);
});

// Append the checkbox input element, label element, and trash icon element as children of the list item element
listItemElement.appendChild(checkboxElement);
listItemElement.appendChild(labelElement);
listItemElement.appendChild(trashIconElement);

// Append the list item element as a child of the parent element
    // var li = document.createElement("li");
    // li.setAttribute("class","list-group-item d-flex align-items-center border-0 mb-2 rounded");
    // li.setAttribute("style","background-color: #f4f6f7; padding: 15px; padding-left: 20px ;");

    // var task = "task"+count;

    // //ADDing to database
    // var inp = document.createElement("input");
    // inp.setAttribute("type","checkbox");
    // inp.setAttribute("id",task);
    // inp.setAttribute("onchange","Complete(this,event)");

    // var labe = document.createElement("label");
    // labe.setAttribute("for",task);
    // labe.innerHTML= inputValue;

    // var trash = document.createElement("i");
    // trash.setAttribute("class","bi bi-trash");
    // trash.setAttribute("onclick","RemoveTask(event)")
    // trash.setAttribute("style","color: rgb(167, 7, 7); position: absolute;right: 20px;");

    // li.appendChild(inp);
    // li.appendChild(labe);
    // li.appendChild(trash);




    //li.innerHTML = '<input type="checkbox" id="'+task+'" onchange="Complete(this,event)"><label for="'+task+'">'+inputValue+'</label><i class="bi bi-trash" onclick="RemoveTask(event)" style="color: rgb(167, 7, 7); position: absolute;right: 20px;"></i>';

    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(listItemElement);
    }
    document.getElementById("myInput").value = "";
}

// function Complete(checkboxElem, event) {
//     //Mark as a completed in DB

//     const item = event.target.parentNode;
//     const parent = item.getAttribute('id');
//     if (checkboxElem.checked) {
//         const completedul = document.getElementById("completed");
//         completedul.appendChild(document.getElementById(item));
//       } 
    
//   }
function Complete(checkbox) {
    if (checkbox.checked) {
      // Get a reference to the parentunordered list and the target unordered list
      const parentList = checkbox.parentNode.parentNode;
      const targetList = document.getElementById('completed');
      
      // Clone the list item element and remove the original
      const listItem = checkbox.parentNode.cloneNode(true);
      checkbox.parentNode.remove();
      
      // Append the cloned list item element to the target list

      targetList.appendChild(listItem);
      const checkitem = listItem.querySelector('input[name="checkbox"]')
      checkitem.checked = true;
      checkitem.removeAttribute('onchange');


    }
  }

function RemoveTask(event){
    //Delete form DB

    var item = event.target.parentElement.id;
    var removed = document.getElementById(item);
    removed.remove();

}
