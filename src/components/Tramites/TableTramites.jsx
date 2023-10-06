import React from "react";
import Pagination from "../Tramites/Pagination";

const TableTramites = ({
  handleSelectedLimit,
  data,
  handleSelectItem,
  paginate,
  siguientePage,
  anteriorPage,
}) => {
  return (
    <>
      <button
        onClick={() => handleSelectedLimit()}
        type="submit"
        className="bg-blue-400 button rounded-3xl duration-500 md:mb-0 py-3 px-6 hover:bg-slate-900 hover:duration-500"
      >
        <span className="text-white font-medium text-[15px]">
          Seleccionar límite
        </span>
      </button>
      <table className="min-w-full divide-y md:h-96 divide">
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

        <tbody className="divide-y divide-gray-200 duration-300 hover:bg-gray-400/5 bg-white">
          {data.length > 0 &&
            data.map((dato) => (
              <tr key={dato._id}>
                <>
                  <td className="w-full max-w-0 pl-4 py-6 pr-3 text-center text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
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
                      className={`text-slate-50  px-7 py-2 rounded-md cursor-pointer ${
                        location.pathname === "/dashboard/editar-buscar"
                          ? "bg-blue-400 duration-300 rounded-2xl hover:bg-blue-500"
                          : "bg-blue-400 duration-300 rounded-2xl hover:bg-blue-500"
                      }`}
                    >
                      {location.pathname === "/dashboard/editar-buscar"
                        ? "Editar"
                        : "Ver"}
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
