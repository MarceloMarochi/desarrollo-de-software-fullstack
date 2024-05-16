import { Persona } from './personas.js'
import { sequelize } from './db.js'

// Objeto de control
export class GestorPersonas {

    async obtener_todas() {
        return await Persona.findAll()
    }

}
