const apiUrl = 'http://localhost:3000/paquetes'; // Reemplaza con la URL de tu API

// Función para cargar la grilla de paquetes
function cargarPaquetes() {
    fetch(apiUrl).then(res => {
        return res.json()
    }).then(data => {
        cargarGrilla(data);
    })
}

function cargarGrilla(data) {
    const $tableBody = document.getElementById('lista-paquetes')
    $tableBody.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        // Creando los 'td' que almacenará cada parte de la información del usuario actual
        let fila = `
        <tr>
            <td>${data[i].destino}</td>
            <td>${data[i].duracion}</td>
            <td>${data[i].precio}</td>
            <td>${data[i].descripcion}</td>
            <td><button onClick="eliminarPaquete(${data[i].id})">Eliminar</button></td>
        </tr>`

        $tableBody.innerHTML += fila
    }
}
// Función para buscar paquetes por descripción
function buscarPaquetes() {
    let desc = document.getElementById('buscar-input').value
    const $tableBody = document.getElementById('lista-paquetes');
    $tableBody.innerHTML = '';
    let url = apiUrl + "/consulta/" + desc
    fetch(url).then(res => {
        return res.json()
    }).then(data => {
        cargarGrilla(data)
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