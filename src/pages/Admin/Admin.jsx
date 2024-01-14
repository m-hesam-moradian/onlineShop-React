import React from "react";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
// import "./Admin.css";
export default function Admin() {
   window.scrollTo(0, 0);
  return (
    <div className="admin flex">
      <div className="basis-[15%]  bg-main-400 h-screen">
        <AdminSidebar />
      </div>
      <div className="basis-full   h-screen">1</div>
    </div>
  );
}
