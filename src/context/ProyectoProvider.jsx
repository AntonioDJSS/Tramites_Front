import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

//Se utiliza en los hooks
const ProyectoContext = createContext();

//Children son todos los componentes para que este disponible
//El provider rodea toda la aplicacion en donde vienen los datos
//Toda la informacion que este dentro de return estara disponible en todos los componentes
// eslint-disable-next-line react/prop-types
const ProyectoProvider = ({ children }) => {
  const obtenerProyectos = async (limit = 10, page = 1) => {
    try {
      const data = await axiosClient(`/proyecto?limit=${limit}&page=${page}`, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const crearProyecto = async (
    idt,
    nombre,
    descripcion,
    empresa,
    fechainicio,
    fechafin, 
  ) => {
    console.log(idt,
      nombre,
      descripcion,
      empresa,
      fechainicio,
      fechafin)
    try {
      const res = await axiosClient.post(
        "/proyecto",
        {
          idt,
          nombre,
          descripcion,
          empresa,
          fechainicio,
          fechafin,
          estado: "Iniciado",
        },
        { withCredentials: true }
      );
      console.log(res)
      return { msg: res.data.message, error: false };
    } catch (error) {
      console.log(error)
      return { msg: 'Error al crear el proyecto', error: true };
      
    }
  };

  const editarProyecto = async (
    id,
    idt,
    nombre,
    descripcion,
    empresa,
    fechainicio,
    fechafin,
    estado
  ) => {
    try {
      const res = await axiosClient.put(
        `/proyecto/${id}`,
        {
          idt,
          nombre,
          descripcion,
          empresa,
          fechainicio,
          fechafin,
          estado,
        },
        { withCredentials: true }
      );
      console.log(res);
      return { msg: res.response.data.message, error: false };
    } catch (error) {
      return { msg: 'Error al editar el proyecto', error: true };
      console.log(error);
    }
  };

  const eliminarProyecto = async (id) => {
    try {
      const res = await axiosClient.delete(`/proyecto/${id}`, {
        withCredentials: true,
      });

      if (res && res.data) {
        return { msg: res.data.message, error: false };
      } else {
        return { msg: 'Error al eliminar el proyecto', error: true };
      }
    } catch (error) {
      console.log(error);
      return { msg: 'Error al eliminar el proyecto', error: true };
    }
  };

  return (
    <ProyectoContext.Provider
      value={{
        obtenerProyectos,
        crearProyecto,
        editarProyecto,
        eliminarProyecto,
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};

export { ProyectoProvider };

export default ProyectoContext;
