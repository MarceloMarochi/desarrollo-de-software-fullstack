import datos from '../Data/Post_data.js'

async function obtenerPosts(){
    const result = await datos.obtener_posts()

    return result
}

export default{
    obtenerPosts
}
