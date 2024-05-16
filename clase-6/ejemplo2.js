let today = new Date()
console.log(today)

let dia = today.getDate()


let mes = today.getMonth() + 1
if (mes < 10) {
    console.log(mes)
}
else {
    console.log("No es octubre")
}

let año = today.getFullYear()
console.log(año)

// No es buena práctica usar los + para concatenar
console.log(dia+'/'+mes+'/'+año)
// Usar los backtips (``) es una buena práctica para concatenar cadenas de texto y usar variables.
console.log(`${dia}/${mes}/${año}`)