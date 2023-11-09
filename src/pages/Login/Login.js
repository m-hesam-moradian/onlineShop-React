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
          <div className="bg-light rounded-5  mt-5">
            <div className="px-5 pt-5">
              <span className='fs-4 text-secondary'>
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
            <div className="px-5 pt-5">
              <span className='fs-4 text-secondary'>
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
            <div className="px-5 pt-5">
              <span className='fs-4 text-secondary'>
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
            <p>
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
          <span>عضویت</span>
          <div
            className="bg-light rounded-5 "
          >
            <div className="px-5 pt-5">
              <span className='fs-4 text-secondary'>
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
            <div className="px-5 pt-5">
              <span className='fs-4 text-secondary'>
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
            <div className="px-5 pt-5">
              <span className='fs-4 text-secondary'>
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
            <p>
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
      </div>
      <Footer />
    </>
  );
}
