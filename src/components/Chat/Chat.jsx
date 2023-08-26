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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.post(
        "/chatgp3/lambda",
        {
          prompt: inputMsg,
        },
        { withCredentials: true }
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMsg, type: "user" },
        { text: response.data.data.body, type: "bot" },
      ]);
      console.log(response);
    } catch (error) {
      console.error(error.response.data.error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMsg, type: "user" },
        { text: "Hubo un error, intentelo mas tarde", type: "bot" },
      ]);
    }
    setInputMsg("");
  };

  return (
    <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
        {/* Navegacion Interna */}
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
        <div className="flex flex-col h-[37rem]  bg-white rounded-lg shadow">
          <div className="flex flex-col flex-1 p-4 overflow-y-scroll">
            {messages.length > 0 ? (
              <>
                {messages.map((message, index) => (
                  <Mensaje
                    key={index}
                    text={message.text}
                    type={message.type}
                  />
                ))}
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
