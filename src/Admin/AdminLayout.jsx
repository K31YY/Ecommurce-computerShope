import React, { useEffect, useState } from "react";

import "./adminLayout.css";
import { Link, Outlet } from "react-router-dom";

const linkStyle =
  "rounded-lg links px-11 py-4 text-base font-normal text-white";

const AdminLayout = () => {
  const [link, setLink] = useState("dashboard");

  useEffect(() => {
    setLink(sessionStorage.getItem("adminLocation"));
    const links = document.querySelectorAll(".links");

    for (let j = 0; j < links.length; j++) {
      if (links[j].classList.contains("active")) {
        links[j].classList.remove("active");
      }
      switch (link) {
        case "dashboard":
          links[0].classList.add("active");
          break;
        case "product":
          links[1].classList.add("active");
          break;
        case "category":
          links[2].classList.add("active");
          break;
        case "brand":
          links[3].classList.add("active");
          break;
      }
    }
  }, [link]);

  return (
    <div className="admin-layout min-h-dvh">
      <aside className="bg-blue-950">
        <div className="flex h-[90px] w-full items-center justify-center">
          <h1 className="text-3xl font-normal text-white">POS</h1>
        </div>
        <div className="side-bar flex h-[80%] flex-col justify-between">
          <div id="link-container" className="flex flex-col">
            <Link
              onClick={() => changeTab(0)}
              to={"/admin"}
              className={linkStyle}
            >
              Dashborad
            </Link>
            <Link
              onClick={() => changeTab(1)}
              to={"product"}
              className={linkStyle}
            >
              Products
            </Link>
            <Link
              onClick={() => changeTab(2)}
              to={"category"}
              className={linkStyle}
            >
              Categories
            </Link>
            <Link
              onClick={() => changeTab(3)}
              to={"brand"}
              className={linkStyle}
            >
              Brands
            </Link>
            <Link to={"/"} className={linkStyle}>
              E-Commerce
            </Link>
          </div>
          <div>
            <Link
              to={"/admin_login"}
              className="px-11 text-xl text-red-600 underline"
            >
              Log Out
            </Link>
          </div>
        </div>
      </aside>
      <div className="bg-gray-100">
        <div className="width-full h-[60px] bg-white"></div>
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function changeTab(index) {
  const links = document.querySelectorAll(".links");

  for (let i = 0; i < links.length; i++) {
    if (links[i].classList.contains("active")) {
      links[i].classList.remove("active");
    }
    if (i === index) {
      links[i].classList.add("active");
    }
  }
}

export default AdminLayout;