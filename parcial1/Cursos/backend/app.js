const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './cursos.sqlite'
})

const Cursos = sequelize.define('Cursos',{
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    nombre: {type: DataTypes.TEXT},
    nivel: {type: DataTypes.INTEGER}
})

// try{
//     sequelize.authenticate().then(
//         console.log('Base de datos OK')
//     );
// }
// catch(error){
//     console.error(`Ha ocurrido un error: ${error}`)
// }

const initDb = async () =>{
    await sequelize.sync();
    await Cursos.truncate();
    await Cursos.bulkCreate([
        {nombre: 'Curso 01', nivel: 2},
        {nombre: 'ACurso 02', nivel: 2},
        {nombre: 'Curso 03', nivel: 1},
        {nombre: 'ACurso 04', nivel: 1},
        {nombre: 'Curso 05', nivel: 2},
        {nombre: 'BCurso 06', nivel: 1},
    ])
}

initDb();

app.get('/', (req, res, next) =>{
    res.end('<h1>Home</h1>');
});

app.get('/cursos', async (req, res, next) => {
    const datos = await Cursos.findAll();
    res.json(datos);

})

app.get('/cursos/:nivel', async (req, res, next) => {
    const pNivel = req.params.nivel;
    let filtro = {where: {nivel: pNivel}};
    if (pNivel == 0) {filtro = {}};

    const datos = await Cursos.findAll(filtro);
    res.json(datos);

})


app.listen(PORT, ()=>{console.log(`Servidor en http://localhost:${PORT}`)})