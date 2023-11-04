import React from "react";
import "./ContactUsContainer.css";
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
      <div className="ContactUsWaysToRichUs d-grid justify-content-center  ">
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
        <div className="row m-0 gap-2 my-5  ">
          <div class="ContactUsWaysToRichUsCard card col d-grid gap-4 p-5 border-0  align-items-center  shadow rounded-bottom-5  m-5">
            <div className="d-grid justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M2.66528 11.3333C2.66528 6.66663 5.33195 4.66663 9.33195 4.66663H22.6653C26.6653 4.66663 29.332 6.66663 29.332 11.3333V20.6666C29.332 25.3333 26.6653 27.3333 22.6653 27.3333H9.33195"
                  stroke="#0855DF"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.6681 12L18.4947 15.3333C17.1214 16.4267 14.868 16.4267 13.4947 15.3333L9.33472 12"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 22H10.6653"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 16.6666H6.66528"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">به ما ایمیل بزنید</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
            </div>
          </div>
          <div class="ContactUsWaysToRichUsCard card col d-grid gap-4 p-5 border-0  align-items-center  shadow rounded-bottom-5  m-5">
            <div className="d-grid justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M2.66528 11.3333C2.66528 6.66663 5.33195 4.66663 9.33195 4.66663H22.6653C26.6653 4.66663 29.332 6.66663 29.332 11.3333V20.6666C29.332 25.3333 26.6653 27.3333 22.6653 27.3333H9.33195"
                  stroke="#0855DF"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.6681 12L18.4947 15.3333C17.1214 16.4267 14.868 16.4267 13.4947 15.3333L9.33472 12"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 22H10.6653"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 16.6666H6.66528"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">به ما ایمیل بزنید</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
            </div>
          </div>
          <div class="ContactUsWaysToRichUsCard card col d-grid gap-4 p-5 border-0  align-items-center  shadow rounded-bottom-5  m-5">
            <div className="d-grid justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M2.66528 11.3333C2.66528 6.66663 5.33195 4.66663 9.33195 4.66663H22.6653C26.6653 4.66663 29.332 6.66663 29.332 11.3333V20.6666C29.332 25.3333 26.6653 27.3333 22.6653 27.3333H9.33195"
                  stroke="#0855DF"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.6681 12L18.4947 15.3333C17.1214 16.4267 14.868 16.4267 13.4947 15.3333L9.33472 12"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 22H10.6653"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 16.6666H6.66528"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">به ما ایمیل بزنید</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
            </div>
          </div>
          <div class="ContactUsWaysToRichUsCard card col d-grid gap-4 p-5 border-0  align-items-center  shadow rounded-bottom-5  m-5">
            <div className="d-grid justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M2.66528 11.3333C2.66528 6.66663 5.33195 4.66663 9.33195 4.66663H22.6653C26.6653 4.66663 29.332 6.66663 29.332 11.3333V20.6666C29.332 25.3333 26.6653 27.3333 22.6653 27.3333H9.33195"
                  stroke="#0855DF"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.6681 12L18.4947 15.3333C17.1214 16.4267 14.868 16.4267 13.4947 15.3333L9.33472 12"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 22H10.6653"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.66528 16.6666H6.66528"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">به ما ایمیل بزنید</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                Info@yoursite.com
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 mb-5 p-5">
        <img className="col w-100 rounded-5"
          src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/map-pic-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
