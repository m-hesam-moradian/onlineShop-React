import React from "react";

export default function AdminSidebar() {
  return (
    <div className="text-white flex items-center flex-col bg-[#e9edf2] h-full gap-3  ">
      <div className="pt-6 m-3  flex items-center justify-center  ">
        <a href="" className=" flex  gap-2  text-white ">
          <img
            className="w-full rounded-full  p-1 border-2 border-solid border-[#9696dd] "
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
        <div className=" m-3  text-[#9696dd]  text-2xl transition-all duration-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>

          {/* <span className="">صفحه اصلی</span> */}
        </div>{" "}
      </a>
      <a href=" " className="text-main-75   rounded-full">
        {" "}
        <div className=" m-3  text-[#9696dd]  text-2xl transition-all duration-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>

          {/* <span className="">صفحه اصلی</span> */}
        </div>{" "}
      </a>
      <a href=" " className="text-main-75   rounded-full">
        {" "}
        <div className=" m-3  text-[#9696dd]  text-2xl transition-all duration-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10"
          >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
            <path
              fill-rule="evenodd"
              d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>

          {/* <span className="">صفحه اصلی</span> */}
        </div>{" "}
      </a>
    </div>
  );
}
