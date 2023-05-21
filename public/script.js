import Task from './Task.js';
var tasks = {};

function fillTasks() {
console.log("fillTasks");
tasks[0] = new Task("Task 1", "Description 1", ["User 1", "User 2"]);
tasks[1] = new Task("Task 2", "Description 2", ["User 1", "User 2"]);

    
  
}

var progress = "10%";
function start() {
    console.log("start");
    fillTasks();
   for(var i = 0; i < 2; i++){
         AddTask();
    }}

var id = 0;
function AddTask() {
    var tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML += "<div id=" + id + " class='card mb-3 Task'></div>";
    var task = document.getElementById(id);
  
    task.innerHTML = "<div id='body' class='card-body'><div id='row' class='row'><div id='challenge" + id + "' class='col-md-5'></div><div id='progress"+id+"' class='col-md-7 row'></div></div></div>";
    var challenge = document.getElementById("challenge" + id);
    challenge.innerHTML = "<h5 class='card-title'>" + tasks[id].title + "</h5><p class='card-text'>" + tasks[id].description + "</p><p class='card-text'>Challenge Members:</p><p class='card-text'>" + tasks[id].Users + "</p>";
    var progress = document.getElementById("progress" + id);
    progress.innerHTML = "<div id='progressBar" + id + "' class='barOverflow'> <div id= 'bar"+id+"' class = 'bar'></div><span class = 'progressVal'>"+10+"%</span> <span class='progressVal counter'>5 days left</span></div>";
    id++;
  }
  
window.addEventListener("load", start, false);
