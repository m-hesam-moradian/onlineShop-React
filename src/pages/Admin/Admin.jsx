import React from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
// import "./Admin.css";
export default function Admin() {
   window.scrollTo(0, 0);
  return (
    <div className="admin flex">
      <div className="w-96  bg-blue-900 h-screen">
        <AdminSidebar />
      </div>
      <div className="basis-full   h-screen">
        <Outlet />
      </div>
    </div>
  );
}
