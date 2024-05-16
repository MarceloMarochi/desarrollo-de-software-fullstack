const Express = require("express");
const Cors = require("cors");
const db = require("./data/db");
const ReservasModel = require("./models/reservas");
const ReservasSvc = require("./services/reservassvc");

const app = Express();

app.use(Express.json());
app.use(Cors());

app.get('/reservas', async(req, res) => {
    if (req.query.Jugador != undefined && req.query.Jugador !== "") 
    {
        const lst = await ReservasSvc.getAllByJugador(req.query.Jugador);
        res.json(lst);             
    }
    else
    {
        const lst = await ReservasSvc.getAll();
        res.json(lst);             
    }
});

async function DBInit() {
    await db.sync({ force: true });
    await ReservasModel.bulkCreate([
        { fechaReserva: '2024-05-07 13:00', jugador: 'Carlos Calvo', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 14:00', jugador: '', numeroCancha: '2'},
        { fechaReserva: '2024-05-07 15:00', jugador: '', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 16:00', jugador: 'Laura Lopez', numeroCancha: '2'},
        { fechaReserva: '2024-05-07 17:00', jugador: 'Martin Miranda', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 18:00', jugador: '', numeroCancha: '2'},
        { fechaReserva: '2024-05-07 19:00', jugador: 'Andrea Alvarez', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 20:00', jugador: '', numeroCancha: '2'} 
    ]);
}

DBInit().then(() => {
    app.listen(3000, async() => console.log('Servidor escuchando peticiones en http://localhost:3000'));
});

// app.listen(3000, async() => {
//     console.log('Servidor escuchando peticiones en http://localhost:3000');
//     await DBInit();
//     console.log('Base de datos sincronizada')
// });
