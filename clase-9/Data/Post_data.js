import {} from "../Models/Post.js"
import fetch from "node-fetch"


async function obtener_post() {
    const result = []
    const url = "https://jsonplaceholder.typicode.com/posts"

    try {
        const promesa = await fetch(url)

        // Para que me devuelva todo el objeto data en formato json
        const data = await promesa.json()

        console.log(JSON.stringify(json))

        return result;
    }

    catch(error) {
        console.log("Error" + error)
    }
}

export default {
    obtener_post
}