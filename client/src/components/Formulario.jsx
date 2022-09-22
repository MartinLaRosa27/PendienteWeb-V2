import { useState } from "react";
import axios from "axios";

export const Formulario = () => {
  const url = `http://${process.env.REACT_APP_BACKEND_URL}/post-pendiente`;

  const [busqueda, setBusqueda] = useState({
    tarea: "",
    descripcion: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(url, {
          tarea: busqueda.tarea,
          descripcion: busqueda.descripcion,
        })
        .then((res) => {
          alert(res.data);
        });
      window.location.reload();
    } catch (e) {
      alert("No se pudo guardar el pendiente");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <legend>Agregar Pendiente</legend>
      <div className="form-grid">
        <div>
          <label>Tarea</label>
          <input
            type="text"
            name="tarea"
            placeholder="Arreglar casa"
            maxLength="90"
            minLength="3"
            value={busqueda.tarea}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="descripcion"
            placeholder="Pintar pared"
            maxLength="255"
            minLength="5"
            value={busqueda.descripcion}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
        </div>
        <input type="submit" value="Guardar"></input>
      </div>
    </form>
  );
};
