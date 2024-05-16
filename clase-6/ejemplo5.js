//ARREGLAR

const valor = 'rojo'

function imprimirColor(valor){
    switch(valor) {
        case 'rojo':
            console.log('Color rojo')
        case 'azul':
            console.log('Color azul')
        case 'verde':
            console.log('Color verde')
        default:
            console.log('No hay color')
    }
}

console.log(imprimirColor(valor))