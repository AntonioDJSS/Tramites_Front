import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import useTramite from "../../../hooks/useTramite";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Alerta from "../../Alerta";

const Tramites = () => {
  const { selectedItem, setSelectedItem, descargarTramite } = useTramite();
  const [alerta, setAlerta] = useState({});

  console.log(selectedItem);
  if (selectedItem.length <= 0) return <Navigate to="/dashboard" />;

  const handleDescargarTramite = async () => {
    setAlerta({})
    const { msg, error } = await descargarTramite(selectedItem._id);
    setAlerta({
      msg,
      error,
    });
  };

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="bg-slate-100 rounded-3xl">
        {/* Page title & actions */}
        <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
            {/* Navegacion Interna */}
            <nav
              className="flex justify-between items-center"
              aria-label="Breadcrumb"
            >
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
                      Ver trámite
                    </a>
                  </div>
                </li>
              </ol>
              <div>
                <h2 className="text-slate-500 font-normal">
                  Catalogo de trámites para contratos petroleros
                </h2>
              </div>
            </nav>
            {/* Cuerpo del dash */}
            <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="flex flex-wrap justify-between items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
                <div className="w-72 mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                  <Link
                    onClick={() => setSelectedItem([])}
                    className="bg-red-500 hover:bg-red-400 px-5 py-1.5 text-center rounded-md text-slate-50 font-semibold"
                    to="/dashboard"
                  >
                    Regresar
                  </Link>
                </div>
                <div className="w-72 mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                  <button
                    onClick={() => handleDescargarTramite()}
                    className="bg-green-500 hover:bg-green-400 px-5 py-1.5 text-center rounded-md text-slate-50 font-semibold"
                  >
                    Descargar
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 border rounded-md p-6 mt-6 bg-white gap-4">
              {/* Titulo y Datos */}
              <div className="text-sm sm:col-span-3 col-span-12  grid grid-cols-2 border">
                <h3 className="pl-1 py-1 font-bold text-black border-b whitespace-nowrap">
                  Id:
                </h3>
                <p className="pl-1 border-b">
                  {selectedItem ? selectedItem.contadorTramites : ""}
                </p>
                <h3 className="pl-1 py-1 font-bold text-black border-b whitespace-nowrap">
                  Autoridad:
                </h3>
                <p className="pl-1 border-b">
                  {selectedItem ? selectedItem.tramites[18].valor : ""}
                </p>
                <h3 className="pl-1 py-1 font-bold text-black border-b whitespace-nowrap">
                  Revisión:
                </h3>
                <p className="pl-1 border-b">
                  {selectedItem ? selectedItem.tramites[37].valor : ""}
                </p>
                <h3 className="pl-1 py-1 font-bold text-black border-b whitespace-nowrap">
                  Tipo:
                </h3>
                <p className="pl-1 border-b">
                  {selectedItem ? selectedItem.tramites[0].valor : ""}
                </p>
                <h3 className="pl-1 py-1 font-bold text-black whitespace-nowrap">
                  Homoclave:
                </h3>
                <p className="pl-1">
                  {selectedItem ? selectedItem.tramites[28].valor : ""}
                </p>
              </div>
              <div className="text-sm sm:col-span-9 col-span-12 grid grid-cols-12 border">
                <h3 className="sm:col-span-2 col-span-12 font-bold py-1 pl-1 text-black border-b whitespace-nowrap">
                  Trámite:
                </h3>
                <p className="pl-1 py-1 col-span-12 sm:col-span-10 border-b">
                  {selectedItem ? selectedItem.tramites[24].valor : ""}
                </p>
                <h3 className="sm:col-span-2 col-span-12 py-1 font-bold pl-1 text-black border-b whitespace-nowrap">
                  Regulación:
                </h3>
                <p className="pl-1 py-1  col-span-12 sm:col-span-10 border-b">
                  {selectedItem ? selectedItem.tramites[15].valor : ""}
                </p>
                <h3 className="sm:col-span-2 col-span-12 py-1 font-bold pl-1 text-black whitespace-nowrap">
                  Formato:
                </h3>
                <p className="pl-1 py-1  col-span-12 sm:col-span-10">
                  {selectedItem ? selectedItem.tramites[27].valor : ""}
                </p>
              </div>
              {/* Imagen */}
              <div className="col-span-12 py-2 border">
                <img src="" alt="imagen de prueba" />
              </div>
              {/* Datos e Imagen */}
              <div className="text-sm col-span-12 grid grid-cols-12 border">
                <div className="sm:col-span-3 col-span-12 grid grid-cols-2 border-b">
                  <h3 className="py-1 pl-1 my-auto sm:col-span-1 col-span-12  font-bold text-black border-b-0 ">
                    ¿Genera Resolución?
                  </h3>
                  <p className="py-1 sm:col-span-1 col-span-12 pl-1  my-auto">
                    {selectedItem ? selectedItem.tramites[31].valor : ""}
                  </p>
                </div>
                <div className="sm:col-span-9 col-span-12 col grid grid-cols-11 border-b">
                  <h3 className="py-1 pl-1 my-auto ms:col-start-1 sm:col-end-2 col-span-12 font-bold text-black border-b-0">
                    Resolución:
                  </h3>
                  <p className="px-1 py-1 col-span-12 sm:col-start-3 sm:col-end-12">
                    {selectedItem ? selectedItem.tramites[45].valor : ""}
                  </p>
                </div>
                <div className="col-span-12 grid grid-cols-8 pt-2">
                  {/* primera linea */}
                  <div className="sm:col-span-1 col-span-12 border-b">
                    <h3 className="py-1 font-bold text-black pl-1">
                      Plazo para presentar
                    </h3>
                  </div>
                  <div className="sm:col-span-7 col-span-12 border-b">
                    <p className="pl-3 sm:col-start-3 sm:col-end-13 col-span-12">
                      {selectedItem ? selectedItem.tramites[30].valor : ""}
                    </p>
                  </div>
                  <div className="col-span-12 grid grid-cols-12">
                    <div className="sm:col-span-2 col-span-12 grid grid-cols-2">
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-2 font-bold text-black border-b">
                        Sujeto a Respuesta:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[31].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black border-b">
                        Fecha de Ingreso:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[38].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black border-b">
                        Fecha Maxima de Resolución:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[39].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black border-b">
                        Fecha minima de resolución:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[40].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black border-b">
                        Plazo de Prevención:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[41].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black border-b">
                        Plazo para respuesta a Prevención:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[42].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black border-b">
                        Plazo de Respuesta de la Autoridad:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1 border-b">
                        {selectedItem ? selectedItem.tramites[43].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 py-1 font-bold text-black">
                        Plazo Máximo de Respuesta:
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 py-1">
                        {selectedItem ? selectedItem.tramites[44].valor : ""}
                      </p>
                    </div>
                    <div className="sm:col-span-8 col-span-12 grid grid-cols-6 border-x p-1">
                      <img src="" alt="imagen de prueba" />
                    </div>
                    <div className="sm:col-span-2 col-span-12 grid grid-cols-2">
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 font-bold text-black border-b ">
                        Tiene Monto de Derechos o Aprovechamientos?
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 border-b">
                        {selectedItem ? selectedItem.tramites[33].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 font-bold text-black border-b ">
                        Nombre del Aprovechamiento
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 border-b">
                        {selectedItem ? selectedItem.tramites[34].valor : ""}
                      </p>
                      <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 font-bold text-black border-b ">
                        Monto mxn 2020
                      </h3>
                      <p className="sm:col-span-2 col-span-12 pl-1 ">
                        {selectedItem ? selectedItem.tramites[35].valor : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabla Final */}
              <div className="text-sm sm:col-span-10 col-span-12 grid grid-cols-12 border">
                <h3 className="py-1 pl-1 font-bold text-black border-b sm:col-span-2 col-span-12 ">
                  Detonante:
                </h3>
                <p className="px-2 sm:col-span-10 col-span-12 border-b py-1">
                  {selectedItem ? selectedItem.tramites[19].valor : ""}
                </p>
                <h3 className=" font-bold text-black border-b sm:col-span-2 col-span-12 py-1 pl-1 ">
                  Artículos:
                </h3>
                <p className="pl-2 sm:col-span-10 col-span-12 border-b py-1">
                  {selectedItem ? selectedItem.tramites[17].valor : ""}
                </p>
                <h3 className=" font-bold text-black border-b sm:col-span-2 col-span-12 py-1 pl-1 ">
                  Regulación:
                </h3>
                <p className="pl-2 sm:col-span-10 col-span-12 border-b py-1">
                  {selectedItem ? selectedItem.tramites[46].valor : ""}
                </p>
                <h3 className=" font-bold text-black border-b sm:col-span-2 col-span-12 py-1 pl-1 ">
                  Referencia:
                </h3>
                <p className="pl-2 sm:col-span-10 col-span-12 border-b py-1">
                  {selectedItem ? selectedItem.tramites[47].valor : ""}
                </p>
                <h3 className=" font-bold text-black border-b sm:col-span-2 col-span-12 py-1 pl-1 ">
                  Comentarios:
                </h3>
                <p className="pl-2 sm:col-span-10 col-span-12 border-b py-1">
                  {selectedItem ? selectedItem.tramites[36].valor : ""}
                </p>
                <h3 className=" font-bold text-black sm:col-span-2 col-span-12 py-1 pl-1 ">
                  Requisitos:
                </h3>
                <p className="pl-2 sm:col-span-10 col-span-12">
                  {selectedItem ? selectedItem.tramites[48].valor : ""}
                </p>
              </div>
              <div className="sm:col-span-2 col-span-12 border grid grid-cols-2 text-sm">
                <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 font-bold text-black border-b ">
                  Presentación:
                </h3>
                <p className="sm:col-span-2 col-span-12 pl-1 border-b">
                  {selectedItem ? selectedItem.tramites[23].valor : ""}
                </p>
                <h3 className="sm:col-start-1 sm:col-end-7 col-span-12 pl-1 font-bold text-black border-b ">
                  Periodicidad:
                </h3>
                <p className="sm:col-span-2 col-span-12 pl-1 border-b">
                  {selectedItem ? selectedItem.tramites[29].valor : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tramites;
