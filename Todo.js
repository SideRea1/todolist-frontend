document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length === 0) {
        alert("Please Enter a Task")
    } else {
        document.querySelector('#tasks').innerHTML
            += `
        <div class = "content">
        <div class="task">
           <span id="taskname">
           ${document.querySelector('#newtask input').value}
           </span>
           <button class="delete">
           <i class="fas fa-backspace"></i>
           </button>
           </div>
           </div>
        `;
        console.log(document.querySelector('#newtask input').value)
        addTask(document.querySelector('#newtask input').value)
    }

    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    document.querySelector("#newtask input").value = "";

}
 document.onload = async () => {
     const tasks = await getTasks()
 }