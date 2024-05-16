class SensorValue {

    constructor(id, temperatura, humedad, hora) {
        this.id = id;
        this.temperatura = temperatura;
        this.humedad = humedad;
        this.hora = hora;
    }

    toString() {
       return `ID: ${this.id}\tTemperatura: ${this.temperatura}°C\tHumedad: ${this.humedad}%\tHora: ${this.hora}`
    }
}

export default SensorValue;