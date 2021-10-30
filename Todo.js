document.querySelector('#push').onclick = function () {
    const value = document.querySelector('#newtask input').value
    if (value === 0) {
        alert("Please Enter a Task")
    } else {
        document.querySelector('#tasks').innerHTML
            += `
        <div class = "content">
        <div class="task">
           <span id="taskname">
           ${value}
           </span>
           <button class="delete">
           <i class="fas fa-backspace"></i>
           </button>
           </div>
           </div>
        `; 
        addTask(value)
    }
}


let current_tasks = document.querySelectorAll(".delete");
for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
        this.parentNode.remove();
        // document.querySelector("#newtask input").value = "";
    }
}