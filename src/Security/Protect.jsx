import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protect = () => {
  if (sessionStorage.getItem("isAdminLogin")) {
    return <Outlet />;
  }

  return <Navigate to={"/admin_login"} />;
};

export default Protect;
