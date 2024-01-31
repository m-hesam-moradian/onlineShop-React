import React, { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import adminContext from "../../../context/adminContext";

const SideBarItems = [
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

export default function AdminSidebar() {
  const usetInfo = useContext(adminContext);
  const [toggleMessage, setToggleMessage] = useState(false);

  function DropdownMaker() {
    setToggleMessage((bool) => (bool = !bool));
  }

  return (
    <div className="AdminSidebar  text-white flex items-center flex-col bg-[#e9edf2c4] h-full gap-3  ">
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

      

      
    
      

      <NavLink
        to={`/admin/`}
        className="text-admin-text  rounded-full lg:w-4/5"
      >
        {" "}
        <div className=" m-3 flex justify-between items-center group   text-2xl ">
          <div className="flex justify-start items-center  gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <span className="hidden lg:inline">صفحه اصلی</span>
          </div>
        </div>
      </NavLink>

      <NavLink
        to={`/admin/product`}
        className="text-admin-text  rounded-full lg:w-4/5"
      >
        <div className=" m-3 flex justify-between items-center group   text-2xl ">
          <div className="flex justify-start items-center  gap-3 ">
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
            <span className="hidden lg:inline">محصولات</span>
          </div>
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
        </div>
      </NavLink>
      <NavLink
        to={`/admin/Users`}
        className="text-admin-text  rounded-full lg:w-4/5"
      >
        <div className=" m-3 flex justify-between items-center group   text-2xl ">
          <div className="flex justify-start items-center  gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                clip-rule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>

            <span className="hidden lg:inline">کاربران</span>
          </div>
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
        </div>
      </NavLink>

      <NavLink
        to={`/admin/Messages`}
        className="text-admin-text  rounded-full lg:w-4/5 group "
        onClick={() => {
          DropdownMaker();
        }}
      >
        {" "}
        <div className=" m-3 flex justify-between items-center   text-2xl ">
          <div className="flex justify-start items-center  gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 "
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <span className="hidden lg:inline">پیام ها</span>
          </div>
          <div className="hidden  bg-admin-BG  rounded-full px-2 lg:flex justify-center items-center  text-[13px]    text-admin-active  group-hover:bg-admin-active group-hover:text-admin-BG">
            {usetInfo && usetInfo.messagesData.length}
          </div>
        </div>
      </NavLink>
      {toggleMessage && (
        <ul>
          {usetInfo.messagesData.map((item, index) => (
            <li>
              <NavLink
                to={`/admin/Messages/${index + 1}`}
                className="text-admin-text  rounded-full lg:w-4/5 "
              >
                <div className=" m-3 flex justify-between items-center group   text-2xl ">
                  <div className=" lg:flex justify-start items-center  gap-3 ">
                    <img
                      className="w-16 rounded-full  p-1 border-2 border-solid border-[#9696dd]  "
                      src={usetInfo && item.img}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="hidden lg:inline text-black font-bold">
                        {usetInfo && item.from}
                      </span>
                      <span className="text-xl text-admin-text">
                        {" "}
                        {usetInfo && item.seniority}
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      <NavLink
        to={`/admin/logOut`}
        className="text-admin-text  rounded-full lg:w-4/5"
      >
        {" "}
        <div className=" m-3 flex justify-between items-center group   text-2xl ">
          <div className="flex justify-start items-center  gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10"
            >
              <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
            </svg>
            <span className="hidden lg:inline">خروج از اکانت</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
