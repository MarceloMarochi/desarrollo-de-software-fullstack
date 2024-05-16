import data from '../data/data.js'

async function obtenerProductosConStock(){
   const v = await data.ejecutarQuery('SELECT * FROM productos WHERE stock > 0');
   return v 
}

export default{
    obtenerProductosConStock
}