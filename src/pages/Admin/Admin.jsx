import React from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../../Components/Admin/AdminNavbar";
import "./Admin.css";
export default function Admin() {
   window.scrollTo(0, 0);
  return (
    <div className="admin bg-main-75 flex">
      <div className="w-36 lg:w-[30rem] ">
        <AdminSidebar />
      </div>
      <div className="basis-full   h-screen">
        {/* <AdminNavbar/> */}
        <Outlet />
      </div>
    </div>
  );
}
