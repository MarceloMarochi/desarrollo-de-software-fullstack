import servicio from "./Service/Service.js"

(async function main(){
    console.log("Ingresamos al main...")
    let posts = await servicio.obtenerPosts()
    console.log("********")
    console.log(posts)
})()