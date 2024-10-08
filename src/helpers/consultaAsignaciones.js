import data from "../data/asignaciones.json";
import { tipoTSX } from "./asignacion";

export const consultaAsignaciones = () => {
  return new Promise((resolve, reject) => {
    listaOpciones.forEach((tipoTSX) => {
      console.log(opcion.descripcion); // Ahora puedes usar las propiedades con tipos
    });
  });
};
