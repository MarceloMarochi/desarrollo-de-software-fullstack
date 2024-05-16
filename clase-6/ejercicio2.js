/* Escribir un programita en el que ejecute la suma de dos numeros. Si los dos numeros
son iguales retornar el triple de la suma */

let suma = (a,b) => {
    if (a === b) {
        return (a + b) * 3
    }
    else {
        return a + b
    }
}