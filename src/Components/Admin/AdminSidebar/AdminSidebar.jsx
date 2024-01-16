import React from "react";

export default function AdminSidebar() {
  return (
    <div className="text-white  ">
      <div className=" px-4 py-8 flex items-center justify-center border-b border-solid border-gray-50/[0.3] ">
        <a href="" className=" flex  gap-2  text-white ">
          <img
            className="w-24 rounded-full  p-2 border-2 border-solid border-main-200 "
            src="https://avatars.githubusercontent.com/u/137858394?s=400&u=c42efab78b203157feda7631149f5bc265bdafe5&v=4"
            alt=""
          />
          <div className="flex flex-col justify-center items-start">
            <span className="text-3xl">آ.مرادیان</span>
            <span className="text-xl text-main-50">مدیر</span>
          </div>
        </a>
      </div>
      <a href=" " className="text-white ">
        {" "}
        <div className=" pr-4 flex items-center gap-2 py-3 border-solid  border-b border-solid border-gray-50/[0.3] text-2xl transition-all duration-300 hover:text-[1.8rem] hover:bg-main-200 hover:shadow-inner hover:border-r-8 hover:border-main-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
            />
          </svg>

          <span className="">صفحه اصلی</span>
        </div>{" "}
      </a>
      <a href=" " className="text-white ">
        <div className=" pr-4 flex items-center gap-2 py-3 border-solid  border-b border-solid border-gray-50/[0.3] text-2xl transition-all duration-300 hover:text-[1.8rem] hover:bg-main-200 hover:shadow-inner hover:border-r-8 hover:border-main-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          <span className=""> اضافه کردن محصول</span>
        </div>
      </a>
    </div>
  );
}
