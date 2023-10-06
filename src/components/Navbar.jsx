import { Fragment } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { auth, cerrarSesion } = useAuth();
  console.log(auth)

  const handleCerrarSesion = async (e) => {
    e.preventDefault();
    await cerrarSesion();
    window.location.reload();
  };

  return (
    <div>
      <Popover className="fixed z-50 w-full bg-gradient-to-r from-red-500 via-red-500 to-red-600">
        <div className="mx-auto max-w-7xl border-b border-white/20">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">IKTAN</span>
                <img
                  className="h-8 w-auto duration-500 sm:h-[30px] hover:opacity-50 hover:duration-500"
                  src="https://imgur.com/J4VrNgH.png"
                  alt=""
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

              <button className="font-medium">
                <Link
                  onClick={(e) => handleCerrarSesion(e)}
                  className=" text-white hover:text-red-200 group cursor-pointer duration-500"
                >
                  <span className={open ? "" : "hidden"}>Cerrar sesión</span>
                </Link>
              </button>
              <div className="h-8 border-l border-white/30"></div>
            <div className="font-medium text-white hover:text-red-200 group cursor-pointer duration-500">{auth.nombre}</div>
            <span className="relative inline-block">
              <img
                className="h-8 w-8 rounded-full"
                src={auth.img}
                alt=""
              />
              <span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
            </span>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-[15px] font-medium text-white hover:text-gray-700"
                  >
                    Docs
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
