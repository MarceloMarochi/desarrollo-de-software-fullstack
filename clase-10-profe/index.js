import service from './_Services/UserService.js'

// Sintaxis para declarar una funcion sin nombre y que se llama al instante de haber sido declarada. Notacion IIFE
(async () => {
    console.log('Recuperando dato de usuarios\n')
    const users = await service.getAllUser()
    // users.forEach(e => console.log(e.toString() + '\n'))
    users.forEach(e => console.log(e.toString() + '\n'))


    const userId = await service.getUserById(9)
    console.log('BUSQUEDA POR ID\n')
    console.log(userId.toString() + '\n')
})()
