import React from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
// import "./Admin.css";
export default function Admin() {
   window.scrollTo(0, 0);
  return (
    <div className="admin flex">
      <div className="w-96  bg-gradient-to-r from-blue-900 to-black h-screen rounded-se-3xl rounded-ee-3xl">
        <AdminSidebar />
      </div>
      <div className="basis-full   h-screen">
        <Outlet />
      </div>
    </div>
  );
}
