# Gestión de Tareas en Node.js

Este proyecto es una práctica en **Node.js** que cubre los siguientes conceptos fundamentales:

- Variables y constantes
- Bucles
- Condiciones
- Funciones
- Exportaciones e importaciones de funciones

## 📂 Estructura del Proyecto

El proyecto consta de dos archivos principales:

1. **`index.js`** → Archivo principal que importa y usa las funciones.
2. **`tasks.js`** → Archivo que contiene las funciones de manejo de tareas y las exporta.

## 📌 Instalación y Ejecución

### 1️⃣ Requisitos
Asegúrate de tener instalado **Node.js** en tu sistema. Puedes verificarlo con:

```sh
node -v
```

Si no lo tienes instalado, descárgalo desde [aquí](https://nodejs.org/).

### 2️⃣ Clonar el Repositorio

```sh
git clone https://github.com/KervinCruzARAP/practica1-gestordetareas.git
cd practica1-gestordetareas
```

### 3️⃣ Ejecutar el Código

Para correr el proyecto, ejecuta:

```sh
node index.js
```

## 📖 Uso

### Agregar una Tarea
El código agregará varias tareas al sistema y las mostrará en la consola.

### Listar Tareas
Muestra la lista de tareas actuales.

### Eliminar una Tarea
Se elimina una tarea por su índice en la lista y se vuelve a listar para verificar los cambios.

Explicación de las Funciones y Rutas
Funciones:
addTask(task): Recibe una tarea y la agrega al arreglo si no se ha alcanzado el límite de tareas.

listTasks(): Devuelve todas las tareas almacenadas.

removeTask(index): Elimina una tarea especificada por su índice.

updateTask(index, newTask): Actualiza una tarea en el índice dado con la nueva descripción.

Rutas:
GET /tasks: Devuelve todas las tareas almacenadas en formato JSON.

POST /tasks: Recibe una nueva tarea y la agrega al sistema.

DELETE /tasks/:index: Elimina la tarea que corresponde al índice pasado en la URL.

PUT /tasks/:index: Actualiza una tarea existente con los nuevos datos enviados en la solicitud.

## 📜 Licencia
Este proyecto es de uso libre para fines educativos.

link VERCEL: https://gestor-de-tareas-ow1vxv6iu-nehemias-projects-42e8a781.vercel.app

