const articulos = [
    { id: 0, name: 'Ratón multiusos', color: 'black', pvp: 15 },
    { id: 1, name: 'Monitor HV 3000', color: 'black', pvp: 180 },
];

export function informacion() {
    return articulos; // Devuelve el array de artículos
}

export function agregarLista() {
    const inputContainer = document.getElementById('inputContainer');

    // Mostrar los inputs y el botón para agregar un artículo
    inputContainer.innerHTML = `
        <div class="mb-3">
            <input type="text" class="form-control mt-1" id="nombreArticulo" placeholder="id,name,color,pvp">
            <button class="btn btn-success mt-2" id="confirmarAgregar">Confirmar</button>
        </div>
    `;

    // Mostrar el contenedor de inputs
    inputContainer.style.display = 'block';
}

export function eliminarElemento(index) {
    articulos.splice(index, 1); // Elimina el artículo en la posición dada
}
