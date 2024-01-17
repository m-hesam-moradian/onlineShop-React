import React from "react";
import { NavLink } from "react-router-dom";

const SideBarItems = [
  {
    link: "",
    name: "صفحه اصلی",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
    secondIcon: "",
  },
  {
    link: "product",
    name: "محصولات",
    icon: (
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
    ),
    secondIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="hidden lg:inline-block w-6 bg-admin-BG text-admin-active p-1 rounded-full group-hover:bg-admin-active group-hover:text-admin-BG"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    ),
  },
  {
    link: "Messages",
    name: "پیام ها",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10 "
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
    secondIcon: (
      <div className="hidden  bg-admin-BG  rounded-full px-2 lg:flex justify-center items-center  text-[13px]">
        4
      </div>
    ),
  },
  {
    link: "logOut",
    name: "خروج از اکانت",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-10"
      >
        <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
      </svg>
    ),
    secondIcon: "",
  },
];

export default function AdminSidebar({ usetInfo }) {
  return (
    <div className="AdminSidebar  text-white flex items-center flex-col bg-[#e9edf2] h-full gap-3  ">
      <div className="pt-6 m-3  flex items-center justify-center  ">
        <a href="" className=" flex  gap-2  text-white rounded-full p-2 ">
          <img
            className="w-28 rounded-full  p-1 border-2 border-solid border-[#9696dd]  "
            src={usetInfo && usetInfo.img}
            alt=""
          />
          <div className=" hidden lg:flex flex-col justify-center items-start">
            <span className="text-3xl text-admin-darkmode ">
              {usetInfo && usetInfo.Name}
            </span>
            <span className="text-xl text-admin-text">
              {" "}
              {usetInfo && usetInfo.seniority}
            </span>
          </div>
        </a>
      </div>
      <a className="text-main-75   btn3d rounded-full lg:w-4/5 ">
        {" "}
        <div className=" m-3 flex    text-2xl  ">
          <input
            type="text"
            className="hidden lg:block focus:text-admin-active bg-transparent w-full"
            placeholder="جست و جو"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class=" w-10"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>{" "}
      </a>
      {SideBarItems.map((item) => (
        <NavLink
          key={item}
          to={`/admin/${item.link}`}
          className="text-admin-text  rounded-full lg:w-4/5"
        >
          {" "}
          <div className=" m-3 flex justify-between items-center group   text-2xl ">
            <div className="flex justify-start items-center  gap-3 ">
              {item.icon}
              <span className="hidden lg:inline">{item.name}</span>
            </div>
            {item.secondIcon}
          </div>{" "}
        </NavLink>
      ))}
    </div>
  );
}
