const { DataTypes } = require("sequelize");
const sequelize = require("../data/db.js");

const Reserva = sequelize.define(
    "Reserva",
    {
        idReserva: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fechaReserva: {
            type: DataTypes.DATE,
            allowNull: false
        },
        jugador: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numeroCancha: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "reserva",
        timestamps: false  
    }
);

module.exports = Reserva;