// Tenemos un input, tomamos el primer caracter y lo concatenamos al inicio y al final de la palabra

let pal = 'Swift'

let concatenarInicioFin = (string) => {
    letra = string.substring(0,1)
    return `${letra}string${letra}`
}

console.log(concatenarInicioFin(pal))