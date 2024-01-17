import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../../Components/Admin/AdminNavbar";
import "./Admin.css";
import { API } from "../../App";
export default function Admin() {
  window.scrollTo(0, 0);
    const [usetInfo, setUsetInfo] = useState();
    useEffect(() => {
      fetch(`${API}registered`)
        .then((res) => res.json())
        .then((allData) => {
          setUsetInfo(
            allData.filter((item) => {
              return item.email == localStorage.getItem("UserEmail");
            })
          );
        });
    }, []);
    // console.log(usetInfo[0]);
  return (
    <div className="admin bg-main-75 flex">
      <div className="w-36 lg:w-[30rem] ">
        <AdminSidebar usetInfo={usetInfo && usetInfo[0]} />
      </div>
      <div className="basis-full   h-screen">
        {/* <AdminNavbar/> */}
        <Outlet />
      </div>
    </div>
  );
}
