import { informacion, agregarLista , eliminarElemento } from "./contenido.js";

let articulos = informacion(); // Obtener los artículos actuales

// Función para generar la lista visualmente
function generarLista() {
    const lista = document.getElementById("lista");
    const articulos = informacion();

    lista.innerHTML = ''; // Limpiar la lista antes de regenerarla

    articulos.forEach((articulo, index) => {
        const listItem = `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${articulo.name}</div>
                    Color: ${articulo.color}, Precio: $${articulo.pvp}
                </div>
                <span class="badge text-bg-primary rounded-pill">${articulo.id}</span>
                <button class="btn btn-danger btn-sm ms-3" onclick="eliminar(${index})">Eliminar</button> <!-- Botón de eliminar -->
            </li>
        `;

        lista.innerHTML += listItem;
    });
}

// Función para añadir un nuevo artículo
function enlistar() {

    agregarLista();

    const confirmarBtn = document.getElementById('confirmarAgregar');
    confirmarBtn.addEventListener('click', function () {
        const nuevoArticulo = document.getElementById('nombreArticulo').value;
        
        // Verificar si el campo no está vacío
        if (nuevoArticulo.trim() !== '') {
            // Descomponer el input en partes (id, name, color, pvp)
            const [id, name, color, pvp] = nuevoArticulo.split(',');

            // Agregar el nuevo artículo al array de artículos
            articulos.push({
                id: parseInt(id),
                name: name.trim(),
                color: color.trim(),
                pvp: parseFloat(pvp)
            });

            // Actualizar la lista visualmente
            generarLista();
        }

        // Ocultar el contenedor de inputs nuevamente
        document.getElementById('inputContainer').style.display = 'none';
    });
}

function eliminar(index) {
    eliminarElemento(index); // Llama a la función para eliminar el artículo del array
    generarLista(); // Regenera la lista después de eliminar
}


window.onload = generarLista; // Generar la lista al cargar la página

// Configurar el botón de agregar
document.getElementById('agregar').addEventListener('click', enlistar);

window.eliminar = eliminar; 
