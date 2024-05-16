import EstacionMet from "./estacion.js";

// diferencia entre funcion expresada y declarada ??
function main() {
    const estacion = new EstacionMet(10)
    console.log(estacion.mostrar())
    console.log(estacion.filtrar_temperaturas(25))
}

main()