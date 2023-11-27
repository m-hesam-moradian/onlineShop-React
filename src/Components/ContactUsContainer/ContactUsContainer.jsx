import React from "react";
import "./ContactUsContainer.css";
import { useState } from "react";
import { API } from "../../FirebaseDatas";
import { Alert } from "react-bootstrap";
import swal from "sweetalert";
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
                fetch(`${API}ContactUsMessages.json`)
                  .then((res) => res.json())
                  .then((data) => {
               
                    data.push(obj);

                    fetch(`${API}ContactUsMessages.json`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    })
                      .then((res) => res.json())
                      .then((allData) => {
                        // console.log(allData);
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
                  d="M29.2934 24.44C29.2934 24.92 29.1867 25.4133 28.9601 25.8933C28.7334 26.3733 28.4401 26.8266 28.0534 27.2533C27.4001 27.9733 26.6801 28.4933 25.8667 28.8266C25.0667 29.16 24.2001 29.3333 23.2667 29.3333C21.9067 29.3333 20.4534 29.0133 18.9201 28.36C17.3867 27.7066 15.8534 26.8266 14.3334 25.72C12.8001 24.6 11.3467 23.36 9.96008 21.9866C8.58675 20.6 7.34675 19.1466 6.24008 17.6266C5.14675 16.1066 4.26675 14.5866 3.62675 13.08C2.98675 11.56 2.66675 10.1066 2.66675 8.71996C2.66675 7.81329 2.82675 6.94663 3.14675 6.14663C3.46675 5.33329 3.97341 4.58663 4.68008 3.91996C5.53341 3.07996 6.46675 2.66663 7.45341 2.66663C7.82675 2.66663 8.20008 2.74663 8.53341 2.90663C8.88008 3.06663 9.18675 3.30663 9.42675 3.65329L12.5201 8.01329C12.7601 8.34663 12.9334 8.65329 13.0534 8.94663C13.1734 9.22663 13.2401 9.50663 13.2401 9.75996C13.2401 10.08 13.1467 10.4 12.9601 10.7066C12.7867 11.0133 12.5334 11.3333 12.2134 11.6533L11.2001 12.7066C11.0534 12.8533 10.9867 13.0266 10.9867 13.24C10.9867 13.3466 11.0001 13.44 11.0267 13.5466C11.0667 13.6533 11.1067 13.7333 11.1334 13.8133C11.3734 14.2533 11.7867 14.8266 12.3734 15.52C12.9734 16.2133 13.6134 16.92 14.3067 17.6266C15.0267 18.3333 15.7201 18.9866 16.4267 19.5866C17.1201 20.1733 17.6934 20.5733 18.1467 20.8133C18.2134 20.84 18.2934 20.88 18.3867 20.92C18.4934 20.96 18.6001 20.9733 18.7201 20.9733C18.9467 20.9733 19.1201 20.8933 19.2667 20.7466L20.2801 19.7466C20.6134 19.4133 20.9334 19.16 21.2401 19C21.5467 18.8133 21.8534 18.72 22.1867 18.72C22.4401 18.72 22.7067 18.7733 23.0001 18.8933C23.2934 19.0133 23.6001 19.1866 23.9334 19.4133L28.3467 22.5466C28.6934 22.7866 28.9334 23.0666 29.0801 23.4C29.2134 23.7333 29.2934 24.0666 29.2934 24.44Z"
                  stroke="#0855DF"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M24.6667 12C24.6667 11.2 24.04 9.97337 23.1067 8.97337C22.2533 8.05337 21.12 7.33337 20 7.33337"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M29.3333 12C29.3333 6.83996 25.16 2.66663 20 2.66663"
                  stroke="#121212"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="card-body gap-3 d-grid justify-content-center jic ">
              <h5 class="card-title fs-3 fw-bold px-5">با ما تماس بگیرید</h5>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                مدیریت: 03512345678
              </h6>
              <h6 class="card-subtitle mb-2 text-muted fs-5">
                پشتیبانی: 03539876543
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
