
var tasks = [];

function addTask() {
    const taskinput = document.getElementById('tarefa')
    const taskText = taskinput.value.trim();

        if (taskText !== "") {
            tasks.push(taskText);
            taskinput.value = "";
            displayTasks();
        }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const li = document.createElement("li");
        li.innerHTML = task; 

        tasklist.appendChild(li);
    }
}