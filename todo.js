let tasks = [];

function addTask() {
    let inputTask = document.getElementById("name").value;
    let inputPriority = Number(document.getElementById("priority").value);

    if (!inputTask || isNaN(inputPriority)) {
        alert("Please enter valid task and priority.");
        return;
    }

    
    tasks.push({ task: inputTask, priority: inputPriority });

    
    tasks.sort((a, b) => a.priority - b.priority);

    
    document.getElementById("taskList").innerHTML = '';

    
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let taskElement = document.createElement("p");
        taskElement.style.background = "pink";
        taskElement.style.padding = "10px";
        taskElement.style.margin = "5px";
      

        taskElement.innerHTML = "Priority: " + task.priority + " | Task: " + task.task;

        document.getElementById("taskList").appendChild(taskElement);
    }

    
    document.getElementById("name").value = '';
    document.getElementById("priority").value = '';
}
