// main.js
import { informacion } from "./contenido.js";

export function generarLista() {
    const lista = document.getElementById("lista"); // Obtén la referencia a la lista en el HTML
    const articulos = informacion(); // Llama a la función para obtener los artículos

    articulos.forEach(articulo => {
        // Crea un elemento de lista para cada artículo con las clases de Bootstrap
        const listItem = `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${articulo.name}</div>
                    Color: ${articulo.color}, Precio: $${articulo.pvp}
                </div>
                <span class="badge text-bg-primary rounded-pill">${articulo.id}</span>
            </li>
        `;

        lista.innerHTML += listItem; // Agrega el elemento a la lista
    });
}

// Llama a la función generarLista al cargar la página
window.onload = generarLista;
