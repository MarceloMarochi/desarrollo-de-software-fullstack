const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
// Configura la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configura la conexión Sequelize (base de datos SQLite en memoria)
const sequelize = new Sequelize('sqlite::memory:');

// Define el modelo Musculo
const Musculo = sequelize.define('Musculos', {
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    funcion: DataTypes.TEXT,
    tipoFibra: DataTypes.STRING,
    acciones: DataTypes.STRING,
    enlace: DataTypes.STRING
}, { timestamps: false });

// Inicializa la base de datos e inserta datos de muestra
async function inicializarBaseDeDatos() {
    await sequelize.sync({ force: true });
    await Musculo.bulkCreate(
        [
            {
              "nombre": "Bíceps braquial",
              "ubicacion": "Brazo anterior",
              "funcion": "Flexión del antebrazo",
              "tipoFibra": "Fibras rápidas",
              "acciones": "Levantar objetos, realizar curl de bíceps",
              "enlace": "https://es.wikipedia.org/wiki/Bíceps_braquial"
            },
            {
              "nombre": "Tríceps braquial",
              "ubicacion": "Brazo posterior",
              "funcion": "Extensión del antebrazo",
              "tipoFibra": "Fibras rápidas",
              "acciones": "Empujar objetos, realizar fondos de tríceps",
              "enlace": "https://es.wikipedia.org/wiki/Tríceps_braquial"
            },
            {
              "nombre": "Deltoides",
              "ubicacion": "Hombro",
              "funcion": "Abducción del brazo",
              "tipoFibra": "Fibras mixtas",
              "acciones": "Levantar objetos por encima de la cabeza, realizar elevaciones laterales",
              "enlace": "https://es.wikipedia.org/wiki/Músculo_deltoides"
            },
            {
              "nombre": "Pectoral mayor",
              "ubicacion": "Pecho",
              "funcion": "Aducción y rotación interna del brazo",
              "tipoFibra": "Fibras mixtas",
              "acciones": "Empujar objetos, realizar press de banca",
              "enlace": "https://es.wikipedia.org/wiki/Pectoral_mayor"
            },
            {
              "nombre": "Dorsal ancho",
              "ubicacion": "Espalda superior",
              "funcion": "Aducción y extensión del brazo",
              "tipoFibra": "Fibras mixtas",
              "acciones": "Tirar objetos hacia el cuerpo, realizar dominadas",
              "enlace": "https://es.wikipedia.org/wiki/Dorsal_ancho"
            },
            {
              "nombre": "Cuádriceps femoral",
              "ubicacion": "Muslo anterior",
              "funcion": "Extensión de la rodilla",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar sentadillas",
              "enlace": "https://es.wikipedia.org/wiki/Cuádriceps_femoral"
            },
            {
              "nombre": "Isquiotibiales",
              "ubicacion": "Muslo posterior",
              "funcion": "Flexión de la rodilla y extensión de la cadera",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar peso muerto",
              "enlace": "https://es.wikipedia.org/wiki/Isquiotibiales"
            },
            {
              "nombre": "Gemelos",
              "ubicacion": "Pantorrilla",
              "funcion": "Flexión plantar del pie",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar elevaciones de pantorrillas",
              "enlace": "https://es.wikipedia.org/wiki/Gemelos_(músculo)"
            },
            {
              "nombre": "Abdominales",
              "ubicacion": "Abdomen",
              "funcion": "Flexión del tronco",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Mantener la postura erguida, realizar abdominales",
              "enlace": "https://es.wikipedia.org/wiki/Recto_abdominal"
            },
            {
              "nombre": "Oblicuos",
              "ubicacion": "Abdomen lateral",
              "funcion": "Rotación del tronco",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Girar el tronco, realizar oblicuos laterales",
              "enlace": "https://es.wikipedia.org/wiki/Oblicuos_(músculo)"
            },
            {
              "nombre": "Trapecio",
              "ubicacion": "Espalda superior y cuello",
              "funcion": "Elevación y rotación de los hombros",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Encogerse de hombros, realizar encogimientos de hombros",
              "enlace": "https://es.wikipedia.org/wiki/Músculo_trapecio"
            },
            {
              "nombre": "Glúteo mayor",
              "ubicacion": "Nalgas",
              "funcion": "Extensión de la cadera",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar sentadillas",
              "enlace": "https://es.wikipedia.org/wiki/Glúteo_mayor"
            },
            {
              "nombre": "Sóleo",
              "ubicacion": "Pantorrilla",
              "funcion": "Flexión plantar del pie",
              "tipoFibra": "Fibras lentas",
              "acciones": "Caminar, correr, realizar elevaciones de pantorrillas",
              "enlace": "https://es.wikipedia.org/wiki/Sóleo_(músculo)"
            },
            {
              "nombre": "Serrato anterior",
              "ubicacion": "Costillas",
              "funcion": "Rotación de la escápula",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Mantener la postura erguida, realizar ejercicios de empuje",
              "enlace": "https://es.wikipedia.org/wiki/Serrato_anterior"
            },
            {
              "nombre": "Recto femoral",
              "ubicacion": "Muslo anterior",
              "funcion": "Flexión de la cadera y extensión de la rodilla",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar sentadillas",
              "enlace": "https://es.wikipedia.org/wiki/Recto_femoral"
            },
            {
              "nombre": "Tibial anterior",
              "ubicacion": "Espinilla anterior",
              "funcion": "Flexión dorsal del pie",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar elevaciones de punta de pie",
              "enlace": "https://es.wikipedia.org/wiki/Tibial_anterior"
            },
            {
              "nombre": "Bíceps femoral",
              "ubicacion": "Muslo posterior",
              "funcion": "Flexión de la rodilla y extensión de la cadera",
              "tipoFibra": "Fibras lentas y rápidas",
              "acciones": "Caminar, correr, realizar peso muerto",
              "enlace": "https://es.wikipedia.org/wiki/Bíceps_femoral"
            }
        ]
    );
}


//Definir aqui la ruta con el método GET para obtener todos los Musculos
app.get("/musculos", async (req, res) => {
  try {
    const musculos = await Musculo.findAll();
    res.send(musculos)
  } catch (err) {
    res.status(400).send({message: 'Musculos no encontrados'})
  }
})

app.get("/:musculo", async (req, res) => {
  const musculoBuscado = req.params.musculo
  const musculosFiltrados = Musculo.findAll({
    where: {
      nombre: {
        [Op.like]: "%"+musculoBuscado+"%"
      }
    }
  })
  res.send(musculosFiltrados)
})


// Inicia el servidor
inicializarBaseDeDatos().then(() => {
    app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
});
