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
const Paquete = sequelize.define('Paquete', {
    destino: DataTypes.STRING,
    duracion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    descripcion: DataTypes.TEXT
}, { timestamps: false });

// Inicializa la base de datos e inserta datos de muestra
async function inicializarBaseDeDatos() {
    await sequelize.sync({ force: true });
    await Paquete.bulkCreate([
        { destino: 'Madrid, España', duracion: '6 días', precio: 1100, descripcion: 'Arte, historia y vida nocturna.' }, 
        { destino: 'Cancún, México', duracion: '7 días', precio: 1200, descripcion: 'Disfruta de playas paradisíacas y ruinas mayas.' },
        { destino: 'Machu Picchu, Perú', duracion: '5 días', precio: 850, descripcion: 'Explora la ciudad perdida de los Incas en los Andes.' },
        { destino: 'Roma, Italia', duracion: '10 días', precio: 1500, descripcion: 'Descubre la historia y cultura de la antigua Roma.' },
        { destino: 'París, Francia', duracion: '5 días', precio: 1300, descripcion: 'Romance y cultura en la ciudad de la luz.' },
        { destino: 'Tokio, Japón', duracion: '8 días', precio: 2100, descripcion: 'Experimenta la mezcla de tradición y modernidad.' },
        { destino: 'Nueva York, USA', duracion: '6 días', precio: 1700, descripcion: 'La ciudad que nunca duerme.' },
        { destino: 'Londres, Inglaterra', duracion: '7 días', precio: 1450, descripcion: 'Historia y cultura en la capital británica.' },
        { destino: 'Río de Janeiro, Brasil', duracion: '5 días', precio: 900, descripcion: 'Playas, carnaval y el Cristo Redentor.' },
        { destino: 'Buenos Aires, Argentina', duracion: '4 días', precio: 550, descripcion: 'Tango, gastronomía y cultura porteña.' },
    ]);
}


// Endpoint para buscar por descripción
app.get('/paquetes/consulta/:descrip', async (req, res) => {
    try {
        const descrip = req.params.descrip

        const paquetesXdescripcion = await Paquete.findAll({
            where: {
                descripcion: {
                    [Op.like]: `%${descrip}%`
                }}})

        res.status(200).json(paquetesXdescripcion)
    } catch (error) {
        console.log(`No se pudieron listar los paquetes para la descripcion enviada o se ocacionó un error:\n`, error)
        res.status(500).json({message: `No se pudieron listar los paquetes para la descripcion enviada`})
    }    
});


// Endpoint para obtener los paquetes para cierto pais
app.get('/paquetes/:pais', async (req, res) => {
    try {
        const pais = req.params.pais
        const paquetesXpais = await Paquete.findAll({
            where: {
                destino: {
                    [Op.like]: `%, ${pais}`
                }
            }
        })
        res.status(200).json(paquetesXpais)
    } catch (error) {
        console.log("ERROR!!\n", error)
        res.status(500).json({message: "No se puedo ejecutar la solicitud!"})
    }
})


// Endpoint para obtener todos los paquetes
app.get('/paquetes', async (req, res) => {
    try{
        const paquetes = await Paquete.findAll()
        res.status(200).json(paquetes)
    }catch(error){
        console.log('Error al obtener los datos de todos los paquetes:\n', error)
        res.status(500).json({message: 'Error!! No se pudieron obtener todos los paquetes de viajes'})
    }
});


/* Endpoiint para eliminar un paquete
app.delete('/paquetes/:id', async (req, res) => {
    try {
        const paqueteXeliminar = await Paquete.findOne({
            where: {
                id: req.params.id
            }})
        if (paqueteXeliminar) {
            //await paqueteXeliminar.destroy()
            res.status(200).json(paqueteXeliminar)
        } else {
            res.status(404).json({message: "Paquete no encontrado!!"})
        }
    } catch (error) {
        console.log('ERROR!!\n', error)
        res.status(500).json({message: 'ERROR AL ELIMINAR EL REGISTRO!'})
    }
})
*/

app.delete('/paquetes/:id', async (req, res) => {
    const paq = await Paquete.findOne({
        where: {
            id: req.params.id
        }
    })
    if (paq) {
        await paq.destroy()
        res.json(paq)
    } else
        res.status(404).send({ mensaje: 'Paquete no encontrado' })
});


// Inicia el servidor
inicializarBaseDeDatos().then(() => {
    app.listen(4000, () => console.log('Servidor corriendo en http://localhost:4000'));
});