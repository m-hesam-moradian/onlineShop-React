import React, { useEffect, useState } from "react";

import Delete from "../../../HOC/API/Delete.js";
import Get from "../../../HOC/API/Get.js";
import { API } from "../../../App.js";
import Swal from "sweetalert2";
import AdminModal from "./AdminModal.jsx";
import { Button } from "@mui/material";

const AdminTable = () => {
  const [Data, setData] = useState(null);
  const [EditData, setEditData] = useState(true);

  // let obj = {
  //   category: category,
  //   img: link,
  //   model: model,
  //   name: name,
  //   price: price,
  // };

  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(async (allData) => {
        setData(allData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    window.scrollTo(0, 0);
  }, []);

  const deleteItem = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "مطمعنی؟",
        text: " اگر این دیتا حذف شود دیگر برگشتی ندارد",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله حذف کن",
        cancelButtonText: "نه لغو کن",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch("http://localhost:3000/products/" + id, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                setData((previousValue) =>
                  previousValue.filter((item) => item.id !== id)
                );
              } else {
                console.log(response);
              }
            })
            .catch((error) => {
              console.log(error);
            });
          swalWithBootstrapButtons.fire({
            title: "حذف شد",
            text: "فایل شما با ما موفقیت حذف شد",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "لغو شد",
            text: "فایل حذف نشد",
            icon: "error",
          });
        }
      });
  };
  const editModal = (item) => {
    handleOpen();
    setEditData(item);
    // setOpenModal(true);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=" overflow-hidden w-[83vw] p-14 hidden md:block">
      <div class="  relative h-[50vh] overflow-scroll w-[80vw] lg:w-full shadow-md sm:rounded-lg">
        {open && (
          <AdminModal
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            EditData={EditData}
            setData={setData}
          />
        )}
        <table class=" h-min text-right w-full text-xl  rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" text-xl h-min  text-admin-darkmode uppercase bg-admin-text">
            <tr className="text-right text-xl lg:text-2xl h-min">
              <th scope="col" class="px-6 py-3">
                آیدی
              </th>
              <th scope="col" class="px-6 py-3">
                نام محصول
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                قیمت
              </th>
              <th scope="col" class="px-6 py-3">
                ویرایش
              </th>
              <th scope="col" class="px-6 py-3">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {Data &&
              Data.map((item) => {
                return (
                  <tr
                    key={item.id}
                    class="h-min text-sm lg:text-lg odd:bg-admin-navBG  even:bg-admin-hover border-b text-admin-darkmode w-min"
                  >
                    <td class="px-6 py-4 flex items-center text-3xl w-40  justify-between">
                      {item.id}
                      <img
                        className="w-20 rounded-full"
                        src={item.img}
                        alt=""
                      />
                    </td>

                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td class="px-6 py-4 text-xl text-center">
                      {Number(item.price).toLocaleString("en-US")} تومان{" "}
                    </td>
                    <td class="px-6 py-4 text-xl text-center">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          editModal(item);
                        }}
                        class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:scale-125 flex items-center justify-center"
                      >
                        Edit
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6 p-1"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </a>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <a
                        onClick={() => {
                          // Delete(`products/${item.id}`);
                          deleteItem(item.id);
                        }}
                        className=" text-red-600 hover:bg-red-600 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-8 hover:scale-125 duration-300 "
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminTable;
