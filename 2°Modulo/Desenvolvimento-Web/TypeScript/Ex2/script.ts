type Task = {
    id: number;
    name: string;
};

let tasks: Task[] = [];
let taskId: number = 1;

function addTask() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskName = taskInput.value.trim();
    if (taskName) {
        const newTask: Task = {
            id: taskId++,
            name: taskName
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    if(taskList) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
            taskList.appendChild(li);
        });
    }
}