const urlAPI = 'http://localhost:3000'

function cargarMuseo() {
    fetch(urlAPI+'/museos').then(resultados => {
        return resultados.json()
    }).then(datos => {
        cargarGrilla(datos)
    })
}

 
function cargarGrilla(datos) {
    const $tableBody = document.getElementById('lista-museos')
    $tableBody.innerHTML = ''

    for (let dato = 0; dato < datos.length; dato++) {
        filaHTML = `
        <tr>
            <td>${datos[dato].nombre+` (id ${datos[dato].id}`})</td>
            <td>${datos[dato].ubicacion}</td>
            <td>${datos[dato].exposiciones}</td>
            <td>${datos[dato].horarios}</td>
            <td>${datos[dato].precioEntrada}</td>
        </tr>`

        $tableBody.innerHTML += filaHTML
    }
}


function consultarMuseo() {
    const nombreIngresado = document.getElementById('nombre').value
    const  url = urlAPI + '/museos/' + nombreIngresado

    fetch(url).then(resultado => {
        return resultado.json()
    }).then(museoEncontrado => {
        if (museoEncontrado.length > 0) {
            cargarGrilla(museoEncontrado)
        } else {
            console.log('No se encontraron coincidencias en la lista!')
            alert(`"${nombreIngresado}" no presenta coincidencias en la tabla!`)
        }
    })
}

function sacarEspacios(nombre) {
    let cadenaSinEspacios = nombre.split(" ").join("&")
    return cadenaSinEspacios
}


function eliminarMuseo() {
    const id = document.getElementById('museo-delete').value

    //nombreFinal = sacarEspacios(nombreEliminar)

    const url = urlAPI + '/museos/' + id
    console.log(url)

    fetch(url, {method: 'DELETE'}).then(resultado => {
        return resultado.json()
    }).then(borrado => {
        if (borrado) {
            console.log(`Museo con ID N°${id} BORRADO`)
            alert(`Museo con ID N°${id} BORRADO`)
            cargarMuseo()
        } 
    })
}

cargarMuseo()