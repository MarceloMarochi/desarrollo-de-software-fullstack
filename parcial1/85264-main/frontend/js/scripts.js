const apiUrl = 'http://localhost:4000'

// Función para obtener el nombre del titular del html
function filtrar() {
    const titular = document.getElementById("buscar-input").value;
    const apiUrlTitular = apiUrl + '/licencias/' + `${titular}`
    console.log(apiUrlTitular)
    fetch(apiUrlTitular).then(res => {
        return res.json()
    }).then(e => {
        cargarGrilla(e)
    })
}


// funcion para cargar las licencias en el cuerpo de la tabla
function cargarGrilla(data) {
    const $tableBody = document.getElementById("lista-carnets");
    $tableBody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const fila = `
            <tr>
                <td>${data[i].titular}</td>
                <td>${data[i].dni}</td>
                <td>${data[i].categoria}</td>
                <td>${data[i].estaVigente}</td>
                <td>${data[i].osbservaciones}</td>
            </tr>
            `;
        $tableBody.innerHTML += fila;
    }
}

// funcion obtener las licencias de la api
function mostrarGrilla() {
    fetch(apiUrl + '/licencias').then(lic => {
        return lic.json()
    }).then(licencias => {
        cargarGrilla(licencias)
    })
}

// Cargar la lista de paquetes al cargar la página
mostrarGrilla();