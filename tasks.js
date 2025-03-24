const tasks = [];
const MAX_TASKS = 5;

function addTask(task) {
    if (tasks.length >= MAX_TASKS) {
        return null;
    }
    tasks.push(task);
    return task;
}

function listTasks() {
    return tasks;
}

function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        return null;
    }
    return tasks.splice(index, 1)[0];
}

function updateTask(index, newTask) {
    if (index < 0 || index >= tasks.length) {
        return null;
    }
    tasks[index] = newTask;
    return newTask;
}
