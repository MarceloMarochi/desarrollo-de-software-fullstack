// const { cargarBaseDeDatos } = require('./models/aviones.js')
const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:')

const Avion = sequelize.define('Avion', {
    id: {type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true}, 
    marca: DataTypes.STRING,
    cantidadPasajeros: DataTypes.INTEGER,
    modelo: DataTypes.STRING, 
    aerolinea: DataTypes.STRING,
    autonomiaHs: DataTypes.INTEGER,
    tipoAvion: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
})

async function cargarBaseDeDatos() {
    await sequelize.sync({ force: true})
    await Avion.bulkCreate([
        {marca: 'VolksBaguen', cantidadPasajeros: 500, modelo: 'a30', aerolinea: 'Argentinas', autonomiaHs: 48, tipoAvion: 1, activo: true},
        {marca: 'Nissan', cantidadPasajeros: 500, modelo: 'b20', aerolinea: 'Argentinas', autonomiaHs: 48, tipoAvion: 2, activo: false},
        {marca: 'Renault', cantidadPasajeros: 500, modelo: 's40', aerolinea: 'Argentinas', autonomiaHs: 48, tipoAvion: 1, activo: true},
        {marca: 'Ford', cantidadPasajeros: 500, modelo: 'e85', aerolinea: 'Argentinas', autonomiaHs: 48, tipoAvion: 2, activo: false}
    ])
}


const app = express()
app.use(express.json())
app.use(cors())


app.get('/aviones', async (req,res) => {
    // aviones sera un un vector con la informacion de la tabla de la base de datos
    const aviones = await Avion.findAll()
    res.json(aviones)
})

// busqueda por parametro (id es el nombre del parametro podria ser cualq)
app.get('/aviones/:id', async (req, res) => {
    
    /* // parametro que viene con el req id
    const identificador = req.params.id

    // busqueda de objeto
    const avoinId = await Avion.findOne({where: {id: identificador}})
    
    //mostrarlo
    res.json(avoinId) */

    // sintaxis como para tratar errors try catch
    try {
        const identificador = req.params.id
        // busqueda de objeto
        const avoinId = await Avion.findOne({where: {id: identificador}})
        //mostrarlo
        res.json(avoinId)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'error capo'})
    }
})

cargarBaseDeDatos().then(() => {
    app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000')) 
})



