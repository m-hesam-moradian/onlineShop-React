import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AbloutUsConainer.css";

export default function AbloutUsConainer() {
  return (
    <div className="AbloutUsConainer">
      {" "}
      <Navbar />
      <div className="AbloutUsConainerDescribtionContainer gap-4 ">
        <div className="">
          <span className="fs-1 fw-bold ">
            درباره فروشگاه <span className="textColor">الکترو شاپ</span>
          </span>
        </div>
        <div>
          <p className="AbloutUsConainerDescribtion text-black-50 fs-4 mx-5">
            <span className="fw-bolder">فروشگاه اینترنتی الکترو شاپ</span> در
            قلب ایران فعالیت خودش را آغاز نموده است، ما بهترین نوع کالاها را
            برای مردم شریف ایران در این سایت فراهم کرده ایم و برای رضایت و
            خوشحالی شما تلاش میکنیم. ما افتخار می‌کنیم که یکی از معتبرترین
            فروشگاه های اینترنتی در ایران باشیم.
          </p>
        </div>
        <div className="d-flex gap-4 mt-5">
          <a
            class=" AbloutUsConainerContactUsBtn btn fs-3  btn-color px-4 py-2"
            href="#"
            role="button"
          >
            تماس با ما
          </a>
          <button
            type="button"
            class="btn btn-outline-secondary fs-3  px-4 py-2"
          >
            نظرات شما
          </button>
        </div>
        <div>
          {" "}
          <img
            className="AbloutUsConainerHeaderIMG"
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/about-hero-pattern-4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
