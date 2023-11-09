import React, { useContext, useState } from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="row m-0 LoginPage">
        <div className="col m-4 ">
          <span className="mb-4 ">عضویت</span>
          <div className="bg-light rounded-5 pb-5 px-5 mt-5">
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                نام کاربری <span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                type="text"
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
              />
            </div>
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                آدرس ایمیل<span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                type="text"
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
              />
            </div>
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                گذرواژه<span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                type="text"
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
              />
            </div>
            <p className="py-5 fs-4 text-secondary">
              اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی
              از تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ
              حریم خصوصی توضیح داده شده است.
            </p>
            <a
              class="btn btn-sm  btn-color fs-4 p-3 rounded-4"
              href="#"
              role="button"
            >
              عضویت
            </a>
          </div>
        </div>
        <div className="col m-4 ">
          <span className="mb-4 ">ورود</span>
          <div className="bg-light rounded-5 pb-5 px-5 mt-5">
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                نام کاربری یا آدرس ایمیل
                <span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                type="text"
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
              />
            </div>
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                گذرواژه<span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                type="text"
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
              />
            </div>

            <a
              class="btn my-5 btn-sm  btn-color fs-4 p-3 rounded-4"
              href="#"
              role="button"
            >
              ورود
            </a>
            <a href="#" className="me-5 fs-4 text-secondary">
              گذرواژه خود را فراموش کرده اید؟
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
