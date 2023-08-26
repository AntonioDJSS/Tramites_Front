import { Alert } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function Alerta({ alerta }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (alerta.error) {
      setShow(true);
    }
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, [alerta]);

  return (
    <div className="fixed z-50 bottom-0 right-0 md:top-0">
      <div className="flex items-start px-8 py-8">
        <div className="sm:flex">
          {show && (
            <Alert
              show={show}
              animate={{
                mount: { y: 0 },
                unmount: { y: 100 },
              }}
              className={`${
                alerta.error
                  ? "shadow-md animate-gradient-xy overflow-hidden bg-gradient-to-r from-red-900 to-red-700 via-red-500 "
                  : "shadow-md from-blue-400 to-blue-400"
              } bg-gradient-to-br mb-4`}
            >
              <div className="flex flex-col">
                <div className="absolute right-3 flex flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-[26px] w-5 ml-2 ${
                      alerta.error ? "text-red-100" : "text-blue-100"
                    } cursor-pointer `}
                    onClick={() => setShow(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`mx-auto w-1/5 h-1/5 ${
                    alerta.error ? "text-red-100" : "text-blue-100"
                  } `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>

                <div
                  className={`text-center text-xl font-semibold ${
                    alerta.error ? "text-red-100" : "text-blue-100"
                  } flex-1`}
                >
                  {`${
                    alerta.error ? "Tuvimos un problema." : "Todo salio bien."
                  }`}
                </div>
              </div>

              <div className="mx-8">{alerta.msg}</div>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}