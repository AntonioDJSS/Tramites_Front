import {
  ChevronRightIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Alerta from "../Alerta";

const Perfil = () => {
  const { auth, actualizarPerfil } = useAuth();

  const [alerta, setAlerta] = useState({});
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Renderizar datos de usuario
  useEffect(() => {
    setNombre(auth.nombre);
    setCorreo(auth.correo);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, correo].includes("")) {
      setAlerta({
        msg: "Los datos no pueden ir vacios",
        error: true,
      });
      return;
    }
    setAlerta({});
    const { msg, error } = await actualizarPerfil(nombre, correo);
    setAlerta({
      msg,
      error,
    });
  };

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="px-4 py-4 md:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-4">
          {/* Navegacion Interna */}
          <nav className="flex justify-between" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a className="text-slate-900/[0.8]">
                    <UserIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-slate-900/[0.8]"
                    aria-hidden="true"
                  />
                  <a
                    href=""
                    className="ml-4 text-sm font-medium text-slate-900/[0.8]"
                  >
                    Datos de usuario
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          {/* <div className="flex flex-wrap items-start col-span-12 intro-y md:flex-nowrap">
            <div className="hidden mx-auto md:block text-slate-500">Mira o actualiza tu información.</div>
          </div> */}
          <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto flex flex-col items-center gap-6 md:w-1/2"
            >
              <h3 className="text-2xl md:text-4xl my-5 font-medium">Perfil</h3>
              <div className="relative my-3">
                <img
                  alt="pfp"
                  src="https://iktan-training-production.s3.amazonaws.com/Usuarios/Foto+de+Perfil+Default/default.png"
                  className="border hover:scale-110 duration-200 border-black/20 rounded-full h-28 w-full align-middle"
                />
              </div>
              <div className="flex flex-col w-full gap-6">
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 ">
                  <div className="mt-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-900"
                    >
                      Nombre completo
                    </label>
                  </div>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 ">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Correo Electronico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setCorreo(e.target.value)}
                      value={correo}
                      autoComplete="email"
                      className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="bg-white pb-3 text-right flex">
                  <button
                    type="submit"
                    className="bg-blue-400 button rounded-3xl duration-500 md:mb-0 py-3 px-6 hover:bg-slate-900 hover:duration-500"
                  >
                    <span className="text-white font-medium text-[15px]">
                      Actualizar información
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
