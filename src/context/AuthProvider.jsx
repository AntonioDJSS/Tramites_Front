import { createContext, useState } from "react";
import axiosClient from "../../config/axiosClient";
import { useEffect } from "react";
//Se utiliza en los hooks
const AuthContext = createContext();

//Children son todos los componentes para que este disponible
//El provider rodea toda la aplicacion en donde vienen los datos
//Toda la informacion que este dentro de return estara disponible en todos los componentes
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  //comprobar si el usuario sigue autenticado
  useEffect(() => {
    const autenticarUsuario = async () => {
      //obtiene el token del local storage
      const checkToken = localStorage.getItem("checkToken");
      //si no hay checkToken detine la ejecucion
      if (!checkToken) {
        setCargando(false);
        return;
      }
      if ("true" !== checkToken) {
        setCargando(false);
        return;
      }
      //si hay token hace la peticion
      try {
        //traer la info del perfil
        const { data } = await axiosClient("/auth/me", {
          withCredentials: true,
        });
        //asignar la informacion del perfil al state
        setAuth(data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    };
    autenticarUsuario();
  }, []);

  //Actualizar datos perfil
  const actualizarPerfil = async (nombre, correo) => {
    try {
      const data = await axiosClient.put(
        `/auth/`,
        { nombre, correo },
        { withCredentials: true }
      );
      return { msg: data.data.msg, error: false };
    } catch (error) {
      return { msg: error.response.data.error, error: true };
    }
  };

  //actualizar contraseña
  const actualizarPassword = async (password) => {
    try {
      const data = await axiosClient.post(
        "/auth/actual-password",
        { password },
        {
          withCredentials: true,
        }
      );
      return { msg: data.data.msg, error: false };
    } catch (error) {
      console.log(error);
      return { msg: error.response.data.error, error: true };
    }
  };

  // Cerrar sesión
  const cerrarSesion = async () => {
    try {
      await axiosClient("/auth/cerrarSesion", { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesion,
        actualizarPerfil,
        actualizarPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
