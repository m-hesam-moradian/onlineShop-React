import React from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../../Components/Admin/AdminNavbar";
import "./Admin.css";
export default function Admin() {
   window.scrollTo(0, 0);
  return (
    <div className="admin bg-main-50 flex">
      <div className="w-32 bg-white ">
        <AdminSidebar />
      </div>
      <div className="basis-full   h-screen">
        {/* <AdminNavbar/> */}
        <Outlet />
      </div>
    </div>
  );
}
