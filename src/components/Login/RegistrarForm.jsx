import { useState } from "react";
import Alerta from "../Alerta";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../../config/axiosClient";

const RegistrarForm = () => {
  const navigate = useNavigate();

  const [alerta, setAlerta] = useState({});
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [comprobarPassword, setComprobarPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, correo, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son necesarios",
        error: true,
      });
      return;
    }

    if (password.length < 7) {
      setAlerta({
        msg: "La contraseña debe tener al menos 8 caracteres",
        error: true,
      });
      return;
    }

    if(password !== comprobarPassword){
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    setAlerta({});
    try {
      await axiosClient.post("/auth/registrar", { nombre, correo, password });
      setAlerta({
        msg: "Usuario registrado correctamente, confirme su cuenta",
        error: false,
      });
    } catch (error) {
      setAlerta({ msg: error.response.data.errors[0].msg, error: true });
    }

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 bg-blue-600/20 h-screen sm:px-6 lg:px-8">
        <img
          className="absolute w-full h-full inset-0 blur-sm opacity-[0.15] object-cover hidden md:block"
          src="https://img.freepik.com/foto-gratis/silos-agricolas-exterior-edificio_146671-19102.jpg?w=740&t=st=1688412992~exp=1688413592~hmac=0d0abcd5b26eda6ff4f8faab0e94660c3bf69b7ad1ee1096bc852653f1831aa3"
          alt=""
        />
        <div className=" relative mt-4 mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-5 shadow sm:rounded-lg sm:px-12">
            <img
              className="mx-auto h-14 w-auto"
              src="https://iktanstrategies.com/LogoStrategies.png"
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Introduce tus datos y regístrate.
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 py-5"
            >
              <div className="mt-2">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                  placeholder="Cristian Antonio"
                  required=""
                  autoComplete="off"
                />
              </div>

              <div className="mt-2">
                <label
                  htmlFor="correo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo Electronico
                </label>
                <input
                  type="email"
                  name="correo"
                  id="correo"
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                  autoComplete="email"
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                  required=""
                />
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
                        placeholder="••••••••"
                        value={comprobarPassword}
                        onChange={(e) => setComprobarPassword(e.target.value)}
                        className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#3366CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar
              </button>
              <div className="text-sm leading-6">
                <Link
                  to="/"
                  className="font-semibold text-slate-800 hover:text-[#3366CC]"
                >
                  ¿Ya tienes una cuenta?, Inicia sesión
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrarForm;
