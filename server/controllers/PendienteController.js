const Pendiente = require("../models/Pendiente.js");
const shortid = require("shortid");

exports.GetPendiente = async (req, res) => {
  const pendiente = await Pendiente.find();
  res.send(pendiente);
};

exports.PostPendiente = async (req, res) => {
  const { tarea, descripcion } = req.body;
  try {
    const pendiente = await Pendiente.create({
      _id: shortid.generate(),
      tarea: tarea,
      descripcion: descripcion,
    });
    pendiente.save();
    res.send("Pendiente guardado");
  } catch (e) {
    res.send(e.message);
  }
};

exports.DeletePendiente = async (req, res) => {
  const _id = req.params.id;
  try {
    const pendiente = await Pendiente.deleteOne({ _id });
    if (pendiente.deletedCount > 0) {
      res.send("Pendiente eliminado");
    } else {
      res.send("No se elimino el pendiente");
    }
  } catch (e) {
    res.send("No se pudo eliminar el pendiente");
  }
};
