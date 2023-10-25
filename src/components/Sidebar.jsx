import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  KeyIcon,
  ListBulletIcon,
  PhotoIcon,
  WindowIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/20/solid";

const navigation = [
  {
    user: "User",
    name: "Usuario",
    href: "/dashboard/panel-user",
    icon: PhotoIcon,
    children: [
      { name: "Datos", href: "/dashboard/panel-user" },
      { name: "Contraseña", href: "/dashboard/password-user" },
    ],
  },
  {
    user: "Admin",
    name: "Usuario",
    icon: PhotoIcon,
    children: [
      { name: "Datos", href: "/dashboard/panel-admin" },
      { name: "Contraseña", href: "/dashboard/password-admin" },
    ],
  },
  {
    user: "Admin",
    name: "Catalogo",
    icon: ListBulletIcon,
    current: false,
    children: [
      { name: "Buscar", href: "/dashboard" },
      { name: "Crear", href: "/dashboard/crear" },
      { name: "Editar", href: "/dashboard/editar-buscar" },
      { name: "Cargar excel", href: "/dashboard/cargar" },
    ],
  },
  {
    user: "User",
    name: "Catalogo",
    icon: ListBulletIcon,
    current: false,
    children: [{ name: "Buscar", href: "/dashboard" }],
  },
  {
    name: "Asistente Inteligente",
    href: "/dashboard/chat",
    icon: ChatBubbleBottomCenterIcon,
    current: false,
  },
  {
    name: "Proyecto",
    href: "/dashboard/proyecto",
    icon: WindowIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { auth, cerrarSesion } = useAuth();

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
      {/* BARRA RESPONSIVE */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Componente de barra lateral */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-t from-red-500 via-red-500 to-red-600 px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="w-52 mt-10 hover:opacity-60 duration-500"
                      src="https://imgur.com/J4VrNgH.png"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {filteredNavigation.map((item, index) => (
                            <li key={index}>
                              {!item.children ? (
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    item.name === currentNavItem
                                      ? "bg-black/25 text-white"
                                      : "text-white hover:text-slate-900 hover:bg-[#272727]",
                                    "group cursor-pointer h-[60px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                  )}
                                  onClick={() => handleItemClick(item.name)}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.name === currentNavItem
                                        ? "text-slate-900"
                                        : "text-white group-hover:text-slate-900",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ) : (
                                <Disclosure as="div">
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button
                                        className={classNames(
                                          item.name === currentNavItem
                                            ? "bg-black/25 text-white"
                                            : "text-white hover:text-slate-900 hover:bg-slate-100",
                                          "group cursor-pointer h-[50px] w-full flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            item.name === currentNavItem
                                              ? "text-slate-900"
                                              : "text-white group-hover:text-slate-900",
                                            "h-6 w-6 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                        <ChevronRightIcon
                                          className={classNames(
                                            open
                                              ? "transition ease-in duration-100 ml-auto mr-5 hidden xl:block transform rotate-90"
                                              : "",
                                            "text-white group-hover:text-slate-900 ml-auto h-5 w-5 shrink-0 mr-5"
                                          )}
                                          aria-hidden="true"
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel
                                        as="ul"
                                        className="mt-1 pl-8"
                                      >
                                        {item.children.map((subItem) => (
                                          <li key={subItem.name}>
                                            {/* 44px */}
                                            <Link
                                              to={subItem.href}
                                              className={classNames(
                                                subItem.name === currentNavItem
                                                  ? "bg-black/25 text-white"
                                                  : "text-white hover:text-slate-900 hover:bg-slate-100",
                                                "group cursor-pointer h-[50px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                              )}
                                              onClick={() =>
                                                handleItemClick(subItem.name)
                                              }
                                            >
                                              {subItem.name}
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
                            <a
                              onClick={(e) => handleCerrarSesion(e)}
                              className="text-white hover:bg-black/25 hover:bg-slate-100 group cursor-pointer h-[50px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                            >
                              <KeyIcon className="text-slate-200 group-hover:text-white h-6 w-6 shrink-0" />
                              Cerrar sesión
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Barra lateral estática para escritorio */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-80 lg:flex-col">
        {/* Componente de barra lateral, intercambie este elemento con otra barra lateral si lo desea */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r hover:shadow-2xl hover:shadow-black/10 duration-300 px-10">
          <div className="flex pt-10">
            <div className="mt-5"></div>
          </div>
          <div className="w-full h-px relative"></div>
          <nav className="flex flex-1 flex-col">
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
                              ? "bg-black/5 text-gray-900 duration-500 "
                              : "text-gray-900 duration-500 hover:text-[#272727] hover:bg-black/5",
                            "group cursor-pointer h-[60px] pl-2  flex items-center gap-x-3  mb-1 relative rounded-md z-10"
                          )}
                          onClick={() => handleItemClick(item.name)}
                          to={item.href}
                        >
                          <div>
                            <item.icon
                              className={classNames(
                                item.name === currentNavItem
                                  ? "text-[#272727]"
                                  : "text-[#272727] group-hover:text-[#272727]",
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
                                    ? "bg-black/5 text-gray-900 duration-500 "
                                    : "text-gray-900 duration-500 hover:text-[#272727] hover:bg-black/5",
                                  "group cursor-pointer h-[60px] pl-2  flex items-center gap-x-3  mb-1 relative rounded-md z-10"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.name === currentNavItem
                                      ? "text-[#272727]"
                                      : "text-[#272727] group-hover:text-[#272727]",
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
                                    "text-[#272727] group-hover:text-[#272727]  ml-auto h-5 w-5 shrink-0 mr-5"
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
                                          ? "bg-black/5 text-gray-900 duration-500 "
                                          : "text-gray-900 duration-500 hover:text-[#272727] hover:bg-black/5",
                                        "group cursor-pointer h-[60px] pl-2  flex items-center gap-x-3  mb-1 relative rounded-md z-10"
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
                    {/* <Link
                    onClick={(e) => handleCerrarSesion(e)}
                    className=" text-[#272727] hover:text-white hover:hover:bg-black/5 group cursor-pointer duration-500 h-[50px] flex items-center gap-x-3 mb-1 relative rounded-md z-10"
                  >
                    <div>
                      <KeyIcon className="h-6 ml-2 w-6 shrink-0 text-[#272727] group-hover:text-[#272727]" />
                    </div>
                    <div className="text-[#272727] group-hover:text-[#272727]">
                      <span className={open ? "" : "hidden"}>
                        Cerrar sesión
                      </span>
                    </div>
                  </Link> */}
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
