// Create a "close" button and append it to each list item
document.getElementById("Addbtn").addEventListener("click", NewTask);

var count= 0;
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     span.setAttribute("style","padding-left:120px;")
//     myNodelist[i].appendChild(span);
// }


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function NewTask(e) {
    e.preventDefault();
    var li = document.createElement("li");
    li.setAttribute("class","list-group-item d-flex align-items-center border-0 mb-2 rounded");
    li.setAttribute("style","background-color: #f4f6f7; padding: 15px; padding-left: 20px ;");

    var inputValue = document.getElementById("myInput").value;
    var task = "task"+count;
    li.innerHTML = '<input type="checkbox" id="'+task+'"><label for="'+task+'">'+inputValue+'</label><i class="bi bi-trash" style="color: rgb(167, 7, 7); position: absolute;right: 20px;"></i>';

    //ADDing to database
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}

function Complete() {
    // Get the checkbox
    var checkBox = document.getElementById("box-1");
    // Get the output text
    var completedul = document.getElementById("completed");
    completedul.appendChild(checkBox);
  }
