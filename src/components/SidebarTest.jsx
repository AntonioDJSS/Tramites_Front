import { useState, Fragment } from "react";
import { navigation } from "./other/navigationData"; // Asegúrate de que la ruta sea correcta
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  KeyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SidebarTest = () => {
  const { auth, cerrarSesion } = useAuth();
  const [open, setOpen] = useState(false);

  // Filtra el arreglo 'navigation' según el rol del usuario
  const filteredNavigation = navigation.filter((item) => {
    if (auth.rol !== "USER_ROLE") {
      // Mostrar elementos que son para todos los usuarios o para el rol de "Admin"
      return item.user !== "User";
    } else {
      // Ocultar el elemento "Tramite" para usuarios de tipo "User"
      return item.user !== "Admin";
    }
  });

  // Obtén el nombre del elemento actual basado en la ruta actual del usuario
  const [currentNavItem, setCurrentNavItem] = useState(
    filteredNavigation.find((item) => item.current)?.name
  );

  const handleItemClick = (itemName) => {
    setCurrentNavItem(itemName);
  };

  //cerrar sesion
  const handleCerrarSesion = async (e) => {
    e.preventDefault();
    await cerrarSesion();
    window.location.reload();
  };

  return (
    <>
      {/* Comienza el responsive */}

      {/* Termina el responsive */}
      <div className="flex">
        <div>
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-gray-900 h-screen p-5  pt-8 relative duration-300`}
        >
          <ChevronLeftIcon
            className={`absolute cursor-pointer -right-3 top-9 h-5 px-2 bg-blue-200 text-black w-7 rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="https://i.imgur.com/fWWekZ9.png"
              className={`cursor-pointer duration-700 h-14 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-400 ${
                !open && "scale-0"
              }`}
            >
              IKTAN Strategies
            </h1>
          </div>
          <div className="mt-5 border-t border-blue-200/20"></div>
          <ul role="list" className="">
            <li>
              <ul role="list" className="">
                {filteredNavigation.map((item, index) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <Link
                        // text-gray-400 group-hover:text-slate-100
                        // hover:text-white hover:bg-gray-800
                        className={classNames(
                          item.name === currentNavItem
                            ? "bg-gray-800 text-slate-100 duration-500 "
                            : "text-gray-400 duration-500 hover:text-slate-100 hover:bg-gray-800",
                          "group cursor-pointer h-[50px] pl-2 my-4 flex items-center gap-x-3  mb-1 relative rounded-md z-10"
                        )}
                        onClick={() => handleItemClick(item.name)}
                        to={item.href}
                      >
                        <div>
                          <item.icon
                            className={classNames(
                              item.name === currentNavItem
                                ? "text-slate-100"
                                : "text-gray-400 group-hover:text-slate-100",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        </div>
                        {open && item.name}
                      </Link>
                    ) : (
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.name === currentNavItem
                                  ? "bg-gray-800 text-slate-100 duration-500 "
                                  : "text-gray-400 duration-500 hover:text-slate-100 hover:bg-gray-800",
                                "group cursor-pointer h-[50px] w-full my-4 pl-2 flex items-center gap-x-3 mb-1 relative rounded-md z-10"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.name === currentNavItem
                                    ? "text-slate-100"
                                    : "text-gray-400 group-hover:text-slate-100",
                                  "h-6 w-6 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                              <ChevronRightIcon
                                // Trancisión de flechas
                                className={classNames(
                                  open
                                    ? "transition ease-in duration-100 ml-auto mr-5 hidden xl:block transform rotate-90"
                                    : "",
                                  "text-slate-200 group-hover:text-slate-100  ml-auto h-5 w-5 shrink-0 mr-5"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            {/* Panel de las categorias desplegables */}
                            <Disclosure.Panel as="ul" className="mt-1 pl-8">
                              {item.children.map((subItem) => (
                                <li key={`${subItem.name}-${index}`}>
                                  {/* 44px */}
                                  <Link
                                    to={subItem.href}
                                    className={classNames(
                                      subItem.name === currentNavItem
                                        ? "bg-gray-800 text-slate-100 duration-500 "
                                        : "text-gray-400 duration-500 hover:text-slate-100 hover:bg-gray-800",
                                      "group cursor-pointer h-[50px] w-full  pl-2 flex items-center gap-x-3 mb-1 relative rounded-md z-10"
                                    )}
                                    onClick={() =>
                                      setCurrentNavItem(subItem.name)
                                    }
                                  >
                                    <div>{subItem.name}</div>
                                  </Link>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    onClick={(e) => handleCerrarSesion(e)}
                    className=" text-slate-200 hover:text-white hover:bg-gray-800 group cursor-pointer duration-500 h-[50px] flex items-center gap-x-3 mb-1 relative rounded-md z-10"
                  >
                    <div>
                      <KeyIcon className="h-6 ml-2 w-6 shrink-0 text-gray-400 group-hover:text-slate-100" />
                    </div>
                    <div className="text-gray-400 group-hover:text-slate-100">
                      <span className={open ? "" : "hidden"}>
                        Cerrar sesión
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
</div>
        <div className="h-screen w-screen">
  <div className="bg-blue-50 rounded-lg m-10 p-6 overflow-y-auto">
    <Outlet />
  </div>
</div>
      </div>
    </>
  );
};
export default SidebarTest;
