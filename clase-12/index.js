import service from './service/usuarioService.js'

(async function main() {
    console.log('Bienvenido')
    const usuarios = await service.obtener_usuarios()
    
})()