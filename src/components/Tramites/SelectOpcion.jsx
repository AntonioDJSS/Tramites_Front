const SelectOpcion = ({
  opciones,
  opcionInput,
  setOpcionInput,
  handleSelectedLimit,
}) => {
  console.log(opcionInput);

  return (
    <div>
      <div className="border-t border-black/5"></div>
      <label
        className="my-3 block text-slate-900 font-medium"
        htmlFor="valores"
      >
        Seleccione el límite de trámites a mostrar:
      </label>
      <select
        value={opcionInput}
        onChange={(e) => setOpcionInput(e.target.value)}
        className="mt-2 block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="valores"
        id="valores"
      >
        {opciones.map((opcion, i) => (
          <option key={i}>{opcion.opcion}</option>
        ))}
      </select>
      {opcionInput === 0 || opcionInput === "Cantidad de tramites a mostrar" ? (
        <></>
      ) : (
        <>
          <button
            onClick={handleSelectedLimit}
            className="bg-blue-400 button mt-5 rounded-3xl duration-500 md:mb-0 py-3 px-6 hover:bg-slate-900 hover:duration-500"
          >
            <span className="text-white font-medium text-[15px]">
              Buscar tramites
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default SelectOpcion;
