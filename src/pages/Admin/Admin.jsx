import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
import { API } from "../../App";
import adminContext from "../../context/adminContext";
import "./Admin.css";

export default function Admin() {
  window.scrollTo(0, 0);
  const [usetInfo, setUsetInfo] = useState();
  const [BG, setBG] = useState();
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
    // fetch(`${API}BGIMG`)
    //   .then((res) => res.json())
    //   .then((allData) => {
    //     setBG(allData);
    //   });
  }, []);
  // console.log(BG[2]);
  return (
    <adminContext.Provider value={usetInfo && usetInfo[0]}>
      <div className="admin bg-main-75 flex bg-cover bg-[url('https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/preview/15.jpg?3')]">
        <div className="lg:w-[20vw] ">
          <AdminSidebar usetInfo={usetInfo && usetInfo[0]} />
        </div>
        <div className={`basis-full   h-screen `}>
          <Outlet />
        </div>
      </div>
    </adminContext.Provider>
  );
}
