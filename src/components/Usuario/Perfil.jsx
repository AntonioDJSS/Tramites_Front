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
  console.log(auth);

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
                    <UserIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-slate-900/[0.8]" aria-hidden="true" />
                  <a href="" className="ml-4 text-sm font-medium text-slate-900/[0.8]">
                    Datos de usuario
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-start col-span-12 intro-y md:flex-nowrap">
            <div className="hidden mx-auto md:block text-slate-500">Mira o actualiza tu información.</div>
          </div>
          <div className="border hover:scale-95 hover:duration-300 duration-300 rounded-lg p-6 my-8 bg-white">
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto flex flex-col items-center gap-6 md:w-1/2"
            >
              <h3 className="text-2xl md:text-4xl my-5 font-medium">Perfil</h3>
              <div className="relative my-3">
                <img
                  alt="pfp"
                  src="https://iktan-training-production.s3.amazonaws.com/Usuarios/Foto+de+Perfil+Default/default.png"
                  className="shadow-xl border rounded-full h-28 w-full align-middle border-none"
                />
              </div>
              <div className="flex flex-col w-full gap-6">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm font-medium text-black">
                    Nombres:
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="pl-2 pt-3 pb-3 text-gray-700 block w-full border border-slate-500 py-2 px-3 shadow-sm focus:text-black focus:border-[#3366CC] focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="">
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                    Email:
                  </label>
                  <div className="relative mt-1 shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="email"
                      name="correo"
                      id="correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className="pl-10 pt-3 pb-3 text-gray-700 block w-full border border-slate-500 py-2 px-3 shadow-sm focus:text-black focus:border-[#3366CC] focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="bg-white py-3 text-right flex">
                  <button
                    type="submit"
                    className="bg-slate-950 button duration-500 md:mb-0 py-2 px-4 hover:bg-slate-900 hover:duration-500"
                  >
                    <span className="text-white font-bold text-[15px]">Actualizar datos</span>
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
