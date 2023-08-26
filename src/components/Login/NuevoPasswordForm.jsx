import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../Alerta";
import axiosClient from "../../../config/axiosClient";

const NuevoPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [comprobarPassword, setComprobarPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    comprobarToken();
  }, []);

  const comprobarToken = async () => {
    try {
      await axiosClient(`/auth/olvide-password/${token}`);
      setTokenValido(true);
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "El Password debe ser mínimo de 6 caracteres",
        error: true,
      });
      return;
    }

    if (password !== comprobarPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    try {
      const url = `http://localhost:8080/api/auth/olvide-password/${token}`;

      const { data } = await axiosClient.post(url, { password });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 bg-blue-600/20 h-screen sm:px-6 lg:px-8">
        <img
          className="absolute w-full h-full inset-0 blur-sm opacity-[0.15] object-cover hidden md:block"
          src="https://img.freepik.com/foto-gratis/silos-agricolas-exterior-edificio_146671-19102.jpg?w=740&t=st=1688412992~exp=1688413592~hmac=0d0abcd5b26eda6ff4f8faab0e94660c3bf69b7ad1ee1096bc852653f1831aa3"
          alt=""
        />
        <div className="relative mt-2 mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-5 shadow sm:rounded-lg sm:px-12">
            <img
              className="mx-auto h-14 w-auto"
              src="https://iktanstrategies.com/LogoStrategies.png"
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Restablece tu password y no pierdas tu acceso
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {msg && <Alerta alerta={alerta} />}

              {tokenValido && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  action="#"
                  method="POST"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nuevo password:
                      </label>
                      <div className="text-sm"></div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="repetir-password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Repetir password:
                      </label>
                      <div className="text-sm"></div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="repetir-password"
                        name="repetir-password"
                        type="password"
                        autoComplete="current-password"
                        required=""
                        value={comprobarPassword}
                        onChange={(e) => setComprobarPassword(e.target.value)}
                        className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#3366CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Guardar nuevo password
                    </button>
                  </div>
                </form>
              )}

              {passwordModificado && (
                <Link
                  className="font-bold mt-3 block text-slate-800 hover:text-[#3366CC]"
                  to="/"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoPasswordForm;
