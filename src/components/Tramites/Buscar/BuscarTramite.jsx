import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import useTramite from "../../../hooks/useTramite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from "../../Alerta";
import SelectOpcion from "../SelectOpcion";
import TableTramites from "../TableTramites";

const BuscarTramite = () => {
  const opciones = [
    {
      opcion: "Seleccione una opción",
    },
    {
      opcion: 10,
    },
    {
      opcion: 25,
    },
    {
      opcion: 50,
    },
    {
      opcion: 100,
    },
    {
      opcion: 200,
    },
  ];

  const { setSelectedItem, consultarTramites, buscarTramite } = useTramite();
  const navigate = useNavigate();

  const [alerta, setAlerta] = useState({});
  const [data, setData] = useState([]);
  const [paginate, setPaginate] = useState(1);
  const [nombre, setNombre] = useState("");
  const [opcionInput, setOpcionInput] = useState(0);
  const [limitSelected, setLimitSelected] = useState(false);

  useEffect(() => {
    const traerTramites = async (paginate, opcionInput) => {
      const { respuesta, error } = await consultarTramites(
        paginate,
        opcionInput
      );
      console.log(respuesta);
      if (error) {
        setAlerta({
          msg: error.response.data.error,
          error: true,
        });
        return;
      } else {
        setData(respuesta.data.data);
      }
    };
    traerTramites(paginate, opcionInput);
  }, [paginate, opcionInput]);

  useEffect(() => {
    const buscarTramites = async (paginate, nombre) => {
      const { respuesta, error } = await buscarTramite(paginate, nombre);
      console.log(respuesta);
      if (error) {
        setAlerta({
          msg: error.response.data.error,
          error: true,
        });
        return;
      } else {
        setData(respuesta.data.data);
      }
    };
    buscarTramites(paginate, nombre);
  }, [paginate, nombre, opcionInput]);

  const siguientePage = () => {
    setPaginate(paginate + 1);
  };

  const anteriorPage = () => {
    if (paginate === 0) {
      setPaginate(1);
    } else {
      setPaginate(paginate - 1);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    navigate("/dashboard/ver");
  };

  const handleSelectedLimit = () => {
    if (limitSelected) {
      setLimitSelected(false);
      setPaginate(1);
    } else {
      setLimitSelected(true);
    }
  };

  const { msg } = alerta;

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
                    Buscar trámite
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap">
            <div className="hidden mx-auto md:block text-slate-500">
              Buscar trámite
            </div>
          </div>
          <div className="rounded-md border p-6 mt-2 bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-gray-900">
                    Tramites
                  </h1>
                  <p className="mt-2 text-md text-gray-700">
                    En este apartado puedes buscar y acceder a una vista previa
                    de los trámites que se encuentran en nuestra base de datos.
                  </p>
                </div>
                <div className="relative w-1/2 text-slate-500">
                  {limitSelected && (
                    <>
                      <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="transition duration-200 border w-full ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#3366CC] focus:ring-opacity-20 focus:border-[#3366CC] focus:border-opacity-40  p-3 !box"
                        type="text"
                        placeholder="Buscar trámite por nombre..."
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </>
                  )}
                </div>
              </div>
              <div className="-mx-4 mt-5 sm:-mx-0">
                {limitSelected ? (
                  <>
                    <TableTramites
                    handleSelectedLimit={handleSelectedLimit}
                      data={data}
                      handleSelectItem={handleSelectItem}
                      paginate={paginate}
                      siguientePage={siguientePage}
                      anteriorPage={anteriorPage}
                    />
                  </>
                ) : (
                  <>
                    <div className="min-w-full divide-y md:h-[25rem]">
                      <SelectOpcion
                        opciones={opciones}
                        opcionInput={opcionInput}
                        setOpcionInput={setOpcionInput}
                        handleSelectedLimit={handleSelectedLimit}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuscarTramite;
