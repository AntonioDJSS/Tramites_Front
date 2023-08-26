import { ChevronRightIcon, UserIcon } from "@heroicons/react/20/solid";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Alerta from "../Alerta";

const Password = () => {
  const { auth, actualizarPassword } = useAuth();
  console.log(auth);

  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Los datos no pueden ir vacios",
        error: true,
      });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({
        msg: "La contraseña no es la misma",
        error: true,
      });
      return;
    }
    if (password.length < 8) {
      setAlerta({
        msg: "La contraseña debe tener mínimo 8 caracteres",
        error: true,
      });
      return;
    }
    setAlerta({});
    const { msg, error } = await actualizarPassword(password);
    setAlerta({
      msg,
      error,
    });
    setPassword("");
    setRepetirPassword("");
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
                    Actualizar contraseña
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap">
            <div className="hidden mx-auto md:block text-slate-500">
              Actualiza tu contraseña.
            </div>
          </div>
          <div className="border p-6 my-8 bg-white">
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto flex flex-col items-center gap-6 md:w-1/2"
            >
              <h3 className="text-2xl md:text-4xl my-5 font-medium">Contraseña</h3>
              <div className="relative my-3 ">
                <img
                  alt="pfp"
                  src="https://iktan-training-production.s3.amazonaws.com/Usuarios/Foto+de+Perfil+Default/default.png"
                  className="shadow-xl border rounded-full h-28 w-full align-middle border-none  "
                />
              </div>
              <div className="flex flex-col w-full gap-6  ">
                <div className="">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-black"
                  >
                    Nueva contraseña:
                  </label>
                  <div className="relative mt-1  shadow-sm">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-2 pt-3 pb-3 text-gray-700 block w-full  border border-slate-500 py-2 px-3 shadow-sm focus:text-black focus:border-[#3366CC] focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="repetir-password"
                    className="block text-sm font-medium text-black"
                  >
                    Repetir contraseña:
                  </label>
                  <div className="relative mt-1  shadow-sm">
                    <input
                      type="password"
                      name="repetir-password"
                      id="repetir-password"
                      value={repetirPassword}
                      onChange={(e) => setRepetirPassword(e.target.value)}
                      className="pl-2 pt-3 pb-3 text-gray-700 block w-full  border border-slate-500 py-2 px-3 shadow-sm focus:text-black focus:border-[#3366CC] focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="bg-white  py-3 text-right  flex ">
                  <button
                    type="submit"
                    className="bg-slate-950 button duration-500 md:mb-0 py-2 px-4  hover:bg-slate-900 hover:duration-500"
                  >
                    <span className="text-white font-bold text-[15px]">
                      Actualizar contraseña
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

export default Password;
