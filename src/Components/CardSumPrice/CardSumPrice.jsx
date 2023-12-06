import React from "react";
import "./CardSumPrice.css";

export default function CardSumPrice({ className, sums }) {
  let sum = 0;
  console.log(JSON.parse(localStorage.getItem("countsCardProducts")));
  JSON.parse(localStorage.getItem("countsCardProducts")).map((obj, index) => {
    console.log(sums);
    obj.sumPrice
      ? (sum += obj.sumPrice)
      : (sum += JSON.parse(localStorage.getItem("countsCardProducts"))[index]
          .price);
  });

  console.log(sum);
  return (
    <div>
      <div class={`grid2 ${className}`}>
        <div class="cell fw-bold ">جمع کل سبد خرید</div>

        <div className="d-flex gap-5  w-100 justify-content-between border-bottom ">
          <div class="cell">
            <span className="fw-light  fs-5 ">جمع جزء</span>
          </div>

          <div class="cell">
            <span className={`textColor num`}>{sum.toLocaleString()}</span>
            <span className="fs-5 text-black ">تومان</span>
          </div>
        </div>
        <div className="d-flex gap-5  w-100 justify-content-between  ">
          <div class="cell">
            <span className="  fs-5 ">مجموع</span>
          </div>

          <div class="cell">
            <span className={`textColor num`}>{sum.toLocaleString()}</span>
            <span className="fs-5 text-black ">تومان</span>
          </div>
        </div>
        <a
          className=" AbloutUsConainerContactUsBtn btn fs-4  btn-color px-4 py-2 rounded-4 mt-4 w-100 "
          href=""
        >
          ادامه جهت تسویه حساب
        </a>
      </div>
    </div>
  );
}