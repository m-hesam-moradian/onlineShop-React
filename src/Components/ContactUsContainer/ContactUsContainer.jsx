import React from "react";
import "./ContactUsContainer.css";
import { useState } from "react";
import { API } from "../../App";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";

export default function ContactUsContainer() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Message, setMessage] = useState("");
  const [active, setactive] = useState(false);

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
                onChange={(event) => {
                  setName(event.target.value);
                  console.log("Name: " + Name);
                }}
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
                onChange={(event) => {
                  setNumber(event.target.value);
                  console.log("Number: " + Number);
                }}
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
                  onChange={(event) => {
                    setMessage(event.target.value);
                    console.log("Message: " + Message);
                  }}
                ></textarea>
              </div>
            </div>

            <a
              class=" AbloutUsConainerContactUsBtn btn fs-3  btn-color px-4 py-2 rounded-4 mt-3"
              href="#"
              role="button"
              onClick={(event) => {
                event.preventDefault();
                Swal.fire({
                  title: "پیام شما با موفقیت ارسال شد",
                  icon: "success",
                });
                console.log("Name: " + Name);
                console.log("Number: " + Number);
                console.log("Message: " + Message);
                const obj = {
                  Name: Name,
                  Number: Number,
                  Message: Message,
                };
                fetch(`${API}ContactUsMessages`)
                  .then((res) => res.json())
                  .then((data) => {
               
                    data.push(obj);

                    fetch(`${API}ContactUsMessages`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    })
                      .then((res) => res.json())
                      .then((allData) => {
                        setactive(true);
                        setTimeout(() => {
                          setactive(false);
                        }, 3000);
                      })
                      .catch((error) => {
                        console.error("Error:", error);
                      });
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });

                console.log(obj);
              }}
            >
              ارســال پـیــام
            </a>
            <Alert variant="success" className={`${!active && "d-none "}`}>
              پیام شما با موفقیت ارسال شد{" "}
            </Alert>
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
                yourname@gmail.com
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
                  d="M15.9986 17.9067C18.2961 17.9067 20.1586 16.0442 20.1586 13.7467C20.1586 11.4492 18.2961 9.58667 15.9986 9.58667C13.7011 9.58667 11.8386 11.4492 11.8386 13.7467C11.8386 16.0442 13.7011 17.9067 15.9986 17.9067Z"
                  stroke="#121212"
                  stroke-width="1.9375"
                ></path>
                <path
                  d="M4.8288 11.32C7.45547 -0.226704 24.5621 -0.21337 27.1755 11.3333C28.7088 18.1066 24.4955 23.84 20.8021 27.3866C18.1221 29.9733 13.8821 29.9733 11.1888 27.3866C7.5088 23.84 3.29547 18.0933 4.8288 11.32Z"
                  stroke="#0855DF"
                  stroke-width="1.9375"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">آدرس مجموعه ما</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                تهران - میدان تجریش
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                یزد - میدان امیرچخماق
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
                  d="M29.3334 16C29.3334 23.36 23.3601 29.3333 16.0001 29.3333C8.64008 29.3333 2.66675 23.36 2.66675 16C2.66675 8.63996 8.64008 2.66663 16.0001 2.66663C23.3601 2.66663 29.3334 8.63996 29.3334 16Z"
                  stroke="#0855DF"
                  stroke-width="2.0625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20.9451 20.24L16.8118 17.7733C16.0918 17.3466 15.5051 16.32 15.5051 15.48V10.0133"
                  stroke="#121212"
                  stroke-width="2.0625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">ساعات کاری</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                شنبه تا پنج شنبه
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                از 8 صبح الی 8 شب
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 mb-5 p-5">
        <img
          className="col w-100 rounded-5"
          src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/map-pic-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
