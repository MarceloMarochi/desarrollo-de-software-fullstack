import SensorValue from "./sensor.js";
import data from './data.json' assert { type: 'json' };// Importar en una variable data lo que tinene el archivo .json

// Esta clase tendrá una colección de objetos de objetos 'sensor'
export default class EstacionMet {
    constructor(n) {
        // this.values = []; // Hacer un arreglo vacío
        // this.values = Array(n) // Para hacer el arreglo especificando la cantidad de objetos que tendrá, de todas formas puede aumentar su tamaño
        // this.values = this.leer_valores(n) // Crear el arreglo utilizando el método privado. 
        this.values = this.leer_valores_json()
    }

    // Funcion que reciba el total de valores que hay que leer.
    // Y que con un 
    leer_valores(n) {
        let lista = []
        let i 
        for(i=0 ; i < n; i++) {
            let id = Math.floor(Math.random()*100) // Math.random() = Función generará valor de probabilidad rango->[0, 1) | Math.flor() = Lo trunca al entero próximo
            let t = Math.floor(Math.random()*40)
            let h = Math.floor(Math.random()*90)
            let hh = `${Math.floor(Math.random()*24)}:${Math.floor(Math.random()*60)}` // Crear una hora random
            
            // Creo un objeto con los atributos recién creados
            const value = new SensorValue(id, t, h, hh)

            // Pusheo los objetos recién creados al array lista
            lista.push(value)
        }
        return lista
    }

    // Funcion para leer los objetos de la lista que vienen del archivo data.json 
    // Primero se tiene que importar en una variable lo que contiene el archivo.
    leer_valores_json() {
        let lista = []
        let i 
        for(i=0 ; i < data.length; i++) {
            
            let id = data[i]["id"]
            let t = data[i]["temp"]
            let h = data[i]["hum"]
            let hh = data[i]["hh"]
            
            // Creo un objeto con los atributos recién creados
            const value = new SensorValue(id, t, h, hh)

            // Pusheo los objetos recién creados al array lista
            lista.push(value)
        }
        return lista
    }

    mostrar() {
        let listado = 'LISTADO DE LECTURAS \n\n'
        //forEach() ejecuta la fucion por cada elemento -> En este caso estamos usando una funcion de orden superior
        // ya que en el interior de la funcion forEach() estamos ponniendo otra función adentro
        this.values.forEach(e => {
            listado += e.toString() + '\n'
        })
        return listado
    }

    filtrar_temperaturas(val_max) {
        let listado = 'LISTADO DE LECTURAS FILTRADAS\n\n'
        const filtrados = this.values.filter(e => e.temperatura <= val_max)
        filtrados.forEach(e => {
            listado += e.toString() + '\n'
        })
        return listado
    }
}