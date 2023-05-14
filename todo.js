// Create a "close" button and append it to each list item
document.getElementById("Addbtn").addEventListener("click", NewTask);

var count= 0;



// Create a new list item when clicking on the "Add" button
function NewTask(e) {
    e.preventDefault();
    var li = document.createElement("li");
    li.setAttribute("class","list-group-item d-flex align-items-center border-0 mb-2 rounded");
    li.setAttribute("style","background-color: #f4f6f7; padding: 15px; padding-left: 20px ;");
    //ADDing to database

    var inputValue = document.getElementById("myInput").value;
    var task = "task"+count;
    li.innerHTML = '<input type="checkbox" id="'+task+'" onchange="Complete(this,event)"><label for="'+task+'">'+inputValue+'</label><i class="bi bi-trash" onclick="RemoveTask(event)" style="color: rgb(167, 7, 7); position: absolute;right: 20px;"></i>';

    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}

function Complete(checkboxElem, event) {
    //Mark as a completed in DB

    var item = event.target.parentElement.id;
    if (checkboxElem.checked) {
        var completedul = document.getElementById("completed");
        completedul.appendChild(document.getElementById(item));
      } 
    
  }

function RemoveTask(event){
    //Delete form DB

    var item = event.target.parentElement.id;
    var removed = document.getElementById(item);
    removed.remove();

}
