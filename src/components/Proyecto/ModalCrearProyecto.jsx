import { useEffect, useState } from "react";
import Modal from "react-modal";


const ModalCrearProyecto = ({
  modalIsOpen,
  closeModal,
  handleSubmit,
  idt,
  nombre,
  descripcion,
  empresa,
  fechainicio,
  fechafin,
  estado,
  setIdt,
  setNombre,
  setDescripcion,
  setEmpresa,
  setFechainicio,
  setFechafin,
  setEstado,
  proyectoSelected,
}) => {

  useEffect(() => {
    console.log("aaa");
    if (proyectoSelected) {
      setIdt(proyectoSelected.idt);
      setNombre(proyectoSelected.nombre);
      setDescripcion(proyectoSelected.descripcion);
      setEmpresa(proyectoSelected.empresa);
      setFechainicio(proyectoSelected.fechainicio);
      setFechafin(proyectoSelected.fechafin);
      setEstado(proyectoSelected.estado);
    }
  }, [proyectoSelected]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Authentication Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      {/* Main modal */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="relative w-full max-w-xl">
          {/* Modal content */}
          <div className="relative bg-slate-900 rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <h3 className="mb-4 text-xl font-medium text-slate-50">
                Registrar proyecto
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="flex gap-3 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="nombre"
                      className="block mb-2 text-sm font-medium text-slate-50"
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
                <div className="w-full">
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-slate-50"
                  >
                    Descripción:
                  </label>
                  <textarea
                    type="text"
                    name="desc"
                    id="desc"
                    className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Breve descripción del proyecto"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
                <div className="flex gap-3 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="empresa"
                      className="block mb-2 text-sm font-medium text-slate-50"
                    >
                      Empresa:
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      id="empresa"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Nombre de la empresa"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}

                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="fecha-inicio"
                      className="block mb-2 text-sm font-medium text-slate-50"
                    >
                      Fecha de inicio:
                    </label>
                    <input
                      type="date"
                      name="fecha-inicio"
                      id="fecha-inicio"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={fechainicio}
                      onChange={(e) => setFechainicio(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3 w-full">
                  <div className="w-1/2">
                    <label
                      htmlFor="fecha-fin"
                      className="block mb-2 text-sm font-medium text-slate-50"
                    >
                      Fecha de finalización:
                    </label>
                    <input
                      type="date"
                      name="fecha-fin"
                      id="fecha-fin"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={fechafin}
                      onChange={(e) => setFechafin(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="tramites"
                    className="block mb-2 text-sm font-medium text-slate-50"
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
                    <option value="">Selecciona los Tramites</option>
                    <option value="64f03a3b4987e5d442db7b2c">Opción 1</option>
                    <option value="64f03a3b4987e5d442db7bc5">Opción 2</option>
                    <option value="64f03a3b4987e5d442db7bf8">Opción 3</option>
                  </select>

                </div>
                {Object.keys(proyectoSelected).length > 0 && (
                  <div className="w-full">
                    <label
                      htmlFor="estado"
                      className="block mb-2 text-sm font-medium text-slate-50"
                    >
                      Estado:
                    </label>
                    <input
                      type="text"
                      name="estado"
                      id="estado"
                      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                    />
                  </div>
                )}
                {Object.keys(proyectoSelected).length > 0 ? (
                  <input
                    type="submit"
                    value="Editar"
                    className="w-1/5 rounded-md hover:bg-yellow-500 text-slate-50 font-semibold py-1 cursor-pointer bg-yellow-600"
                  />
                ) : (
                  <input
                    type="submit"
                    value="Crear"
                    className="w-1/5 rounded-md hover:bg-green-500 text-slate-50 font-semibold py-1 cursor-pointer bg-green-600"
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
