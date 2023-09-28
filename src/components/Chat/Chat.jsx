import { useState } from "react";
import Mensaje from "./Mensaje";
import {
  ChatBubbleLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import axiosClient from "../../../config/axiosClient";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [categoriasCoincidentes, setCategoriasCoincidentes] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Mostrar los puntos de carga

    try {
      const response = await axiosClient.post(
        "/chatgp3/lambda",
        {
          prompt: inputMsg,
        },
        { withCredentials: true }
      );

      const botResponse = response.data.data.respuesta.body;
      const coincidentes =
        response.data.data.recomendaciones.categoriasCoincidentes;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMsg, type: "user" },
        { text: botResponse, type: "bot" },
      ]);

      setCategoriasCoincidentes(coincidentes);
      console.log("Estas son las coincidencias:", coincidentes);

      setInputMsg("");
    } catch (error) {
      console.error(error.response.data.error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMsg, type: "user" },
        { text: "Hubo un error, inténtelo más tarde", type: "bot" },
      ]);
    } finally {
      setIsLoading(false); // Ocultar los puntos de carga cuando se complete la solicitud
    }
  };

  return (
    <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
        {/* Navegación Interna */}
        <nav className="flex justify-between mb-3" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <a className="text-slate-900/[0.8]">
                  <ChatBubbleLeftIcon
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
                  Chat
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col max-h-full bg-white rounded-lg shadow">
          <div className="flex flex-col flex-1 p-4 overflow-y-scroll">
            {isLoading ? (
              <div className="text-center text-gray-700 py-2">
                Cargando...
              </div>
            ) : messages.length > 0 ? (
              <>
                {messages.map((message, index) => (
                  <Mensaje
                    key={index}
                    text={message.text}
                    type={message.type}
                  />
                ))}
                {/* <div className="grid grid-cols-2 gap-4">
                  {categoriasCoincidentes.map((categoria, index) => (
                    <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                    <div
                      key={index}
                      className=""
                    >
                      <h2 className="text-xl font-semibold">
                        {categoria.categoria}
                      </h2>
                      {categoria.recomendaciones &&
                        categoria.recomendaciones.length > 0 && (
                          <ul>
                            {categoria.recomendaciones.map(
                              (recomendacion, subIndex) => (
                                <li key={subIndex}>
                                  <a href={recomendacion.url}>
                                    {recomendacion.nombre}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                    </div>
                    </div>

                  ))}
                </div> */}
              </>
            ) : (
              <>
                <div className="text-center text-2xl text-gray-700 py-8">
                  ¡Bienvenid@! <br /> ¿En qué puedo ayudarte hoy?
                </div>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit} className="px-4 py-2 border-t">
            <textarea
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-slate-300"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-900 font-medium text-white rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:border-blue-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
