import fetch from 'node-fetch'
import User from '../_Domain/Users.js'

// Al ser el fetch una funcion asíncrona hay que ponerle el async al bloque completo, en este caso la función
// dataFromApi() debido a que lo pide la sintaxis.
async function dataFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    // Aca me devuelve una promesa
    const response = await fetch(url)
    // Ahora si me devuelve el dato y lo transformo en formato json
    const json = await response.json()

    const v = []

    json.forEach(e => {
        let id = e.id
        let name = e.name
        let email = e.email

        const user = new User(id, name, email)
        v.push(user)
    })
    return v
}

// Exportar esta funcion como un objeto
export default {dataFromApi}