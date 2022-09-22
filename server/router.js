const express = require("express");
const router = express.Router();
const pendienteController = require("./controllers/PendienteController.js");
const Pendiente = require("./models/Pendiente.js");

module.exports = () => {
  router.get("/get-pendiente", pendienteController.GetPendiente);

  router.post("/post-pendiente", pendienteController.PostPendiente);

  router.delete("/delete-pendiente/:id", pendienteController.DeletePendiente);

  return router;
};
