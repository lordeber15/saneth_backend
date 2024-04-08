const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Historias = sequelize.define("historias", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  thistoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreyapellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  referencia: {
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estadocivil: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
  celular: {
    type: DataTypes.INTEGER,
  },
  operacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lugarprocedencia: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  antecedentes: {
    type: DataTypes.STRING,
  },
  alergias: {
    type: DataTypes.STRING,
  },
  copUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Historias };
