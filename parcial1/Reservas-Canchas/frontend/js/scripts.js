function RecuperarReservas(){
    const $tabla =  document.getElementById('TablaReservas')
 
     fetch("http://localhost:3000/reservas").then(res =>{
        return res.json()
            }).then( data =>{
                $tabla.innerHTML="";
                data.forEach(e => {
                    const row = `<tr>
                        <td>${e.idReserva}</td>
                        <td>${e.fechaReserva}</td>
                        <td>${e.jugador}</td>
                        <td>${e.numeroCancha}</td>
                    </tr>`
                    $tabla.innerHTML += row
                }
            );
        }
    ) 
}