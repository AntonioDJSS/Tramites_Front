import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const statuses = {
  Iniciado: "text-green-700 bg-green-50 ring-greenn-400",
  "En curso": "text-yellow-600 bg-yellow-50 ring-yellow-500",
  Terminado: "text-red-700 bg-red-50 ring-red-600",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ListProyectos({ proyecto, handleEliminarProyecto, hanldeSelectProyecto }) {
  // console.log(proyecto);
  return (
    <li className="overflow-hidden rounded-md border">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900">
          {proyecto.nombre}
        </div>
        <Menu as="div" className="relative ml-auto">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Ver
                  </a>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => hanldeSelectProyecto(proyecto)}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Editar
                  </a>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => handleEliminarProyecto(proyecto._id)}>
                {({ active }) => (
                  <Link
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Eliminar
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Descripción:</dt>
          <dd className="text-gray-700">{proyecto.descripcion}</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Empresa</dt>
          <dd className="text-gray-700">{proyecto.empresa}</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Fecha de inicio:</dt>
          <dd className="text-gray-700">{proyecto.fechafin}</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Fecha de finalización:</dt>
          <dd className="text-gray-700">{proyecto.fechainicio}</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Estado:</dt>
          <dd className="flex items-start gap-x-2">
            <div
              className={classNames(
                statuses[proyecto.estado],
                "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
              )}
            >
              {proyecto.estado}
            </div>
          </dd>
        </div>
      </dl>
    </li>
  );
}
