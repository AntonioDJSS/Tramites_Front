import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrincipalLayout from "./layouts/PrincipalLayout";
import Crear from "./pages/private/Dashboard/Crear";
import Editar from "./pages/private/Dashboard/Editar";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/public/Login";
import Registrar from "./pages/public/Registrar";
import OlvidePassword from "./pages/public/OlvidePassword";
import NuevoPassword from "./pages/public/NuevoPassword";
import ConfirmarCuenta from "./pages/public/ConfirmarCuenta";
import Buscar from "./pages/private/Dashboard/Buscar";
import { AuthProvider } from "./context/AuthProvider";
import { TramiteProvider } from "./context/TramiteProvider";
import Cargar from "./pages/private/Dashboard/Cargar";
import Ver from "./pages/private/Dashboard/Ver";
import EditarBuscar from "./pages/private/Dashboard/EditarBuscar";
import ChatPag from "./pages/private/Dashboard/ChatPag";
import PasswordUser from "./pages/private/Dashboard/User/PasswordUser";
import InformacionUser from "./pages/private/Dashboard/User/InformacionUser";
import InformacionAdmin from "./pages/private/Dashboard/Admin/InformacionAdmin";
import PasswordAdmin from "./pages/private/Dashboard/Admin/PasswordAdmin";
import Page404 from "./pages/public/Page404";
import Proyecto from "./pages/private/Dashboard/Proyecto";
import { ProyectoProvider } from "./context/ProyectoProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TramiteProvider>
            <ProyectoProvider>
              <Routes>
                <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path="registrar" element={<Registrar />} />
                  <Route path="olvide-password" element={<OlvidePassword />} />
                  <Route
                    path="olvide-password/:token"
                    element={<NuevoPassword />}
                  />
                  <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route>

                <Route path="/dashboard" element={<PrincipalLayout />}>
                  <Route index element={<Buscar />} />
                  <Route path="ver" element={<Ver />} />
                  <Route path="crear" element={<Crear />} />
                  <Route path="editar-buscar" element={<EditarBuscar />} />
                  <Route path="editar" element={<Editar />} />
                  <Route path="cargar" element={<Cargar />} />
                  <Route path="chat" element={<ChatPag />} />
                  <Route path="panel-user" element={<InformacionUser />} />
                  <Route path="password-user" element={<PasswordUser />} />
                  <Route path="panel-admin" element={<InformacionAdmin />} />
                  <Route path="password-admin" element={<PasswordAdmin />} />
                  <Route path="proyecto" element={<Proyecto />} />
                </Route>

                <Route path="*" element={<Page404 />} />
              </Routes>
            </ProyectoProvider>
          </TramiteProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
