const urlAPI = 'http://localhost:3000/'

function recuperarReservas() {
    const reservas = fetch(urlAPI + 'reservas').then(res => {
        console.log(res)
        return res.json()
    }).then(datos => {
        const listaRerservas = document.getElementById('TablaReservas')
        listaRerservas.innerHTML = ''
        
        for (let i=0; i < datos.length; i++) {
            filaHTML = `
            <tr>
                <td>${datos[i].id}</td>
                <td>${datos[i].fechaDeReserva}</td>
                <td>${datos[i].jugador}</td>
                <td>${datos[i].numeroDeCancha}</td>
                <td><button onClick=eliminarReservaPorId(${datos[i].id})>Eliminar Rerserva</button></td>
            </tr>`

            listaRerservas.innerHTML += filaHTML
        }})
}


function eliminarReservaPorId(id) {
    const url = `${urlAPI}reservas/${id}`
    fetch(url, {method: 'DELETE'}).then(res => {
        return res.json()
    }).then(eliminado => {
        alert(`Reserva con ID N°${eliminado.id} a nombre de ${eliminado.jugador} eliminada`)
        recuperarReservas()
    })
}

/*

function agregarReserva() {
    const fecha = document.getElementById('fechaReserva')
    const nombre = document.getElementById('nombreJugador')
    const cancha = document.getElementById('numCancha')
    
    const reserv = []

    agregarReserva(reserv)
}


function agregarReservas(datos) {
    const listaRerservas = document.getElementById('TablaReservas')
    listaRerservas.innerHTML = ''
    
    filaHTML = `
        <tr>
            <td></td>
            <td>${datos[0].fechaDeReserva}</td>
            <td>${datos[1].jugador}</td>
            <td>${datos[2].numeroDeCancha}</td>
            <td><button onClick=eliminarReservaPorId(${datos[i].id})>Eliminar Rerserva</button></td>
        </tr>`

        listaRerservas.innerHTML += filaHTML
}
*/

recuperarReservas()