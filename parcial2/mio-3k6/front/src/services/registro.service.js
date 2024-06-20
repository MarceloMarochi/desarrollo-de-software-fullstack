const urlAPI = "http://localhost:3001/reparaciones"

async function getDatos() {
    try {
        const result = await fetch(urlAPI)
        const reparaciones = await result.json()
        return reparaciones
    } catch (error) {
        console.log('ERROR! Al traer los datos', error)
    }
}

async function postDatos(newDato) {
    try {
        const resultado = await fetch(urlAPI, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newDato)      
        })
        return resultado.json()
        
    } catch (error) {
        console.log('ERROR! Al postear los datos', error)
    }
}

export default {getDatos, postDatos}