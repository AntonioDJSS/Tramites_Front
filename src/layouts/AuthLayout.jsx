import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-slate-950">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
