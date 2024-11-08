import React from "react";
import { Outlet } from "react-router-dom";

const ProtectUser = () => {
  return <Outlet />;
};

export default ProtectUser;
