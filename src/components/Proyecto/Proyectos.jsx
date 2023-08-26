import { useEffect, useState } from "react";
import Alerta from "../Alerta";
import { ChevronRightIcon, MapIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import ListProyectos from "./ListProyectos";
import ModalCrearProyecto from "./ModalCrearProyecto";
import useProyecto from "../../hooks/useProyecto";

const Proyectos = () => {
  const { obtenerProyectos, eliminarProyecto, crearProyecto, editarProyecto } =
    useProyecto();

  const [alerta, setAlerta] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [proyectos, setProyectos] = useState([]);
  // form states
  const [idt, setIdt] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [fechainicio, setFechainicio] = useState("");
  const [fechafin, setFechafin] = useState("");
  const [estado, setEstado] = useState("");
  const [reload, setReload] = useState(false);
  //
  const [proyectoSelected, setProyectoSelected] = useState({});

  useEffect(() => {
    console.log("bbbbbbb");
    const mostrarProyectos = async () => {
      const { data } = await obtenerProyectos();
      setProyectos(data.data);
    };
    mostrarProyectos();
  }, [reload]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setProyectoSelected([]);
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta({});
    if (proyectoSelected._id) {
      // const {msg, error} =
      await editarProyecto(
        proyectoSelected._id,
        idt,
        nombre,
        descripcion,
        empresa,
        fechainicio,
        fechafin,
        estado
      );
      setModalIsOpen(false);
      setProyectoSelected([]);
      setAlerta({
        msg,
        error,
      });
      setReload(true);
    } else {
      const { msg, error } = await crearProyecto(
        idt,
        nombre,
        descripcion,
        empresa,
        fechainicio,
        fechafin
      );
      setModalIsOpen(false);
      setAlerta({
        msg,
        error,
      });
      setIdt("");
      setNombre("");
      setDescripcion("");
      setEmpresa("");
      setFechainicio("");
      setFechafin("");
      setReload(true);
    }
  };

  const handleEliminarProyecto = async (id) => {
    setAlerta({});
    const { msg, error } = await eliminarProyecto(id);
    setAlerta({
      msg,
      error,
    });
    setReload(true);
  };

  const hanldeSelectProyecto = (proyecto) => {
    setProyectoSelected(proyecto);
    openModal();
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
                    <MapIcon
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
                    Proyectos
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap">
            <div className="hidden mx-auto md:block text-slate-500">
              Ver proyectos
            </div>
          </div>
          <div className="rounded-md border p-6 mt-2 bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex-auto grow w-full">
                  <h1 className="text-base font-semibold leading-6 text-gray-900">
                    Proyectos
                  </h1>
                  <p className="mt-2 text-md text-gray-700">
                    En este apartado puedes ver tus proyectos y acceder a sus
                    trámites vínculados.
                  </p>
                </div>
                <button
                  onClick={() => openModal()}
                  className="relative w-40 px-4 py-1 border text-slate-50 rounded-md shadow hover:bg-blue-500 bg-blue-400 flex justify-evenly items-center"
                >
                  <PlusIcon className="text-slate-50 w-10" />
                  <span className="text-base font-semibold">
                    Crear proyecto
                  </span>
                </button>
              </div>
              <ModalCrearProyecto
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                handleSubmit={handleSubmit}
                idt={idt}
                nombre={nombre}
                descripcion={descripcion}
                empresa={empresa}
                fechainicio={fechainicio}
                fechafin={fechafin}
                estado={estado}
                setIdt={setIdt}
                setNombre={setNombre}
                setDescripcion={setDescripcion}
                setEmpresa={setEmpresa}
                setFechainicio={setFechainicio}
                setFechafin={setFechafin}
                setEstado={setEstado}
                proyectoSelected={proyectoSelected}
              />
              <div className="-mx-4 mt-5 sm:-mx-0 min-w-full ">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
                >
                  {proyectos.map((proyecto) => (
                    <ListProyectos
                      key={proyecto.id}
                      proyecto={proyecto}
                      // handleEditarProyecto={handleEditarProyecto}
                      handleEliminarProyecto={handleEliminarProyecto}
                      hanldeSelectProyecto={hanldeSelectProyecto}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
