import {Post} from "../Models/Posts.js"
import fetch from 'node-fetch';

async function obtener_posts(){
    const result = []
    const url = "https://jsonplaceholder.typicode.com/posts"

    try{
        const promesa = await fetch(url)

        const data = await promesa.json()

        data.forEach(element => {
            const postAux = new Post()
            postAux.body = element.body
            postAux.id = element.id
            postAux.title = element.title

            result.push(postAux)
        });

        return result;

    }
    catch(error){
        console.log("Error!!!! " + error)
    }
}

export default{
    obtener_posts
}
