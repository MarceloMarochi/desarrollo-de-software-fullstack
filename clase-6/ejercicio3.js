/* Recibimos un string, si las dos primeras letras dicen py devolver la palabra completa
sino agregar py al inicio de la palabra */

let cadena = 'py'
let py = (string) => {
    if (cadena=== null || cadena=== undefined || string.substring(0,2) === 'py') {
        return('Python')
    } else {
        return(`Py${cadena}`)
    }
}

console.log(py(cadena))