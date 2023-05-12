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

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

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
    // var labe = document.createTextNode(inputValue);
    // li.appendChild(labe);
    // let task = "task"+count;
    // let inp = document.createElement("input");
    // inp.setAttribute("type","checkbox");
    // inp.setAttribute("id",task);
    // li.appendChild(inp);

    // var labe = document.createElement("label");
    // labe.setAttribute("for",task);
    // labe.innerHTML(inputValue);
    // li.appendChild(inp);
    
    // var ic = document.createElement("i");
    // ic.setAttribute("class","bi bi-trash");
    // li.appendChild(ic);
    // count++;
    li.innerHTML('<input type="checkbox" id="${box-1}"> <label for="box-1">Sustainable typewriter cronut</label> <i class="bi bi-trash" style="color: rgb(167, 7, 7); position: absolute;right: 20px;"></i>');
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}
/*   
<input type="checkbox" id="box-1">
                        <label for="box-1">Sustainable typewriter cronut</label>
                        <i class="bi bi-trash" style="color: rgb(167, 7, 7); position: absolute;right: 20px;"></i>



*/
