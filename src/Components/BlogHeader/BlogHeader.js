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
  const [MainBanner, setMainBanner] = useState([
    {
      date: "16 مهر 1401",
      comment: "2 دیدگاه ها",
      title: "جدیدترین رندرهای شیائومی طراحی جذاب آن را نشان می‌دهند",
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-11.jpg",
    },
    {
      date: "15  مهر  1401",
      comment: "بدون دیدگاه",
      title: "رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود",
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-10.jpg",
    },
    {
      date: "12  مهر  1401",
      comment: "بدون دیدگاه",
      title: "۶ تکنولوژی که دیرتر از رقبا به آیفون آمده‌اند",
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg",
    },
    {
      date: "12 مهر 1401",
      comment: "2 دیدگاه ها",
      title: "۱۰ بازیگر که با نقش‌های منفی اسکار گرفتند",
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-8.jpg",
    },
    {
      date: "11  مهر  1401",
      comment: "بدون دیدگاه",
      title: "بررسی ادوپرفیوم ویکتوریا سکرت",
      src: "https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/perfium-3.jpg",
    },
  ]);
  // setBlogCategory([1,2])

  return (
    <div className="bg-light row m-0">
      <div className="BlogCategory row m-0 col col-md-auto ">
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
      <div className="row col  m-0 m-sm-5 gap-4">
        <div className="col-lg-12 gap-4 row m-0">
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{ backgroundImage: `url(${MainBanner[0].src})` }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner[0].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner[0].date}
                  </span>
                </span>
                <span className="">{MainBanner[0].title}</span>
              </div>
            </div>
          </div>
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{ backgroundImage: `url(${MainBanner[1].src})` }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner[1].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner[1].date}
                  </span>
                </span>
                <span className="">{MainBanner[1].title}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col row gap-4 m-0">
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{ backgroundImage: `url(${MainBanner[2].src})` }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner[2].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner[2].date}
                  </span>
                </span>
                <span className="">{MainBanner[2].title}</span>
              </div>
            </div>
          </div>
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{ backgroundImage: `url(${MainBanner[3].src})` }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner[3].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner[3].date}
                  </span>
                </span>
                <span className="">{MainBanner[3].title}</span>
              </div>
            </div>
          </div>
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{ backgroundImage: `url(${MainBanner[4].src})` }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner[4].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner[4].date}
                  </span>
                </span>
                <span className="">{MainBanner[4].title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
