import React from "react";
import "./HeaderBottom.css";

export function HeaderBottomCard() {
  return (
    <div className="CardContainer col ">
      <div class="card d-grid justify-content-center   text-secondary p-4 border-0 rounded-5 shadow ">
        <img
          src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/wifi.svg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">تجهیزات شبکه</h5>
        </div>
        <a class=" text-secondary d-grid justify-content-center rounded-5 ">
          <i aria-hidden="true" class="fas fa-long-arrow-alt-left  "></i>
        </a>
      </div>
    </div>
  );
}

export default function HeaderBottom() {
  return (
    <div className="HeaderBottom  row g-3 ">
      <HeaderBottomCard />
      <HeaderBottomCard />
      <HeaderBottomCard />
      <HeaderBottomCard />
      <div className="IntroHeaderBottom  ">
        <div className=" IntroHeaderBottomlinearBG row">
          <div className="col">
            <span>سیستم های الکترو شاپ؛</span>
            <span class="">
              قدرتمند
              <span>اما</span>
              مقرون به صرفه
            </span>
            <span>مشاهده محصولات </span>
            <span class="material-symbols-outlined">chevron_left</span>
            <a></a>{" "}
          </div>
          <div className="col">
            <img
              src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/second-pic1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
