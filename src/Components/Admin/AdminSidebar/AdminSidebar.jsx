import React from "react";

export default function AdminSidebar() {
  return (
    <div className="text-white flex items-center flex-col bg-[#e9edf2] h-full ">
      <div className=" px-4 py-8 flex items-center justify-center border-b border-solid border-gray-50/[0.3] ">
        <a href="" className=" flex  gap-2  text-white ">
          <img
            className="w-24 rounded-full  p-2 border-2 border-solid border-main-200 "
            src="https://avatars.githubusercontent.com/u/137858394?s=400&u=c42efab78b203157feda7631149f5bc265bdafe5&v=4"
            alt=""
          />
          {/* <div className="flex flex-col justify-center items-start">
            <span className="text-3xl">آ.مرادیان</span>
            <span className="text-xl text-main-50">مدیر</span>
          </div> */}
        </a>
      </div>
      <a href=" " className="text-main-75  btn3d rounded-full">
        {" "}
        <div className=" m-3  text-main-75  text-2xl transition-all duration-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="text-main-75 w-10"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
              clip-rule="evenodd"
            />
            <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
          </svg>

          {/* <span className="">صفحه اصلی</span> */}
        </div>{" "}
      </a>
    </div>
  );
}
