const express = require('express');
const { Sequelize, DataTypes, Op } = require('sequelize');
const cors = require('cors');

// Configura la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configura la conexión Sequelize (base de datos SQLite en memoria)
const sequelize = new Sequelize('sqlite::memory:');

// Define el modelo Paquete
const Licencia = sequelize.define('LicenciaConducir', {
    titular: DataTypes.STRING,
    dni: DataTypes.STRING,
    categoria: DataTypes.STRING,
    estaVigente: DataTypes.TEXT,
    observaciones: DataTypes.TEXT,
    }, 
{ timestamps: false });


// Inicializa la base de datos e inserta datos de muestra
async function inicializarBaseDeDatos() {
    await sequelize.sync({ force: true });
    await Licencia.bulkCreate([
        { titular: 'Titular Test01', dni: 25639888, categoria: 'B1', estaVigente: 'S', osbservaciones: 'Usa audífono' },
        { titular: 'Titular Test02', dni: 25639889, categoria: 'B2', estaVigente: 'S', osbservaciones: 'Usa lentes' },
        { titular: 'Titular Test03', dni: 25639890, categoria: 'B1', estaVigente: 'N', osbservaciones: 'Usa lentes' },
        { titular: 'Titular Test04', dni: 25639891, categoria: 'B1', estaVigente: 'N', osbservaciones: 'No aplica' },
        { titular: 'Titular Test05', dni: 25639892, categoria: 'B1', estaVigente: 'S', osbservaciones: 'No aplica' },
        { titular: 'Titular Test06', dni: 25639893, categoria: 'B2', estaVigente: 'S', osbservaciones: 'No aplica' },
        { titular: 'Titular Test07', dni: 25639894, categoria: 'B1', estaVigente: 'S', osbservaciones: 'No aplica' },
        { titular: 'Titular Test08', dni: 25639895, categoria: 'C', estaVigente: 'S', osbservaciones: 'No aplica'},
        { titular: 'Titular Test09', dni: 25639896, categoria: 'C', estaVigente: 'N', osbservaciones: 'No aplica' },
        { titular: 'Titular Test10', dni: 25639897, categoria: 'D', estaVigente: 'S', osbservaciones: 'Personal de seguridad' },
       
    ]);
}

// Endpoint para buscar por descripción
app.get('/licencias/:titular', async (req, res) => {
  try {
    const parametroTitular = req.params.titular
    const licencias = await Licencia.findAll({
        where: { titular: { [Op.like]: `%${parametroTitular}%`}, estaVigente: "S"},
    })
    res.status(200).json(licencias)
  } catch (error) {
    res.status(500).json({message: "ERROR. No se encontro la licencia con dicho nombre de titular."})
  }
});



// Endpoint para obtener todos los paquetes
app.get('/licencias', async (_, res) => {
    try {
        const licencias = await Licencia.findAll()
        res.status(200).json(licencias)
    } catch (error) {
        res.status(500).json({message: "ERROR. No se pudieron obtener las licencias."})
    }
});


// Inicia el servidor
inicializarBaseDeDatos().then(() => {
    app.listen(4000, () => console.log('Servidor corriendo en http://localhost:4000'));
});