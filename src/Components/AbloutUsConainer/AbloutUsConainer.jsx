import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AbloutUsConainer.css";

export default function AbloutUsConainer() {
  return (
    <div>
      <div className="AbloutUsConainer">
        <Navbar />
        <div className="AbloutUsConainerDescribtionContainer gap-4 ">
          <div className="">
            <span className="fs-1 fw-bold ">
              درباره فروشگاه <span className="textColor">الکتروشاپ</span>
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
      <div className="aboutUsBornStory row m-0 gap-4 ">
        <div className="col-12 col-md d-grid p-5 gap-4 justify-content-lg-center  align-content-center  ">
          {" "}
          <span className="fs-5 text-secondary opacity-75 ">
            درباره ما بیشتر بدانید
          </span>
          <span className="fs-1 fw-bold">
            داستان تـولد <span className="textColor">الکتروشاپ</span>
          </span>
          <p className="AbloutUsConainerDescribtion text-secondary fs-4 ">
            ما افتخار می‌کنیم که یکی از معتبرترین فروشگاه های اینترنتی در ایران
            باشیم. از زمان شروع فعالیتمان در سال 1402، به دلیل کیفیت بالا، قیمت
            رقابتی و خدمات عالی، به گسترش روز افزون کسب و کارمان پی بردیم.
          </p>
          <p className="AbloutUsConainerDescribtion text-secondary fs-4 ">
            امروزه، بیش از صدها هزار مشتری را در سراسر کشور داریم که به ما
            اعتماد کرده‌اند. در الکتروشاپ، تلاش می‌کنیم تا انواع محصولاتی را
            ارائه دهیم که بهترین کیفیت و قیمت را داشته باشند. با مراجعه به سایت
            ما، شما می‌توانید از تجربه خرید آنلاینی لذت ببرید که هیچ کجا دیگر
            نخواهید یافت.
          </p>
        </div>
        <div className="col col-md ">
          <img
            className="m-5"
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/about-pic-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
