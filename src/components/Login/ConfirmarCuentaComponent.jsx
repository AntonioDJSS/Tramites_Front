import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../Alerta";
import axiosClient from "../../../config/axiosClient";

const ConfirmarCuentaComponent = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    peticionToken();
  }, []);

  const peticionToken = async () => {
    try {
      const data = await axiosClient(`/auth/confirmar/${token}`);
      console.log(data);
      setAlerta({
        msg: "Su cuenta ha sido confirmada exitosamente",
        error: false,
      });
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    } finally {
      setCuentaConfirmada(true);
    }
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
        <div className="relative mt-2 mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-5 shadow sm:rounded-lg sm:px-12">
            <img
              className="mx-auto h-14 w-auto"
              src="https://iktanstrategies.com/LogoStrategies.png"
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Confirmar cuenta
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {cuentaConfirmada && (
                <Link
                  className="font-bold text-center text-lg block text-slate-800 hover:text-[#3366CC]"
                  to="/"
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmarCuentaComponent;
