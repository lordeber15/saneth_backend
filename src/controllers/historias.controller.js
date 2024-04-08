const { Historias } = require("../models/historias");

const getHistorias = async (req, res) => {
  try {
    const getHistorias = await Historias.findAll();
    res.json(getHistorias);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createHistorias = async (req, res) => {
  try {
    const {
      fecha,
      thistoria,
      nombreyapellido,
      edad,
      direccion,
      referencia,
      dni,
      estadocivil,
      telefono,
      celular,
      operacion,
      lugarprocedencia,
      email,
      antecedentes,
      alergias,
      copUsuario,
    } = req.body;
    const newHistorias = await Historias.create({
      fecha,
      thistoria,
      nombreyapellido,
      edad,
      direccion,
      referencia,
      dni,
      estadocivil,
      telefono,
      celular,
      operacion,
      lugarprocedencia,
      email,
      antecedentes,
      alergias,
      copUsuario,
    });
    res.json(newHistorias);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteHistorias = async (req, res) => {
  try {
    const { id } = req.params;

    const historia = await Historias.findByPk(id);

    if (!historia) {
      return res.status(404).json({ message: "Empaque no encontrado" });
    }

    await historia.destroy();

    res.json({ message: "Empaque eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateHistoria = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fecha,
      thistoria,
      nombreyapellido,
      edad,
      direccion,
      referencia,
      dni,
      estadocivil,
      telefono,
      celular,
      operacion,
      lugarprocedencia,
      email,
      antecedentes,
      alergias,
      copUsuario,
    } = req.body;

    const historia = await Historias.findByPk(id);

    if (!historia) {
      return res.status(404).json({ message: "Empaque no encontrado" });
    }

    historia.fecha = fecha;
    historia.thistoria = thistoria;
    historia.nombreyapellido = nombreyapellido;
    historia.edad = edad;
    historia.direccion = direccion;
    historia.referencia = referencia;
    historia.dni = dni;
    historia.estadocivil = estadocivil;
    historia.telefono = telefono;
    historia.celular = celular;
    historia.operacion = operacion;
    historia.lugarprocedencia = lugarprocedencia;
    historia.email = email;
    historia.antecedentes = antecedentes;
    historia.alergias = alergias;
    historia.copUsuario = copUsuario;

    await historia.save();

    res.json(historia);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHistorias,
  createHistorias,
  deleteHistorias,
  updateHistoria,
};
