import {
  ChevronRightIcon,
  EnvelopeIcon,
  UserIcon,
  FolderIcon,
} from "@heroicons/react/20/solid";
import { Tooltip, Typography } from "@material-tailwind/react";
import Alerta from "../Alerta";
import { Switch } from "@headlessui/react";
import useProyecto from "../../hooks/useProyecto";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProyectoPage = () => {
  const { cargarArchivo, obtenerProyectos } = useProyecto();
  const [archivo, setArchivo] = useState(null);
  const [alerta, setAlerta] = useState({});
  const [reload, setReload] = useState(false);
  const [proyecto, setProyecto] = useState({});
  const [enabled, setEnabled] = useState(false);
  const { id } = useParams();
  const [switchStates, setSwitchStates] = useState([]);
  const [archivoUrl, setArchivoUrl] = useState(null);

  console.log(proyecto);

  const toggleSwitch = (index) => {
    // Crea una copia del array switchStates actual
    const updatedSwitchStates = [...switchStates];

    // Cambia el estado en el índice especificado
    updatedSwitchStates[index] = !updatedSwitchStates[index];

    // Actualiza el estado switchStates con el nuevo array
    setSwitchStates(updatedSwitchStates);
  };

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

  const handleSubmit = async (e, idProyecto, idRequisito) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "image/png",
      "image/jpeg",
      "image/gif",
    ];

    e.preventDefault();

    if (!archivo) {
      setAlerta({
        msg: "No hay ningún archivo",
        error: true,
      });
      return;
    }

    if (!allowedTypes.includes(archivo.type)) {
      setAlerta({
        msg: "Solo se admiten archivos de PDF, Excel (xlsx), imágenes (PNG, JPEG, GIF).",
        error: true,
      });
      return;
    }

    setAlerta({});
    try {
      const { msg, error } = await cargarArchivo(
        archivo,
        idProyecto,
        idRequisito
      );
      setAlerta({
        msg,
        error,
      });
    } catch (error) {
      console.error(error);
      setAlerta({
        msg: "Hubo un error al cargar el archivo",
        error: true,
      });
    }
    setArchivo(null);
  };

  useEffect(() => {
    setReload(false);
    const mostrarProyectos = async () => {
      try {
        const { data } = await obtenerProyectos();
        const proyecto = data.data.filter((p) => p._id === id)[0];
        setProyecto(proyecto);
        setReload(true);

        if (proyecto.requisitos) {
          setSwitchStates(proyecto.requisitos.map(() => false));
        }
      } catch (error) {
        console.error(error);
      }
    };
    mostrarProyectos();
  }, [id]);

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}

      <div className="px-4 py-4 md:px-6 lg:px-8">
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
                  Datos de usuario
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
          {reload && proyecto ? (
            <>
              <div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {proyecto.nombre}
                  </h3>
                  <div className="border-b h-1 pt-4"></div>
                  <p className="mt-4 max-w-4xlxl text-sm leading-6 text-gray-500">
                    <span className="font-medium text-amber-500">Notas:</span>{" "}
                    {proyecto.notas}
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Id del proyecto:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto._id}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Id del tramite:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto.idt[0].id}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Status de la tarea:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto.estado}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Fecha de creación del tramite:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto.fechaIngresoTramite}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Fecha de prevención:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto.fechaPrevencion}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Fecha de respuesta:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto.fechaRespuesta}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Fecha de respuesta de prevención:
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {proyecto.fechaRespuestaPrevencion}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-6 sm:px-3">
                      <dt className="text-sm font-medium flex leading-6 text-gray-900">
                        Requisitos del proyecto:{" "}
                        <span className="mt-1 ml-3">
                          <Tooltip
                            placement="right-end"
                            content={
                              <div className="w-80">
                                <Typography
                                  color="white"
                                  className="font-medium"
                                >
                                  ¿Qué son los requisitos?
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal opacity-80"
                                >
                                  Material Tailwind is an easy to use components
                                  library for Tailwind CSS and Material Design.
                                </Typography>
                              </div>
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              className="h-5 w-5 cursor-pointer text-blue-gray-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg>
                          </Tooltip>
                        </span>
                      </dt>
                    </div>
                    <div className="md:grid pt-4 md:grid-cols-3 md:gap-3">
                      {proyecto.requisitos ? (
                        proyecto.requisitos.map((requisito, index) => (
                          <div key={index}>
                            <div className="mt-2 text-sm my-3 md:my-0 text-gray-900 sm:col-span-2 sm:mt-0 ">
                              <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                              >
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div className="flex w-0 flex-1 items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                        clipRule="evenodd"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span className="flex-shrink-0 text-black font-medium">
                                        {requisito.requisito}
                                      </span>
                                    </div>

                                    <Tooltip
                                      placement="top-end"
                                      className="border border-blue-gray-50 bg-black px-4 py-3 shadow-xl shadow-black/10"
                                      content={
                                        <div className="w-80">
                                          <Typography
                                            color="blue-gray"
                                            className="font-medium"
                                          >
                                            Nota:
                                          </Typography>
                                          <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal opacity-80"
                                          >
                                            {requisito.requisitoNotas[0]
                                              ?.contenido ||
                                              "Este requisito no tiene notas"}
                                          </Typography>
                                        </div>
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-5 w-5 cursor-pointer text-blue-gray-500"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        />
                                      </svg>
                                    </Tooltip>
                                  </div>
                                  <div>
                                    {requisito.archivoRequisito &&
                                    requisito.archivoRequisito[0] &&
                                    requisito.archivoRequisito[0].url ? (
                                      <>
                                        <div className="ml-4 flex-shrink-0">
                                          <Switch
                                            checked={true} // Establece el estado como true
                                            onChange={() => toggleSwitch(index)}
                                            className={classNames(
                                              "bg-green-500", // Establece el color a verde
                                              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                                            )}
                                          >
                                            <span className="sr-only">
                                              Use setting
                                            </span>
                                            <span
                                              aria-hidden="true"
                                              className={classNames(
                                                "translate-x-5", // Establece la posición en 5 (verde)
                                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                              )}
                                            />
                                          </Switch>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="ml-4 flex-shrink-0">
                                          <Switch
                                            checked={false} // Establece el estado como false
                                            onChange={() => toggleSwitch(index)}
                                            className={classNames(
                                              "bg-gray-200", // Establece el color a gris
                                              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                                            )}
                                          >
                                            <span className="sr-only">
                                              Use setting
                                            </span>
                                            <span
                                              aria-hidden="true"
                                              className={classNames(
                                                "translate-x-0", // Establece la posición en 0 (gris)
                                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                              )}
                                            />
                                          </Switch>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </li>

                                <div className="m-2">
                                  <button className="relative block w-full p-2">
                                    <div
                                      className={`${
                                        archivo
                                          ? "border-indigo-600"
                                          : "border-dashed border-gray-900/25"
                                      } `}
                                      onDragOver={handleDragOver}
                                      onDragEnter={handleDragEnter}
                                      onDragLeave={handleDragLeave}
                                      onDrop={handleDrop}
                                    >
                                      <div className="text-center ">
                                        {archivo ? (
                                          <>
                                            <div>
                                              <p className="font-medium text-sm">
                                                {archivo.name}
                                              </p>

                                              <div className=" justify-between gap-x-8 mt-4 items-center ">
                                                <div className="border-t border-1 h-1"></div>
                                                <button
                                                  className=" rounded-md duration-500 text-amber-500 hover:text-amber-500/60 font-medium text-sm p-2"
                                                  type="submit"
                                                  onClick={(e) =>
                                                    handleSubmit(
                                                      e,
                                                      proyecto._id,
                                                      requisito._id
                                                    )
                                                  }
                                                >
                                                  Subir aquí
                                                </button>
                                                <div></div>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            {requisito.archivoRequisito &&
                                            requisito.archivoRequisito[0] &&
                                            requisito.archivoRequisito[0].url
                                              .length > 0 ? (
                                              <>
                                                <div className="flex justify-center text-black duration-300 hover:text-black/50">
                                                  <a
                                                    href={
                                                      requisito
                                                        .archivoRequisito[0].url
                                                    }
                                                  >
                                                    <h1 className="text-sm font-semibold mr-2">
                                                      Descargar archivo
                                                    </h1>
                                                  </a>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="w-4 h-4 mt-1"
                                                  >
                                                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                                  </svg>
                                                </div>
                                              </>
                                            ) : (
                                              <>
                                                <h1 className="text-sm font-semibold text-red-500">
                                                  No hay archivos cargados
                                                </h1>
                                              </>
                                            )}
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                {/* <div>
                                  <Button
                                    variant="text"
                                    className="flex items-center gap-2"
                                  >
                                    Descargar documento{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="w-5 h-5"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </Button>
                                </div> */}
                              </ul>
                            </div>
                          </div>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </dl>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="flex justify-center">
            <div className="flex justify-between gap-x-8 mt-4 items-center mr-4">
              <label
                className=" bg-blue-400 w-40 duration-500 rounded-2xl hover:bg-blue-400/50 text-slate-50 font-medium text-sm px-3 py-4"
                htmlFor="file-upload"
              >
                Cargar archivo
                <input
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <div>
              {archivo ? (
                <>
                  <div>
                    <div className="flex justify-between gap-x-8 mt-4 items-center ">
                      <button
                        className="bg-red-500 w-40 duration-500 rounded-2xl hover:bg-red-500/70 text-slate-50 border font-medium text-sm px-3 py-4"
                        onClick={() => setArchivo("")}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-sm font-semibold text-red-500"></h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProyectoPage;
