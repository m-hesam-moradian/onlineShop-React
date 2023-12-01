import React from "react";
import "./ProductInfoHeader.css";
import { handleClick } from "../ProductShower/ProductCard/ProductCard";
import { useState } from "react";
import { useContext } from "react";
import CounterContext from "../../context/CounterContext";

export default function ProductInfoHeader({ ProductData }) {
  const { incrementCount } = useContext(CounterContext);

  return (
    <div className="row m-0 ProductInfoHeader  ">
      <div className="col-12 col-md col-lg-3 rounded-5 shadow m-md-5 p-5 d-grid align-content-center ">
        <img className="h-100 w-100 p-5 " src={ProductData.img} alt="" />
      </div>
      <div className="col row m-0 bg-light rounded-5 m-5 shadow  ">
        <div className="col p-4 d-grid ">
          <div>
            <span className="textColor fs-2 fw-bold p-3 m-auto">
              {ProductData.name}
            </span>
            <hr className="fs-1 text-secondary " />
            <div className="d-flex align-items-center   ">
              <div className="d-flex textColor opacity-50  ">
                <span class="material-symbols-outlined ">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
              </div>
              <span className="fs-5 text-secondary mx-4">(بدون دیدگاه)</span>
              <span class="material-symbols-outlined text-dark opacity-75 ">
                favorite
              </span>
              <span class="material-symbols-outlined text-dark opacity-75 ">
                rule_settings
              </span>
            </div>
          </div>
          <div className="d-grid">
            <span className="textColor fw-bold ">توضیحات محصول</span>
            <ul className="me-5 fs-5 text-secondary gap-1 d-grid ProductInfoHeaderList">
              <li>نوع اتصال:بی‌سیم</li>
              <li>رابط:بلوتوث ، کارت حافظه</li>
              <li>نوع اتصال:بی‌سیم</li>
              <li>رابط:بلوتوث ، کارت حافظه</li>
              <li>نوع اتصال:بی‌سیم</li>
              <li>رابط:بلوتوث ، کارت حافظه</li>
              <li>نوع اتصال:بی‌سیم</li>
            </ul>
          </div>
        </div>
        <div className="col bg-white m-4 rounded-5 d-grid align-content-around p-4">
          <ul className="d-grid gap-4 ">
            <li className="d-flex textColor fs-3 fw-bold">
              <span class="material-symbols-outlined">priority</span>
              <span>طراح سایت</span>
            </li>
            <li className="d-flex text-secondary fw-light  fs-4 me-4 ">
              <span class="material-symbols-outlined">local_shipping</span>
              <span>ارسال توسط فروشگاه</span>
            </li>
            <li className="d-flex text-secondary fw-light fs-4 me-4 ">
              <span class="material-symbols-outlined">done</span>
              <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
            </li>
            <li className="d-flex text-secondary fw-light fs-4 me-4 ">
              <span class="material-symbols-outlined">package_2</span>
              <span>ضمانت تعویض کالا</span>
            </li>
            <li className="d-flex text-secondary fw-light fs-4 me-4 ">
              <span class="material-symbols-outlined">
                deployed_code_history
              </span>
              <span>هزینه حمل به عهده خریدار</span>
            </li>
          </ul>
          <span className=" textColor fs-2 mt-4 fw-bold">
            {ProductData.price}{" "}
            <span className="text-secondary fw-light fs-4">تومان</span>
          </span>
          <a
            onClick={() => {
              handleClick(ProductData);
              incrementCount();
            }}
            class="btn w-100 marketComponentSearchBTN btn-color fs-4 p-3 rounded-4"
          >
            افزودن به سبد خرید
          </a>
        </div>
      </div>
    </div>
  );
}
