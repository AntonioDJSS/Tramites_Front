const SelectOpcion = ({
  opciones,
  opcionInput,
  setOpcionInput,
  handleSelectedLimit,
}) => {
  console.log(opcionInput);

  return (
    <div>
      <label className="my-3 block text-slate-900  text-lg" htmlFor="valores">
        Seleccione el límite de trámites a mostrar:
      </label>
      <select
        value={opcionInput}
        onChange={(e) => setOpcionInput(e.target.value)}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="valores"
        id="valores"
      >
        {opciones.map((opcion, i) => (
          <option key={i}>{opcion.opcion}</option>
        ))}
      </select>
      {opcionInput === 0 || opcionInput === "Seleccione una opción" ? (
        <>
          
        </>
      ) : (
        <>
        <button
            onClick={ handleSelectedLimit}
            className="mt-5 text-slate-50 bg-slate-500 hover:bg-slate-600 px-5 py-2 rounded-md cursor-pointer"
          >
            Seleccionar
          </button>
        </>
      )}
    </div>
  );
};

export default SelectOpcion;
