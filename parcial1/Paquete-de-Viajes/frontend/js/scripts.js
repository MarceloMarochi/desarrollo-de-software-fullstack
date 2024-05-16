const apiUrl = 'http://localhost:3000/paquetes'; // Reemplaza con la URL de tu API

/*

*   Completar la función para cargar la grilla con todos los paquetes de viajes al iniciar la aplicación.

*   Implementar las funciones para filtrar la grilla por país y buscar por palabra clave.

*   Crear un formulario para agregar un nuevo paquete de viajes al final de la grilla.

*   Agregar un botón de eliminar en cada fila de la grilla para eliminar el paquete correspondiente.

 */


// Función para cargar la grilla de paquetes
function cargarPaquetes() {
    fetch(apiUrl).then(res => {
        return res.json()
    }).then(datos => {
        cargarGrilla(datos)
    })
}


// Función para cargar la grilla del HTML
function cargarGrilla(datos){
    const $tableBody = document.getElementById("lista-paquetes")
    $tableBody.innerHTML = ''

    for(let i = 0; i < datos.length; i++){

        filaHTML = `
        <tr>
            <td>${datos[i].destino}</td>
            <td>${datos[i].duracion}</td>
            <td>${datos[i].precio}</td>
            <td>${datos[i].descripcion}</td>
            <td><button onClick=eliminarPaquete()>Eliminar</button></td>
        </tr>`

        $tableBody.innerHTML += filaHTML
    }

}


// Función para buscar paquetes por descripción
function buscarPaquetes() {
    const descripcionBuscada = document.getElementById("buscar-input").value
    const $tableBody = document.getElementById("lista-paquetes")
    $tableBody.innerHTML = ''

    // /paquetes/consulta/:descrip
    let url = apiUrl + '/consulta/' + descripcionBuscada
    fetch(url).then(res => {
        return res.json()
    }).then(datos => {
        cargarGrilla(datos)
    })
}


// Función para agregar un nuevo paquete
function agregarPaquete() {
    
}


// Función para eliminar un paquete
function eliminarPaquete(id) {
    const url = `${apiUrl}/${id}`
    fetch(url, { method: 'DELETE' })
        .then(res => {
           return res.json();
        }).then(json => {
            alert(`Destino ${json.destino} eliminado!`)
            cargarPaquetes()
        })
}

// Cargar la lista de paquetes al cargar la página
cargarPaquetes();