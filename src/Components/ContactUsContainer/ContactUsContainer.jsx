import React from "react";

export default function ContactUsContainer() {
  return (

    <div className="ContactUsContainer row m-0">
      <div className="ContactUsForm row mb-5">
        <div className="col-md col-12 d-grid align-content-center  gap-4 p-4">
          <span className="fs-5 text-secondary opacity-75 ">سوالی دارید؟</span>
          <span className="fs-1 fw-bold">
            فرم تماس با
            <span className="textColor"> الکتروشاپ </span>
          </span>
          <div className="row m-0 gap-4 p-3">
            <div class=" col-md col-12 ">
              <label for="" class="form-label fs-4 ">
                نام خود را وارد کنید
              </label>
              <input
                type="text"
                class="form-control p-3 rounded-4 bg-secondary bg-opacity-10 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="نام و نام خانوادگی شما"
              />
            </div>
            <div class=" col ">
              <label for="" class="form-label fs-4 ">
                شماره خود را وارد کنید
              </label>
              <input
                type="text"
                class="form-control p-3 rounded-4 bg-secondary bg-opacity-10 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="شماره تلفن شما"
              />
            </div>
            <div className="col-12">
              <div class="">
                <label for="" class="form-label fs-4 ">
                  پیام خود را بنویسید
                </label>
                <textarea
                  class="form-control p-3 rounded-4 bg-secondary bg-opacity-10 border-0 "
                  name=""
                  id=""
                  rows="3"
                  placeholder="سوالتان در در این قسمت مطرح کنید"
                ></textarea>
              </div>
            </div>

            <a
              class=" AbloutUsConainerContactUsBtn btn fs-3  btn-color px-4 py-2 rounded-4 mt-3"
              href="#"
              role="button"
            >
              ارســال پـیــام
            </a>
          </div>
        </div>
        <div className="col-md col-12 d-flex justify-content-center ">
          <img
            className="w-75  p-5  "
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/contact-us-pic-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="ContactUsWaysToRichUs d-grid justify-content-center ">
        <div className="d-grid justify-content-center">
          <span className="fs-1 fw-bold ">
            <span className="textColor"> تماس </span>
            با ما
          </span>
          <span
            className="fs-5
           text-secondary opacity-75 "
                  >
            ways to contact us
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
