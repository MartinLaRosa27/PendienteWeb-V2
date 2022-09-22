const mongoose = require("mongoose");

const pendienteSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [
      true,
      "Todos los pendientes guardados tienen que tener asignado un ID",
    ],
  },

  tarea: {
    type: String,
    required: [true, "El nombre de la tarea no puede estar vacio"],
    maxLength: [90, "El nombre de la tarea puede tener hasta 90 caracteres"],
  },

  descripcion: {
    type: String,
    required: [true, "La desripcion del pendiente no puede estar vacio"],
    maxLength: [
      255,
      "La desripcion del pendiente puede tener hasta 255 caracteres",
    ],
  },

  createdAd: {
    type: Date,
    immutable: [true, "La fecha de creación no se puede modificar."],
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Pendiente", pendienteSchema);
