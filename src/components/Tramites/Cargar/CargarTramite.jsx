import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { FolderIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Alerta from "../../Alerta";
import useTramite from "../../../hooks/useTramite";

const CargarTramite = () => {
  const { cargarExcel } = useTramite();
  const [alerta, setAlerta] = useState({});
  const [archivo, setArchivo] = useState();

  let formData = new FormData();
  formData.append("archivo", archivo);

  const handleFileChange = (file) => {
    setArchivo(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange(file); // Llama a la función onChange con el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) {
      setAlerta({
        msg: "No hay ningún archivo",
        error: true,
      });
      return;
    }
    if (
      archivo.type !== "application/vnd.ms-excel" &&
      archivo.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setAlerta({
        msg: "Solo se admiten archivos de excel xlsx",
        error: true,
      });
      return;
    }
    setAlerta({});
    const { msg, error } = await cargarExcel(formData);
    setAlerta({
      msg,
      error,
    });
    setArchivo("");
  };

  const { msg } = alerta;

  console.log(archivo);

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
          {/* Navegacion Interna */}
          <nav className="flex justify-between" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a className="text-slate-900/[0.8]">
                    <HomeIcon
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
                    Cargar trámites
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap"></div>
          <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
            {" "}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-gray-900">
                    Trámites masivos
                  </h1>
                  <p className="mt-2 text-md text-gray-700">
                    En este apartado puedes cargar un excel, el cual debe
                    contener varios tramites para guardarlos en la base de datos
                  </p>
                </div>
              </div>
              <section className="sm:my-5">
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-md font-semibold leading-6 text-gray-900"
                  >
                    Cargar archivo:
                  </label>
                  <div
                    className={`mt-2 flex justify-center border ${
                      archivo
                        ? "border-indigo-600"
                        : "border-dashed border-gray-900/25"
                    } px-6 py-32`}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="text-center ">
                      <FolderIcon
                        className="mx-auto w-20 text-red-300"
                        aria-hidden="true"
                      />
                      {archivo ? (
                        <>
                          <div>
                            <p className="font-bold text-lg">{archivo.name}</p>

                            <div className="flex justify-between duration-300 gap-x-8 mt-5 items-center ">
                              <button
                                className="bg-blue-400 w-40 duration-400 hover:bg-blue-500 text-slate-50 shadow rounded-2xl font-semibold text-lg py-2 px-5"
                                type="submit"
                                onClick={handleSubmit}
                              >
                                Enviar
                              </button>
                              <button
                                className="bg-red-500 w-40 duration-400 hover:bg-red-600 text-slate-50 shadow rounded-2xl font-semibold text-lg py-2 px-5"
                                onClick={() => setArchivo("")}
                              >
                                Cancelar
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="my-4 flex text-lg text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold sm:text-slate-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 "
                            >
                              <span className="sm:bg-blue-400 duration-300 hover:bg-blue-300 sm:px-4 sm:py-1 sm:mr-1 rounded-lg">
                                Sube tu archivo
                              </span>
                              <input
                                onChange={(e) =>
                                  handleFileChange(e.target.files[0])
                                }
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="">o arrastra y suelta</p>
                          </div>
                          <p className="text-md  text-gray-600">XLSX</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CargarTramite;
