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

    if( correo.length < 6){
      setAlerta({
        msg: "El correo es demasiado corto",
        error: true,
      });
    }
    setAlerta({})
    try {
      const  data = await axiosClient.post(
        "/auth/olvide-password",
        { correo }
      );
      console.log(data)
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
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 bg-blue-600/20 h-screen sm:px-6 lg:px-8">
        <img
          className="absolute w-full h-full inset-0 blur-sm opacity-[0.15] object-cover hidden md:block"
          src="https://img.freepik.com/foto-gratis/silos-agricolas-exterior-edificio_146671-19102.jpg?w=740&t=st=1688412992~exp=1688413592~hmac=0d0abcd5b26eda6ff4f8faab0e94660c3bf69b7ad1ee1096bc852653f1831aa3"
          alt=""
        />
        <div className=" relative mt-4 mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-5 shadow sm:rounded-lg sm:px-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-14 w-auto"
                src="https://iktanstrategies.com/LogoStrategies.png"
                alt="Your Company"
              />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Recupera tu contraseña
              </h2>
            </div>

            {msg && <Alerta alerta={alerta} />}

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Correo electronico:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="correo"
                      type="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      autoComplete="email"
                      required=""
                      className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#3366CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar Instrucciones
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
