// Importaciones de funciones
const { addTask, listTasks, removeTask,updateTask } = require("./tasks");

//aqui ambos metodos son iguales
//send puedes enviar cualquier tipo de datos: texto,JSON, HTML lo que usted desee.
//en cuanto a JSON envia el archivo en formato json pero limpio, es similar pero para respuestas en formato json.    
app.get("/tasks", (req, res) =>{
const ListaTareas = listTasks();    
res.json(ListaTareas);

});


//es para enviar datos del cliente al servidor.
//por ejemplo si queremos que el inicie sesion, si queremos que el envie alguna consulta.
//en este caso le estamos enviando un dato al servidor de que queremos agregar una tarea.
//tambien es necesario usar req.body para guardar lo que envia en solicitud a POST.
app.post("/tasks", (req, res) =>{
const { task } = req.body //guarda lo que envio el usuario
const resultado = addTask(task);
if(!resultado)
    {
    return res.status(404).json({ message: "Ocurrio un error al añadir una tarea"}); // obtenemos el resultado de la consulta para añadir una tarea
    }
return res.status(200).json({ messsage: "Tarea agregada correctamente"});
});

//La función parseInt() convierte un texto a número entero.
// por ejemplo:
/*parseInt("3", 10); // Devuelve 3 (número)
parseInt("10", 10); // Devuelve 10 (número)
*/
//,10 significa que el número es en base decimal (normal, base 10). Siempre ponlo así.
//¿Por qué es necesario convertirlo?
//Porque si no lo conviertes, JavaScript trataría el número como texto. 
app.delete("/tasks/:index", (req, res) => {
const index = parseInt(req.params.index, 10);
const resultadodelete = removeTask(index);
if(!resultadodelete)
    {
    return res.status(404).json({ message: "Ocurrio un error al eliminar una tarea"});
    }
return res.status(200).json({ message: "Tarea eliminada con exito"});
});

//la petición PUT se usa para reemplazar todos los datos de un recurso
//en este caso usamos funciones anteriores y metodos anteriores como el req.body.
app.put("/tasks/:index", (req, res) => {
const index = parseInt(req.params.index, 10);
const { nuevaTarea } = req.body;
const resultadoNuevaT = updateTask(index, nuevaTarea);
if(!resultadoNuevaT)
    {
    return res.status(404).json({ message: "No se pudo actualiza la tarea"});
    }
return res.status(200).json({ message: "Tarea actualizada con exito"});
});
