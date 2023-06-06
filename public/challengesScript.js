function start(){
    
    var name = document.getElementById("name");
    fetch("user.txt")
    .then(response => response.text())
    .then(fileContent => {
    const lines = fileContent.split('\n');
    const userName = lines[0].trim();

    name.innerHTML = userName;
  })

    createBtn = document.getElementById("createBtn");
    createBtn.addEventListener("click",create , false);
    JoinBtn = document.getElementById("joinBtn");
    JoinBtn.addEventListener("click",join , false);
 

}

function create(){
    
    var name = window.prompt("Enter the Challenge Name");
    var endDate = window.prompt("Enter the Challenge End Date (YYYY-MM-DD)");
    var task = window.prompt("Enter the Challenge Task as a list");
    var users = window.prompt("Enter the Challenge Users as a list");

    var userslist = users.split(",");
    var taskslist = task.split(",");

  // Create a Date object for the end date
var endDateTime = new Date(endDate);

// Get the current date and time
var currentDateTime = new Date();

// Calculate the difference in milliseconds between the end date and current date
var timeDiff = endDateTime.getTime() - currentDateTime.getTime();
// Calculate the number of days left by dividing the time difference by the number of milliseconds in a day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
var daysLeft = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

    var tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML += "<div id=" + id + " class='card Task'></div>";
    var task = document.getElementById(id);

    task.innerHTML = `
<div id='body' class='card-body'>
    <table>
        <tbody>
            <tr>
                <td>${name}</td>
                <td rowspan="3" class='BarM'>
                    <div id ='progress${id}'>
                    <span class='progressVal counter'>${daysLeft} days left</span>
                    <span class='progressVal'>10%</span>
                        <div class='barOverflow' id='progressBar${id}'>
                            <div class='bar' id='bar${id}' role='progressbar'></div>
              
                        </div>
                
                    </div>
                   
                </td>
            </tr>
            <tr>
                <td colspan="2">Challenge Members:</td>
            </tr>
            <tr>
                <td>
                    <ul id='usersLIST'>
                        ${userslist.map(user => `<li>${user}</li>`).join('')}
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Tasks:</td>
            </tr>
            <tr>
                <td>
                    <ol id='tasksLIST'>
                        ${taskslist.map(task => `<li id = "TaskItem">${task}</li>`).join('')}
                    </ol>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class='progress-bg'>
                        <div class='progress' id='pb-parent' style='color: blue;'>
                            <div class='progress-bar' id='p1' role='progressbar' style='width:30%' aria-valuemin='0' aria-valuemax='100'>
                                <img class='rounded-circle users' src='../pics/blank.jpg' alt=''>
                            </div>
                            <div class='progress-bar' id='p2' role='progressbar' style='width:50%' aria-valuemin='0' aria-valuemax='100'>
                                <img class='rounded-circle users' src='../Pics/day.jpeg' alt=''>
                            </div>
                            <div class='progress-bar' id='p3' role='progressbar' style='width:20%' aria-valuemin='0' aria-valuemax='100'>
                                <img class='rounded-circle users' src='../Pics/cool.jpg' alt=''>
                            </div>
                        </div>
                    </div>
                    <p class='finish'>&#127942;</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>`;
    
    
    id++;
    
   

//     var registrationForm = document.querySelector(".Create-form");
//     registrationForm.style.display = "block";
    
//     var container = document.querySelector(".container-fluid");
//     container.style.filter = "blur(10px)";
    
//     document.querySelector(".close").addEventListener("click", function () {
//         registrationForm.style.display = "none";
//         container.style.filter = "blur(0px)";
//         });
//     document.querySelector(".challenge-name").addEventListener("change", function () {
//       if (this.value) {
      
//         document.querySelector(".icon-paper-plane").classList.add("next");
//       } else {
//         document.querySelector(".icon-paper-plane").classList.remove("next");
//       }
//     });
    
//     document.querySelector(".next-button.challenge-name").addEventListener("click", function () {
//       console.log("Something");
//       document.querySelector(".challenge-name-section").classList.add("fold-up");
//       document.querySelector(".end-date-section").classList.remove("folded");
//     });
    
//     document.querySelector(".end-date").addEventListener("change", function () {
//       if (this.value) {
//         document.querySelector(".icon-lock").classList.add("next");
//       } else {
//         document.querySelector(".icon-lock").classList.remove("next");
//       }
//     });
    
//     document.querySelector(".next-button.end-date").addEventListener("click", function () {
//       document.querySelector(".end-date-section").classList.add("fold-up");
//       document.querySelector(".tasks-section").classList.remove("folded");
//     });
    
//     document.querySelector(".tasks").addEventListener("change", function () {
//       if (this.value) {
//         document.querySelector(".icon-repeat-lock").classList.add("next");
//       } else {
//         document.querySelector(".icon-repeat-lock").classList.remove("next");
//       }
//     });
    
//     document.querySelector(".add-task-button").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form submission

//         var taskInput = document.querySelector(".task-input");
//         var task = taskInput.value.trim();
      
//         if (task !== "") {
//           var listItem = document.createElement("li");
//           listItem.textContent = task;
      
//           var taskList = document.querySelector(".task-list");
//           taskList.appendChild(listItem);
      
//           taskInput.value = "";
//         }
//       });
      
    
//     document.querySelectorAll(".next-button").forEach(function (button) {
//       button.addEventListener("mouseover", function () {
//         this.style.cursor = "pointer";
//       });
//     });
    
}
function join() {
    
    var join_Form = document.querySelector(".Join-form");
    join_Form.style.display = "block";
  
    var container = document.querySelector(".container-fluid");
    container.style.filter = "blur(10px)";
  
    document.querySelector(".closeJoin").addEventListener("click", function () {
        
        join_Form.style.display = "none";
      container.style.filter = "blur(0px)";
    });

    var joinForm = document.getElementById("joinForm");
    joinForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        var joinCode = document.querySelector(".join-code");
        var code = joinCode.value.trim();
        if (code !== "") {
            console.log(joinCode.value);
        }});
  

  }
  
var id = 0;
function done(event){
    if(event.target.id == "TaskItem"){
        event.target.style.textDecoration = "line-through";
    

    if(isallTasksDone()){
        alert("Congrats, you have completed all the tasks");
        const Confettiful = function(el) {
            this.el = el;
            this.containerEl = null;
            
            this.confettiFrequency = 3;
            this.confettiColors = ['#EE708E', '#56AFD1', '#7F3F98'];
            this.confettiAnimations = ['slow', 'medium', 'fast'];
            
            this._setupElements();
            this._renderConfetti();
          };
          
          Confettiful.prototype._setupElements = function() {
            const containerEl = document.createElement('div');
            const elPosition = this.el.style.position;
            
            if (elPosition !== 'relative' || elPosition !== 'absolute') {
              this.el.style.position = 'relative';
            }
            
            containerEl.classList.add('confetti-container');
            
            this.el.appendChild(containerEl);
            
            this.containerEl = containerEl;
          };
          
          Confettiful.prototype._renderConfetti = function() {
            this.confettiInterval = setInterval(() => {
              const confettiEl = document.createElement('div');
              const confettiSizeHeight = (Math.floor(Math.random() * 3) + 7) + 'px';
              const confettiSizeWidth = (Math.floor(Math.random() * 3) + 15) + 'px';
              const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
              const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
              const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
              
              confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
              confettiEl.style.left = confettiLeft;
              confettiEl.style.width = confettiSizeWidth;
              confettiEl.style.height = confettiSizeHeight;
              confettiEl.style.backgroundColor = confettiBackground;
              
              confettiEl.removeTimeout = setTimeout(function() {
                confettiEl.parentNode.removeChild(confettiEl);
              }, 3000);
              
              this.containerEl.appendChild(confettiEl);
            }, 25);
          };
          
          window.confettiful = new Confettiful(document.querySelector('.js-container'));
          
        }
          
    }

}

function isallTasksDone(){
    var tasks = document.getElementById("TaskItem");
    var task = tasks.children;
    for(var i = 0; i < task.length; i++){
            if(task[i].style.textDecoration != "line-through"){
                return false;
            }
        
    }
    return true;

}

window.addEventListener("load", start, false);
document.addEventListener("click",done,false);
