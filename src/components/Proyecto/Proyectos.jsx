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
  const [estado, setEstado] = useState("Pendiente");
  const [fechaIngresoTramite, setFechaIngresoTramite] = useState("");
  const [notas, setNotas] = useState("");
  const [reload, setReload] = useState(false);

  const [proyectoSelected, setProyectoSelected] = useState({});

  useEffect(() => {
    setReload(false);
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
    setProyectoSelected({});
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta({});

    // Convierte la cadena "idt" en un arreglo separando por comas
    let idtArray = null;
    if (!proyectoSelected._id) {
      idtArray = idt ? idt.split(",").map((id) => id.trim()) : [];
    }

    if (proyectoSelected._id) {
      const { msg, error } = await editarProyecto(
        proyectoSelected._id,
        nombre,
        estado,
        fechaIngresoTramite,
        notas
      );
      setModalIsOpen(false);
      setProyectoSelected({});
      setAlerta({
        msg,
        error,
      });
      setReload(true);
    } else {
      const { msg, error } = await crearProyecto(
        idtArray,
        nombre,
        estado,
        fechaIngresoTramite,
        notas
      );
      setModalIsOpen(false);
      setAlerta({
        msg,
        error,
      });
      setIdt("");
      setNombre("");
      setEstado("");
      setFechaIngresoTramite("");
      setNotas("");
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
          <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap"></div>
          <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
            {" "}
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
                  className="relative px-6 py-2  text-white rounded-lg  hover:bg-blue-300 duration-500 bg-blue-400 flex justify-evenly items-center"
                >
                  <PlusIcon className="text-white w-6" />
                  <span className="text-sm font-semibold">Nuevo proyecto</span>
                </button>
              </div>
              <ModalCrearProyecto
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                handleSubmit={handleSubmit}
                idtArray={idt}
                nombre={nombre}
                estado={estado}
                fechaIngresoTramite={fechaIngresoTramite}
                notas={notas}
                setIdt={setIdt}
                setNombre={setNombre}
                setEstado={setEstado}
                setFechaIngresoTramite={setFechaIngresoTramite}
                setNotas={setNotas}
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
