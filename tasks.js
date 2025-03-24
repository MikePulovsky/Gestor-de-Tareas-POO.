const tasks = [];
const MAX_TASKS = 5; // Constante
// Función para agregar una tarea
function addTask(task) {
    if (tasks.length >= MAX_TASKS) {
        console.log("No puedes agregar más tareas. Límite alcanzado.");
        return false;
    }
    tasks.push(task);
    console.log(Tarea "${task}" agregada.);
    return true;
}
// Función para listar todas las tareas
function listTasks() {
    console.log("Lista de tareas:");
    if (tasks.length === 0) {
        console.log("No hay tareas.");
    } else {
        tasks.forEach((task, index) => {
            console.log(${index + 1}. ${task});
        });
    }
}
// Función para eliminar una tarea por su índice
function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Índice inválido.");
        return false;
    }
    const removed = tasks.splice(index, 1);
    console.log(Tarea "${removed}" eliminada.);
    return true;
}
//funcion de actualizar tarea
function updateTask(index, newTasks) {
    if (index < 0 || index >= tasks.length){
        console.log("indice invalido.");
        return false;
    }
    tasks[index] = newTasks;
    console.log(Tarea actualizada: ${index + 1}. ${newTasks});
    return false;
}
// Exportaciones de funciones
module.exports = { addTask, listTasks, removeTask, updateTask };
