// ======================================================
// CONTROL DE TAREAS
// CRUD CON JAVASCRIPT
// ======================================================


// Creamos un arreglo vacío para almacenar las tareas.
let tareas = [];


// ======================================================
// CREATE - CREAR
// ======================================================

// Creamos la función que permite agregar una tarea.
function agregarTarea() {

    // Buscamos el campo de texto utilizando su ID.
    const input = document.getElementById("tareaInput");

    // Obtenemos el texto escrito y quitamos espacios innecesarios.
    const texto = input.value.trim();


    // Comprobamos si el usuario dejó el campo vacío.
    if (texto === "") {

        // Mostramos un mensaje de advertencia.
        alert("Por favor, escribe una tarea.");

        // Detenemos la función.
        return;
    }


    // Creamos un objeto que representa una nueva tarea.
    const nuevaTarea = {

        // Guardamos el texto de la tarea.
        texto: texto,

        // Indicamos que inicialmente está pendiente.
        completada: false
    };


    // Agregamos la nueva tarea al arreglo.
    tareas.push(nuevaTarea);


    // Limpiamos el campo de texto.
    input.value = "";


    // Actualizamos la lista que aparece en pantalla.
    mostrarTareas();
}


// ======================================================
// READ - LEER
// ======================================================

// Creamos la función que muestra las tareas.
function mostrarTareas() {

    // Buscamos la lista donde aparecerán las tareas.
    const lista = document.getElementById("listaTareas");


    // Limpiamos la lista antes de volver a mostrarla.
    lista.innerHTML = "";


    // Recorremos todas las tareas guardadas.
    tareas.forEach(function(tarea, indice) {


        // Creamos un elemento de lista <li>.
        const elemento = document.createElement("li");


        // Creamos un elemento <span> para mostrar el texto.
        const textoTarea = document.createElement("span");


        // Colocamos el nombre de la tarea dentro del span.
        textoTarea.textContent = tarea.texto;


        // Comprobamos si la tarea está completada.
        if (tarea.completada) {

            // Tachamos visualmente la tarea.
            textoTarea.style.textDecoration = "line-through";
        }


        // ==================================================
        // UPDATE - ACTUALIZAR
        // ==================================================

        // Creamos el botón para actualizar.
        const botonEditar = document.createElement("button");


        // Colocamos el texto del botón.
        botonEditar.textContent = "Actualizar";


        // Le asignamos la clase CSS.
        botonEditar.className = "btn-editar";


        // Indicamos qué debe suceder al hacer clic.
        botonEditar.onclick = function() {

            // Ejecutamos la función para editar.
            editarTarea(indice);
        };


        // ==================================================
        // BOTÓN COMPLETAR
        // ==================================================

        // Creamos el botón para cambiar el estado.
        const botonCompletar = document.createElement("button");


        // Cambiamos el texto dependiendo del estado.
        botonCompletar.textContent =
            tarea.completada
            ? "Pendiente"
            : "Completar";


        // Le asignamos la clase CSS.
        botonCompletar.className = "btn-completar";


        // Indicamos qué ocurre al hacer clic.
        botonCompletar.onclick = function() {

            // Ejecutamos la función completarTarea.
            completarTarea(indice);
        };


        // ==================================================
        // DELETE - BORRAR
        // ==================================================

        // Creamos el botón para eliminar.
        const botonEliminar = document.createElement("button");


        // Colocamos el texto del botón.
        botonEliminar.textContent = "Borrar";


        // Le asignamos la clase CSS.
        botonEliminar.className = "btn-eliminar";


        // Indicamos qué ocurre al hacer clic.
        botonEliminar.onclick = function() {

            // Ejecutamos la función para eliminar.
            eliminarTarea(indice);
        };


        // Agregamos el texto de la tarea al elemento.
        elemento.appendChild(textoTarea);


        // Agregamos el botón actualizar.
        elemento.appendChild(botonEditar);


        // Agregamos el botón completar.
        elemento.appendChild(botonCompletar);


        // Agregamos el botón borrar.
        elemento.appendChild(botonEliminar);


        // Agregamos la tarea completa a la lista.
        lista.appendChild(elemento);

    });


    // Actualizamos el contador de tareas.
    actualizarContador();
}


// ======================================================
// UPDATE - ACTUALIZAR
// ======================================================

// Creamos la función para editar una tarea.
function editarTarea(indice) {


    // Mostramos una ventana para escribir el nuevo nombre.
    const nuevoTexto = prompt(
        "Escribe el nuevo nombre de la tarea:",
        tareas[indice].texto
    );


    // Comprobamos que el usuario haya escrito algo.
    if (
        nuevoTexto !== null &&
        nuevoTexto.trim() !== ""
    ) {


        // Reemplazamos el texto anterior por el nuevo.
        tareas[indice].texto = nuevoTexto.trim();


        // Volvemos a mostrar las tareas actualizadas.
        mostrarTareas();
    }
}


// ======================================================
// UPDATE - CAMBIAR ESTADO
// ======================================================

// Creamos una función para completar una tarea.
function completarTarea(indice) {


    // Cambiamos el estado entre verdadero y falso.
    tareas[indice].completada =
        !tareas[indice].completada;


    // Actualizamos la lista.
    mostrarTareas();
}


// ======================================================
// DELETE - BORRAR
// ======================================================

// Creamos la función para eliminar una tarea.
function eliminarTarea(indice) {


    // Eliminamos una tarea utilizando su posición.
    tareas.splice(indice, 1);


    // Actualizamos la lista después de eliminar.
    mostrarTareas();
}


// ======================================================
// CONTADOR
// ======================================================

// Creamos la función que cuenta las tareas.
function actualizarContador() {


    // Obtenemos la cantidad de tareas del arreglo.
    const cantidad = tareas.length;


    // Mostramos la cantidad en el elemento HTML.
    document.getElementById("contador")
        .textContent =
        "Tareas registradas: " + cantidad;
}


// ======================================================
// INICIO DEL PROGRAMA
// ======================================================

// Ejecutamos la función cuando se carga la página.
mostrarTareas();