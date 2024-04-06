import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { API } from "../../App";
import adminContext from "../../context/adminContext";
import "./Admin.css";
import Swal from "sweetalert2";

export default function Admin() {
  window.scrollTo(0, 0);
  const [
    usetInfo, setUsetInfo] = useState();

  useEffect(() => {
    if (localStorage.getItem("UserName")) {
      fetch(`${API}registered`)
        .then((res) => res.json())
        .then((allData) => {
          setUsetInfo(
            allData.filter((item) => {
              return item.email == localStorage.getItem("UserEmail");
            })
          );
        });
    } else {
      Swal.fire({
        title: "شما لوگین نشده اید",
        text: "ایا مایلید با یک جیمیل پیشفرض وارد شوید",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله عضو شو",
        cancelButtonText: "نه برگرد صفحه اصلی",
      }).then((result) => {
        if (result.isConfirmed) {
          LoginDefult();
        } else {
          navigate("/");
        }
      });
    }
  }, []);

  function LoginDefult() {
    localStorage.setItem("UserEmail", "hesamiwx@gmail.com");
    localStorage.setItem("UserName", "	حسام مرادیان");
    localStorage.setItem("UserPassword", "hesamiwx");

    Swal.fire({
      title: "شما با موفقیت لوگین شدید",
      text: "شما به صورت پیشفرض با اکانت فیک hesamiw@gmail.com وارد شدید",
      icon: "success",
    });
    fetch(`${API}registered`)
      .then((res) => res.json())
      .then((allData) => {
        setUsetInfo(
          allData.filter((item) => {
            return item.email == localStorage.getItem("UserEmail");
          })
        );
      });
  }

  const navigate = useNavigate();

  return (
    <adminContext.Provider value={usetInfo && usetInfo[0]}>
      <div className="admin bg-main-75 flex  bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/premium-photo/background-with-circles-word-bubble-it_327903-2586.jpg?w=1060')]">
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
