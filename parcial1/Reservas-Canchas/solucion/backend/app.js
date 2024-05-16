const express = require('express')
const { Sequelize, Op, DataTypes } = require('sequelize')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const sequelize = new Sequelize('sqlite::memory:');

const Reservas = sequelize.define('Reservas', {
    fechaDeReserva: DataTypes.TEXT,
    jugador: DataTypes.TEXT,
    numeroDeCancha: DataTypes.INTEGER
})

async function iniciarBaseDeDatos() {
    await sequelize.sync({force: true})
    await Reservas.bulkCreate([
        {fechaDeReserva: '10-05-2024', jugador: 'Nicolas Sosa', numeroDeCancha: 1},
        {fechaDeReserva: '10-05-2024', jugador: 'Pedro Mendoza', numeroDeCancha: 3},
        {fechaDeReserva: '10-05-2024', jugador: 'Jose Suarez', numeroDeCancha: 2},
        {fechaDeReserva: '10-05-2024', jugador: 'Jorge Mussini', numeroDeCancha: 4},
        {fechaDeReserva: '11-05-2024', jugador: 'Martín López', numeroDeCancha: 5},
        {fechaDeReserva: '11-05-2024', jugador: 'Luisa González', numeroDeCancha: 6},
        {fechaDeReserva: '11-05-2024', jugador: 'Ana Martínez', numeroDeCancha: 7},
        {fechaDeReserva: '11-05-2024', jugador: 'Gabriel Fernández', numeroDeCancha: 8},
        {fechaDeReserva: '12-05-2024', jugador: 'María Rodríguez', numeroDeCancha: 9},
        {fechaDeReserva: '12-05-2024', jugador: 'Carlos Pérez', numeroDeCancha: 10},
        {fechaDeReserva: '13-05-2024', jugador: 'Andrés Gómez', numeroDeCancha: 11},
        {fechaDeReserva: '13-05-2024', jugador: 'Laura Torres', numeroDeCancha: 12},
        {fechaDeReserva: '14-05-2024', jugador: 'Santiago Díaz', numeroDeCancha: 13},
        {fechaDeReserva: '14-05-2024', jugador: 'Carolina Ramírez', numeroDeCancha: 14},
        {fechaDeReserva: '15-05-2024', jugador: 'Maximiliano Silva', numeroDeCancha: 15},
        {fechaDeReserva: '15-05-2024', jugador: 'Florencia López', numeroDeCancha: 16},
        {fechaDeReserva: '16-05-2024', jugador: 'Matías Vargas', numeroDeCancha: 17},
        {fechaDeReserva: '16-05-2024', jugador: 'Valentina Fernández', numeroDeCancha: 18},
        {fechaDeReserva: '17-05-2024', jugador: 'Diego Sánchez', numeroDeCancha: 19},
        {fechaDeReserva: '17-05-2024', jugador: 'Camila González', numeroDeCancha: 20}
    ]);
}

// Endpoint para visualizar todos los paquetes
app.get('/reservas', async (req, res) => {
    try {
        const tomarReservas = await Reservas.findAll()
        res.status(200).json(tomarReservas)
    } catch (error) {
        res.status(500).json({message: 'No se pudieron tomar las reservas!'})
    }
})


// Endpoint para mostrar un paquete por nro de cancha
app.get('/reservas/:cancha', async (req, res) => {
    try {
        const cancha = req.params.cancha
        const reservasEncontradas = await Reservas.findAll({
            where: {
                numeroDeCancha: cancha
            }
        })
        res.status(200).json(reservasEncontradas)
    } catch (error) {
        res.status(500).json({message: 'No se encontro ninguna reserva con el numero de cancha ingresado!'})
    }
})

// Endpoint para eliminar una reserva
app.delete('/reservas/:id', async (req, res) => {
    try {
       const idReserva = req.params.id
       const reservaXeliminar = await Reservas.findOne({
        where: {
            id: idReserva
        }
       })
       if (reservaXeliminar) {
        await reservaXeliminar.destroy()
        res.status(200).json(reservaXeliminar)
       }
    } catch (error) {
        res.status(500).json({message: 'No se pudo eliminar la Reserva'})
    }
})


const port = 3000
iniciarBaseDeDatos().then(() => {
    app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))
})

