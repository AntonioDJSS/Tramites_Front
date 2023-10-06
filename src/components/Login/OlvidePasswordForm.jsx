import { useState } from "react";
import Alerta from "../Alerta";
import { Link } from "react-router-dom";
import axiosClient from "../../../config/axiosClient";

const OlvidePasswordForm = () => {
  const [correo, setCorreo] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (correo === "") {
      setAlerta({
        msg: "El Email es obligatorio",
        error: true,
      });
      return;
    }

    if (correo.length < 6) {
      setAlerta({
        msg: "El correo es demasiado corto",
        error: true,
      });
    }
    setAlerta({});
    try {
      const data = await axiosClient.post("/auth/olvide-password", { correo });
      console.log(data);
      setAlerta({
        msg: data.data.message,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.message,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="flex min-h-full  flex-1 flex-col justify-center py-12 bg-gray-300/80 h-screen sm:px-6 lg:px-8">
      <img
          className="absolute w-full h-full inset-0 blur-sm opacity-5 object-cover hidden md:block"
          src="https://img.freepik.com/foto-gratis/silos-agricolas-exterior-edificio_146671-19102.jpg?w=740&t=st=1688412992~exp=1688413592~hmac=0d0abcd5b26eda6ff4f8faab0e94660c3bf69b7ad1ee1096bc852653f1831aa3"
          alt=""
        />
        <div className=" relative mt-4 mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-5 shadow sm:rounded-3xl duration-500 hover:scale-105 sm:px-12">
        <img
              className="mx-auto h-14 w-auto hover:scale-110 duration-300"
              src="https://imgur.com/yvRmEvN.png"
              alt="Your Company"
            />
                        <div className="border-t mt-5"></div>

              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Recupera tu contraseña
              </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <label
                      htmlFor="correo"
                      className="block text-xs font-medium text-gray-900"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      name="correo"
                      id="correo"
                      onChange={(e) => setCorreo(e.target.value)}
                      value={correo}
                      autoComplete="email"
                      className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>

                <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-3xl hover:scale-95 bg-red-600 px-3 py-4 text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Recuperar contraseña
                </button>
                </div>
              </form>

              <div className="text-sm mt-5 leading-6">
                <Link
                  to="/"
                  className="font-semibold text-slate-800 hover:text-[#3366CC]"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OlvidePasswordForm;
