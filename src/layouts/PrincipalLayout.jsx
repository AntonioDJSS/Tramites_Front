import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import useAuth from "../hooks/useAuth";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
// import useTramite from "../hooks/useTramite";

const PrincipalLayout = () => {
  const { auth, cargando } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (cargando) return <Loading />;
  // if(cargandoTramites) return <Loading/>
  if (!auth.uid) return <Navigate to="/" />;


  return (
    <>
      {/* MENU RESPOSIVO */}
      <div className=" flex items-center gap-x-6 bg-slate-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <div className="flex-1 text-sm font-semibold leading-6 text-slate-50">
          Dashboard
        </div>
        <button
          type="button"
          className="-m-2.5 p-2.5 text-slate-50 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div>
      <Navbar/>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="py-8 lg:pl-72 bg-white">
          <div className="xl:px-2 lg:pl-0 lg:pr-4">
            <div className=" rounded-xl xl:ml-10 mt-20 lg:ml-0 lg:mr-4 xl:mr-4">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrincipalLayout;
