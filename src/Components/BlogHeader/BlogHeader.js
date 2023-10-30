import React from "react";
import { useState } from "react";
import "./BlogHeader.css";

export default function BlogHeader() {
  const [BlogCategory, setBlogCategory] = useState([
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/honar-cat-1.svg",
      title: "هنر و سینما",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/montakhab-cat-2.svg",
      title: "منتخب سردبیر",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/ketab-cat-3.svg",
      title: "کتاب و ادبیات",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/elm-cat-4.svg",
      title: "علم و تکنولوژی",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/sabk-cat-5.svg",
      title: "سبک زندگی",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/video-cat-6.svg",
      title: "بررسی ویدئویی",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/game-cat-7.svg",
      title: "بازی ویدئویی",
    },
    {
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/box-cat-8.svg",
      title: "آنباکس محصولات",
    },

    // Add more objects as needed
  ]);
  // setBlogCategory([1,2])

  return (
    <div className="bg-light row m-0">
      <div className="BlogCategory row m-0 col-auto">
        <ul className=" bg-white shadow m-4 p-5 px-5 rounded-4 gap-4  d-flex flex-column col-auto">
          {BlogCategory.map((item, index) => (
            <li>
              <a href="" className="d-flex">
                <img className="mx-4" src={item.src} alt="" />
                <span className="text-secondary ">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="BlogArtickles col row m-0">
        <div
          id="miuDesign"
          className="HeaderArtickle col d-flex  shadow-lg  m-5 d-flex justify-content-center align-items-end  text-white  "
        >
          <div className="HeaderArtickleContainer z-1 m-5">
            <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
              <span className="d-flex align-content-center align-items-center ">
                <i aria-hidden="true" class="far fa-comment mx-2"></i>
                بدون نظر
              </span>
              <span className="d-flex align-content-center align-items-center ">
                <span class="material-symbols-outlined fs-3 mx-2">
                  category
                </span>
                دسته: بازی ویدئویی
              </span>
            </span>
            <span className="">
              جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
            </span>
          </div>
        </div>
        
      </div>
      <div className="BlogArtickles col row m-0">
        <div
          id="miuDesign"
          className="HeaderArtickle col d-flex  shadow-lg  m-5 d-flex justify-content-center align-items-end  text-white  "
        >
          <div className="HeaderArtickleContainer z-1 m-5">
            <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
              <span className="d-flex align-content-center align-items-center ">
                <i aria-hidden="true" class="far fa-comment mx-2"></i>
                بدون نظر
              </span>
              <span className="d-flex align-content-center align-items-center ">
                <span class="material-symbols-outlined fs-3 mx-2">
                  category
                </span>
                دسته: بازی ویدئویی
              </span>
            </span>
            <span className="">
              جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
