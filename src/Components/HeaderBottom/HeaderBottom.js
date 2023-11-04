import React from "react";
import "./HeaderBottom.css";

export function HeaderBottomCard() {
  return (
    <div className="CardContainer col ">
      <div class="card d-grid justify-content-center   text-secondary p-4 border-0 rounded-5 shadow h-100">
        <img
          src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/wifi.svg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">تجهیزات شبکه</h5>
        </div>
        <a class=" text-secondary d-grid justify-content-center rounded-5 align-content-around  ">
          <i aria-hidden="true" class="fas fa-long-arrow-alt-left  "></i>
        </a>
      </div>
    </div>
  );
}

export default function HeaderBottom() {
  return (
    <div className="HeaderBottom  row g-3 p-4">
      <HeaderBottomCard />
      <HeaderBottomCard />
      <HeaderBottomCard />
      <HeaderBottomCard />
      <div className="IntroHeaderBottomContainer col-xl-auto ">
        <div className="IntroHeaderBottom  rounded-5 mx-3">
          <div dir="ltr" className=" IntroHeaderBottomlinearBG row rounded-5  ">
            <div className="IntroHeaderBottomLeft col-12 col-sm-6  d-flex justify-content-center justify-content-sm-start m-sm-4  ">
              <img
                className="mx-3"
                src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/second-pic1.png"
                alt=""
              />
            </div>
            <div
              dir="rtl"
              className="IntroHeaderBottomRight d-grid align-content-center  col-12 col-sm  pe-4"
            >
              <span className="text-light d-block fs-2 m-2 ">
                سیستم های الکترو شاپ؛
              </span>
              <span class="text-light d-block fs-2 fw-bolder m-2   ">
                قدرتمند
                <span className="fw-medium m-2">اما</span>
                مقرون به صرفه
              </span>
              <a className="d-flex mt-3 mb-3  mx-2 text-light IntroHeaderBottomBTN  col-auto p-2 pe-3 rounded-5">
                <span>مشاهده محصولات </span>
                <span class="material-symbols-outlined">chevron_left</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
