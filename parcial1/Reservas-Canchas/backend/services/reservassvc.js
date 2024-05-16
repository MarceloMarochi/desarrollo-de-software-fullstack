const Reservas = require('../models/reservas');
const {Op} = require("sequelize");

async function getAll() {
    return await Reservas.findAll({
        order:[['fechaReserva', 'DESC'],
               ['numeroCancha','ASC']]
    });
}

async function getAllByJugador(nombreJugador) {
    return await Reservas.findAll({
        where: {
            jugador: {
                [Op.startsWith]: nombreJugador
            }
        },
        order:[['fechaReserva', 'ASC'],
                ['jugador','ASC']]
        }
    );
}

module.exports = {getAll, getAllByJugador};