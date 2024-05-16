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

