// EL ARCHIVO SIEMPRE TIENE QUE LLAMARSE .test.js
import { sumarDosNumeros, contarLetras } from "../Functions/functions";

test('Este test suma dos numeros', ()=>{
    expect(sumarDosNumeros(2,2)).toBe(4)
} )

test('Este test cuenta los caracteres de un tecto', () => {
    expect(contarLetras('Argentina')).toBe(9)
})