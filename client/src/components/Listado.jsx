import React, { useEffect, useState } from "react";
import { Formulario } from "./Formulario.jsx";
import axios from "axios";

export const Listado = () => {
  const [pendientes, setPendientes] = useState([]);
  const urlGet = `http://${process.env.REACT_APP_BACKEND_URL}/get-pendiente`;
  const urlDelete = `http://${process.env.REACT_APP_BACKEND_URL}/delete-pendiente`;

  const getPendientes = async () => {
    try {
      await axios.get(urlGet).then((res) => {
        setPendientes(res.data);
      });
    } catch (e) {
      setPendientes([]);
    }
  };

  const deletePendientes = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(`${urlDelete}/${id}`).then((res) => {
        alert(res.data);
      });
      window.location.reload();
    } catch (e) {
      alert("No se pudo eliminar el pendiente");
    }
  };

  useEffect(() => {
    getPendientes();
  }, []);

  return (
    <>
      <header>Lista de Pendientes</header>
      <Formulario />
      <main>
        {pendientes.length === 0 && <h3>No hay pendientes registrados</h3>}
        <ul>
          {pendientes.map((valor) => {
            return (
              <form onSubmit={(e) => deletePendientes(e, valor._id)}>
                <li key={valor._id}>
                  <span>{valor.tarea}</span>: {valor.descripcion}
                  <input type="submit" value="Eliminar"></input>
                </li>
              </form>
            );
          })}
        </ul>
      </main>
    </>
  );
};
