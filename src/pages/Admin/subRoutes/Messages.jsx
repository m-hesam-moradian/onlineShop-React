import React, { useContext } from "react";
import adminContext from "../../../context/adminContext";

export const Messages = () => {
  const usetInfo = useContext(adminContext);
  return (
    
    <div className=" h-full relative shadow-inner overflow-scroll pt-32 text-4xl">
      <nav className=" opacity-60  h-20 shadow bg-admin-text fixed top-0 w-full "></nav>
      <div className="  flex px-5  justify-end w-full">
        <p className="bg-white  rounded-t-3xl p-4 rounded-br-3xl w-full lg:w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem
          culpa numquam maxime dolore nisi officia repudiandae enim? Assumenda
          voluptas asperiores corrupti neque facere facilis dolore enim incidunt
          accusamus quod. Sapiente quidem perferendis quisquam animi accusantium
          ducimus quos praesentium, at nobis nisi soluta? Maiores voluptas
          accusantium eius sapiente necessitatibus ipsam eaque voluptates ut,
          provident eligendi possimus perferendis explicabo aliquam minima!
        </p>
      </div>
      <div className="  flex px-5 my-5   w-full">
        <p className="  rounded-t-3xl p-4 bg-admin-text text-white rounded-bl-3xl w-full lg:w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem
          culpa numquam maxime dolore nisi officia repudiandae enim? Assumenda
          voluptas asperiores corrupti neque facere facilis dolore enim incidunt
          accusamus quod. Sapiente quidem perferendis quisquam animi accusantium
          ducimus quos praesentium, at nobis nisi soluta? Maiores voluptas
          accusantium eius sapiente necessitatibus ipsam eaque voluptates ut,
          provident eligendi possimus perferendis explicabo aliquam minima!
        </p>
      </div>

      <footer className="h-24  sticky bottom-0 w-full flex">
        <a
          href=""
          className="m-3  bg-admin-hover shadow-lg text-admin-text  hover:bg-admin-active hover:text-admin-hover rounded-full flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8  m-3`"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </a>
        <input
          type="text"
          className=" w-full m-3 shadow-lg rounded-full p-3 me-0"
        />
      </footer>
    </div>
  );
};
