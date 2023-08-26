import React from "react";
import Pagination from "../Tramites/Pagination";

const TableTramites = ({handleSelectedLimit, data,handleSelectItem, paginate,siguientePage,anteriorPage}) => {
  return (
    <>
      <button
        onClick={() => handleSelectedLimit()}
        className="text-slate-50 bg-slate-500 hover:bg-slate-600 px-5 py-1 rounded-md cursor-pointer"
      >
        Seleccionar límite
      </button>
      <table className="min-w-full divide-y md:h-96 divide-gray-300">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0">
              Identificador
            </th>
            {data.length > 0 &&
              data[0].tramites.map((tra, idx) => (
                <React.Fragment key={idx}>
                  {idx == 24 ? (
                    <th
                      key={idx}
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      {tra.nombre}
                    </th>
                  ) : (
                    <></>
                  )}
                </React.Fragment>
              ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {data.length > 0 &&
            data.map((dato) => (
              <tr key={dato._id}>
                <>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {" "}
                    {/* Agrega la clase text-center aquí */}
                    {dato.contadorTramites}
                    <dl className="font-normal lg:hidden">
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">
                        {dato.tramites[24].valor}
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-justify text-sm text-gray-700 sm:table-cell">
                    {dato.tramites[24].valor}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-0">
                    <a
                      onClick={() => handleSelectItem(dato)}
                      className={`text-slate-50  px-5 py-2 rounded-md cursor-pointer ${location.pathname === "/dashboard/editar-buscar" ? "bg-yellow-500 hover:bg-yellow-600" :"bg-slate-500 hover:bg-slate-600"}`}
                    
                    >
                      {location.pathname === "/dashboard/editar-buscar" ? "Editar" : "Ver"}
                    </a>
                  </td>
                </>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        paginate={paginate}
        data={data}
        siguientePage={siguientePage}
        anteriorPage={anteriorPage}
      />
    </>
  );
};

export default TableTramites;
