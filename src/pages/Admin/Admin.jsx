import React from "react";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
// import "./Admin.css";
export default function Admin() {
  return (
    <div className="admin flex">
      <div className="basis-[15%]  bg-main-400 h-screen">
        <AdminSidebar />
      </div>
      <div className="basis-full   h-screen">1</div>
    </div>
  );
}
