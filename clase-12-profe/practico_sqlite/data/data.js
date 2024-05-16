import { Producto } from "../models/producto.js";
import db from "./init_db.js";

async function ejecutarQuery(query) {
    return new Promise((resolve, reject) => {
        const v = []
        
        db.all(query, [], (err, rows) => {
            if (err)
                return reject(err)

            rows.forEach(row => {
                const nuevo = new Producto()
                nuevo.id = row.id
                nuevo.nombre = row.nombre
                nuevo.stock = row.stock
                v.push(nuevo)
            });

            resolve(v)
        })

    })

}

export default {
    ejecutarQuery
}