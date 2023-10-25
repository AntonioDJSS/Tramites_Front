import { useEffect, useState } from "react";
import Modal from "react-modal";
import useTramite from "../../hooks/useTramite"
import { button } from "@material-tailwind/react";

const ModalCrearProyecto = ({
  modalIsOpen,
  closeModal,
  handleSubmit,
  idt,
  nombre,
  estado,
  fechaIngresoTramite,
  notas,
  setIdt,
  setNombre,
  setEstado,
  setFechaIngresoTramite,
  setNotas,
  proyectoSelected,
}) => {

  const {consultarTramites} = useTramite();
  const [tramites, SetTramites] = useState([]);
  useEffect(() => {
    const getTramites = async() => {
      const {respuesta} = await consultarTramites();
      const {data} = respuesta;
      SetTramites(data?.data);
    }
    if (proyectoSelected) {
      setIdt(proyectoSelected.idt);
      setNombre(proyectoSelected.nombre);
      setEstado(proyectoSelected.estado)
      setFechaIngresoTramite(proyectoSelected.fechaIngresoTramite);
      setNotas(proyectoSelected.notas);
    }
   getTramites();
  }, [proyectoSelected]);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Authentication Modal"
      className="Moda"
      overlayClassName="Overlay"
    >
      {/* Main modal */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed bg-black/30 top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="relative w-full max-w-xl">
          {/* Modal content */}
          <div className="relative bg-white shadow-2xl shadow-black/10 hover:shadow-black/20 hover:scale-105 duration-500 border border-1 ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent duration-300 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600/10"
              data-modal-hide="authentication-modal"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 font-medium text-black">
                Cargar proyecto
              </h3>
              <div className="border-1 border-t mb-4"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-3 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="nombre"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Nombre del proyecto:
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="nombre"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Notas:
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Nombre"
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                    />
                  </div>
                </div>
      
      
                <div className="flex gap-3 w-full">
                  <div className="w-1/2">
                    <label
                      htmlFor="fecha-fin"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Fecha de Ingreso del Tramite:
                    </label>
                    <input
                      type="date"
                      name="fecha-fin"
                      id="fecha-fin"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={fechaIngresoTramite}
                      onChange={(e) => setFechaIngresoTramite(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="estado"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Estado:
                    </label>

                    <select
                      name="estado"
                      id="estado"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                    >
                      <option value="Iniciado">Iniciado</option>
                      <option value="En curso">En curso</option>
                      <option value="Terminado">Terminado</option>
                      {/* Agrega más opciones según tus necesidades */}
                    </select>
                  </div>
                </div>
                {Object.keys(proyectoSelected).length > 0 ? (
                  <button className="hidden"></button>
                ) : (
                    <div className="w-full">
                  <label
                    htmlFor="tramites"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Tramites
                  </label>
                  <select
                    name="tramites"
                    id="tramites"
                    className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={idt}
                    onChange={(e) => setIdt(e.target.value)}
                  >

                    {tramites && tramites.map(tramite => (  <>
                        {" "}
                        <option value={tramite?._id}>
                          {tramite?.tramites[24].valor}
                        </option>
                      </>)
                    )}
                    <option value="">Selecciona los Tramites</option>
                  </select>
                </div>
                )}
          
                {Object.keys(proyectoSelected).length > 0 ? (
                  <input
                    type="submit"
                    value="Editar proyecto"
                    className="justify-center rounded-3xl hover:scale-95 bg-blue-400 px-10 py-3  text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-blue-300 focus-visible:outline "
                    />
                ) : (
                  <input
                    type="submit"
                    value="Crear proyecto"
                    className="justify-center rounded-3xl hover:scale-95 bg-blue-400 px-10 py-3  text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-blue-300 focus-visible:outline "
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCrearProyecto;
