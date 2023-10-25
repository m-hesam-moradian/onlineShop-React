import React from "react";
import "./BottomBanner.css";

export default function BottomBanner() {
  return (
    <div className="BottomBanner">
      <div className="BottomBannerContainer rounded-5 ">
        <div className="BottomBannerBG d-flex h-100 w-100  rounded-5 ">
          <div className="BottomBannerRight col d-flex text-white ">
            <img
              className="BottomBannerIMG me-5"
              src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/banner-3-pic-1.png"
              alt=""
            />
            <div className="d-grid align-content-center align-items-center me-5  ">
              {" "}
              <span className="fs-1 ">
                <span className="fw-bolder ">تسکو؛</span> محصول ایرانی با کیفیت
                بخرید...
              </span>
              <span>گزیده ای از بهترین محصولات برند تسکو</span>
            </div>
          </div>
          <div className="BottomBannerleft col d-flex justify-content-end align-items-center ">
            <div className="BottomBannercontainer d-flex justify-content-center ">
              <a className="BottomBannerBTNs">مشــاهده و خریـد</a>
              <span class="material-symbols-outlined">chevron_left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
