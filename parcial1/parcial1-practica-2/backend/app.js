const express = require("express");
const { Sequelize, DataTypes, Op } = require("sequelize");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize("sqlite::memory:");

const Reserva = sequelize.define("Reserva", {
  idReserva: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fechaReserva: DataTypes.STRING,
  jugador: DataTypes.STRING,
  numeroCancha: DataTypes.INTEGER,
});

// Iniciar Base de datos
async function inicializarBd() {
  await sequelize.sync({ force: true });
  await Reserva.bulkCreate([
    {
      fechaReserva: "2024-05-07 13:00",
      jugador: "Carlos Calvo",
      numeroCancha: "1",
    },
    { fechaReserva: "2024-05-07 14:00", jugador: "", numeroCancha: "2" },
    { fechaReserva: "2024-05-07 15:00", jugador: "", numeroCancha: "1" },
    {
      fechaReserva: "2024-05-07 16:00",
      jugador: "Laura Lopez",
      numeroCancha: "2",
    },
    {
      fechaReserva: "2024-05-07 17:00",
      jugador: "Martin Miranda",
      numeroCancha: "1",
    },
    { fechaReserva: "2024-05-07 18:00", jugador: "", numeroCancha: "2" },
    {
      fechaReserva: "2024-05-07 19:00",
      jugador: "Andrea Alvarez",
      numeroCancha: "1",
    },
    { fechaReserva: "2024-05-07 20:00", jugador: "", numeroCancha: "2" },
  ]);
}

// Get all reservas ordenadas por fecha y numero de cancha -> getAll()
app.get("/reservas", async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      order: [
        ["numeroCancha", "ASC"],
        ["fechaReserva", "ASC"],
      ],
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ message: "No se pudo encontrar las reservas" });
  }
});

//Get reservas by Jugador -> getAllByJugador(nombreJugador)
app.get("/reservas/:jug", async (req, res) => {
  try {
    const jug = req.params.jug;
    const reservaJugador = await Reserva.findAll({ where: { jugador: jug } });
    res.status(200).json(reservaJugador);
  } catch (error) {
    res.status(500).json({ message: "ERROR. No se pudo encontrar ek jugador" });
  }
});

// Mensaje de inicio del server
app.get("/", async (req, res) => {
  res.send("¡Servidor de reservas!");
});

// Inicia el servidor
inicializarBd().then(() => {
  app.listen(5000, () =>
    console.log("Servidor corriendo en http://localhost:5000")
  );
});
