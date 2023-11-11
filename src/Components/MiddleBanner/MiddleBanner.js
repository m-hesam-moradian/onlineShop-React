import React from "react";

import "./MiddleBanner.css";
import { useNavigate } from "react-router-dom";

export default function MiddleBanner() {
  const navigate = useNavigate();
  return (
    <div className="MiddleBanner">
      <div
        role="button"
        onClick={() => navigate(`/store`)}
        className="MiddleBannerContainr row h-100"
      >
        <div className="col  BigCursor  d-md-flex px-5 rounded-5 m-4 align-items-center py-5">
          <img
            className=""
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/banner-1-pic-1.png"
            alt=""
          />
          <div className="d-grid">
            <span className=" MiddleBannerTitle text-white fs-2 ">
              بهترین ماوس های بازار!
            </span>

            <span className=" opacity-75 text-white">
              مشاهده و خرید محصولات
            </span>
          </div>
        </div>
        <div
          dir="ltr"
          className="col InstagramOffers d-block  d-md-flex px-5 rounded-5 m-4 align-items-center justify-content-between py-5"
        >
          <img
            className=""
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/banner-2-pic-1.png"
            alt=""
          />
          <div dir="rtl" className="d-grid">
            <span className=" MiddleBannerTitle  fs-2">
              از تخفیفات متنوع ما سریع با خبر شو!
            </span>
            <span className=" opacity-75 ">ما را در اینستاگرام دنبال کنید</span>
          </div>
        </div>
      </div>
    </div>
  );
}
