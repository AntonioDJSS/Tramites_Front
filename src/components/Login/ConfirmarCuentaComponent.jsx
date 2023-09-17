import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../Alerta";
import axiosClient from "../../../config/axiosClient";

const ConfirmarCuentaComponent = () => {
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const checkAccount = async () => {
      try {
        const respuesta = await axiosClient.get(`/auth/confirmar/${token}`);
        console.log(respuesta);
        if ((respuesta.data.status = "successful")) {
          setAlerta({
            msg: "En hora buena ¡Tú tokes es valido!",
            error: false,
          });
        }
      } catch (error) {
        setAlerta({
          msg: error.response.data.message,
          error: true,
        });
      }
    };
    checkAccount();
  }, []);


  // useEffect(() => {
  //   peticionToken();
  // }, []);

  // const peticionToken = async () => {
  //   try {
  //     const data = await axiosClient.get(`/auth/confirmar/${token}`);
  //     console.log(data);
  //     setAlerta({
  //       msg: "Su cuenta ha sido confirmada exitosamente",
  //       error: false,
  //     });
  //   } catch (error) {
  //     setAlerta({ msg: error.response.data.msg, error: true });
  //   } finally {
  //     setCuentaConfirmada(true);
  //   }
  // };

  const { msg } = alerta;

  return (
    <>
    <div className="h-screen">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://imgur.com/fWWekZ9.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              {`${
                alerta.error
                  ? "Tuvimos un problema con tu token, la cuenta no fue verificada."
                  : "Tú cuenta fue verificada con exito, bienvenido."
              } `}
            </h2>
          </div>
          <div className="mt-10">{msg && <Alerta alerta={alerta} />}</div>
          <div className="flex min-h-full items-center justify-center py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`${
                  alerta.error
                    ? "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    : "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z."
                } `}
              />
            </svg>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            {`${
              alerta.error
                ? "¿Crees que se trata de un error?"
                : "Ahora puedes "
            } `}
            <a
              href="/"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              {`${
                alerta.error ? "Comunicate con soporte." : "Iniciar Sesión"
              } `}
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
  );
};

export default ConfirmarCuentaComponent;
