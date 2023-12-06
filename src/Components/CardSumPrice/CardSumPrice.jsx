import React from "react";
import "./CardSumPrice.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function CardSumPrice({ className, sums }) {
  const navigate = useNavigate();
  let sum = 0;
  JSON.parse(localStorage.getItem("countsCardProducts")).map((obj, index) => {
    obj.sumPrice
      ? (sum += obj.sumPrice)
      : (sum += JSON.parse(localStorage.getItem("countsCardProducts"))[index]
          .price);
  });

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
          onClick={(e) => {
            e.preventDefault();
            //

            Swal.fire({
              title: "به دلیل نداشتن بک اند پروژه این قسمت هنوز ساخته نشده است",
              icon: "warning",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate(`/`);
              }
            });

            //
          }}
        >
          ادامه جهت تسویه حساب
        </a>
      </div>
    </div>
  );
}
