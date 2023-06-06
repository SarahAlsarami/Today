
document.getElementById("Addbtn").addEventListener("click", taskfromhome);
function taskfromhome(){
  alert("{{message}}"); 
}


var progress = "10%";
function start() {
  var name = document.getElementById("name");
  fetch("user.txt")
    .then(response => response.text())
    .then(fileContent => {
      const lines = fileContent.split('\n');
      const userName = lines[0].trim();

      name.innerHTML = userName;
    });
 
}

//var Count=0;
//function createtask(){
  //var mytask=document.getElementById("myInput")
  //const newtask=document.createElement('li')
  //newtask.innerHTML=mytask.value;
  //newtask.id="task"+Count;
  //Count++;
  //const list=document.getElementById('alltask');
  //list.appendChild(newtask);
  //mytask.value="";
//}

window.addEventListener("load", start, false);

