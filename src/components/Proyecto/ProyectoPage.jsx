import {
    ChevronRightIcon,
    EnvelopeIcon,
    UserIcon,
  } from "@heroicons/react/20/solid";
  import { Switch } from "@headlessui/react";
  import { PaperClipIcon } from "@heroicons/react/20/solid";
  import useProyecto from "../../hooks/useProyecto";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  const ProyectoPage = () => {
    const { obtenerProyectos } = useProyecto();
    const [reload, setReload] = useState(false);
    const [proyecto, setProyecto] = useState({});
    const [enabled, setEnabled] = useState(false);
    const { id } = useParams();
  
    useEffect(() => {
      setReload(false);
      const mostrarProyectos = async () => {
        const { data } = await obtenerProyectos();
        console.log(id);
        const proyecto = data.data.filter((p) => p._id === id)[0];
        setProyecto(proyecto);
        console.log(proyecto);
        setReload(true);
      };
      mostrarProyectos();
    }, []);
  
    const [switchStates, setSwitchStates] = useState([]);
  
    useEffect(() => {
      if (proyecto.requisitos) {
        setSwitchStates(proyecto.requisitos.map(() => false));
      }
    }, [proyecto]);
  
    const toggleSwitch = (index) => {
      const newSwitchStates = [...switchStates];
      newSwitchStates[index] = !newSwitchStates[index];
      setSwitchStates(newSwitchStates);
    };
  
    return (
      <>
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
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
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
                      <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Requisitos de la tarea:
                        </dt>
                        {proyecto.requisitos ? (
                          proyecto.requisitos.map((requisito, index) => (
                            <div key={index}>
                              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
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
                                        <span className="truncate font-medium">
                                          Requisito:
                                        </span>
                                        <span className="flex-shrink-0 text-gray-400">
                                          {requisito.requisito}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                      <Switch
                                        checked={switchStates[index]}
                                        onChange={() => toggleSwitch(index)}
                                        className={classNames(
                                          switchStates[index]
                                            ? "bg-indigo-600"
                                            : "bg-gray-200",
                                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                        )}
                                      >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                          aria-hidden="true"
                                          className={classNames(
                                            switchStates[index]
                                              ? "translate-x-5"
                                              : "translate-x-0",
                                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                          )}
                                        />
                                      </Switch>
                                    </div>
                                  </li>
                                </ul>
                              </dd>
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
          </div>
        </div>
      </>
    );
  };
  
  export default ProyectoPage;
  