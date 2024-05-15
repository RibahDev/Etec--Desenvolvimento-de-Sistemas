var tasks = [];
var taskId = 1;
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskName = taskInput.value.trim();
    if (taskName) {
        var newTask = {
            id: taskId++,
            name: taskName
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = "";
    }
}
function renderTasks() {
    var taskList = document.getElementById('taskList');
    if (taskList) {
        taskList.innerHTML = '';
        tasks.forEach(function (task) {
            var li = document.createElement('li');
            li.textContent = task.name;
            taskList.appendChild(li);
        });
    }
}
