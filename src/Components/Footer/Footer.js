import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className=" Footer">
      <div class=" bg-light  FooterContainer   row m-0  ">
        <div className=" FooterStart order-1 order-sm-0  order-xl-1 col col-xl-auto ">
          <img
            className="FooterIMG"
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/logo-main.png"
          />
          <div className="FooterfuturesBox">
            <div className="Footerfuture">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_75_28980)">
                  <path
                    d="M11.6992 19.654V10.7204L20.5903 6.5513V16.3783L11.6992 19.654Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3437 0.608231L0.609375 5.46937V16.4305L11.3437 21.2917L22.078 16.4305V13.4121C22.3733 14.0867 22.5327 14.8264 22.5327 15.5926C22.5327 18.5862 20.0972 21.0217 17.1035 21.0217V18.8972L14.3855 21.6154L17.1035 24.3334V22.4381C20.8782 22.4381 23.949 19.3672 23.949 15.5926C23.949 13.8076 23.2631 12.1365 22.078 10.8865V5.46937L11.3437 0.608231ZM10.5 9.96891V19.0944L2.2967 15.318V6.58199L11.3437 2.44399L14.3577 3.73571L5.06303 7.71915V14.8412H6.75036V8.83174L16.4994 4.65354L19.7008 6.02562L10.5 9.96891ZM20.4688 15.5125L12.1874 19.0943V11.0815L20.4688 7.29995V15.5125ZM15.3726 11.9312V13.6185L19.8721 11.6499V9.96264L15.3726 11.9312ZM15.3726 14.3674V16.0547L17.6223 15.0705V13.3831L15.3726 14.3674Z"
                    fill="#B3BBC6"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_75_28980">
                    <rect width="24.3335" height="24.3335" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p class="elementor-icon-box-title">
                <span>ارسال سریع </span>
              </p>
              <p class="elementor-icon-box-description">از طریق پست و ... </p>
            </div>
            <div className="Footerfuture">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_75_28986)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.12589 1.77455L8.36546 4.56277H6.33769V7.35101L5.07031 8.87185L6.33769 10.3927V12.9274L8.36546 13.6878V15.7157L10.6467 14.9552L12.6746 16.4761L14.1953 14.9552L16.2232 15.7157L17.4905 12.9274H19.2649V10.3927L20.2787 8.87185L18.5044 7.35101L19.2649 4.56277H17.4905L16.2232 1.77455L14.1953 3.04193L12.6746 1.01413L10.6467 3.04193L9.12589 1.77455ZM12.1676 12.167C10.4904 12.167 9.12589 10.8025 9.12589 9.12529C9.12583 7.4481 10.4903 6.0836 12.1676 6.0836C13.8448 6.0836 15.2093 7.44816 15.2093 9.12529C15.2093 10.8025 13.8448 12.167 12.1676 12.167Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12.2541 4.58502C9.86527 4.58502 7.92188 6.52847 7.92188 8.91729C7.92188 11.3061 9.86527 13.2495 12.2541 13.2495C14.6429 13.2495 16.5864 11.3061 16.5864 8.91729C16.5864 6.52847 14.6429 4.58502 12.2541 4.58502ZM12.2541 11.6871C10.7268 11.6871 9.48427 10.4445 9.48427 8.91729C9.48421 7.39 10.7267 6.14747 12.2541 6.14747C13.7814 6.14747 15.0239 7.39 15.0239 8.91729C15.0239 10.4445 13.7814 11.6871 12.2541 11.6871Z"
                    fill="#B3BBC6"
                  ></path>
                  <path
                    d="M19.4239 13.5393L19.9669 13.3953L19.2838 10.8194L21.173 8.9398L19.2934 7.05066L19.9897 4.47829L17.4173 3.78198L16.7342 1.2061L14.1583 1.88925L12.2788 3.05176e-05L10.3896 1.8796L7.81727 1.18329L7.12097 3.75565L4.54503 4.4388L5.22818 7.01465L3.33901 8.89423L5.21858 10.7835L4.52227 13.3558L4.93993 13.4689L1.87695 21.1045L6.46822 20.8601L10.1212 24.3335L12.1677 19.2318L14.2141 24.3335L17.8671 20.8601L22.4584 21.1045L19.4239 13.5393ZM9.52871 21.614L7.05722 19.264L4.23849 19.4141L6.45837 13.8799L7.09457 14.0521L7.77773 16.6279L10.3536 15.9448L11.3864 16.9829L9.52871 21.614ZM10.825 14.2034L8.88734 14.7172L8.37348 12.7796L6.43854 12.2558L6.96232 10.3209L5.5485 8.89983L6.96955 7.48599L6.45569 5.54839L8.39331 5.03454L8.91715 3.0996L10.8521 3.62339L12.2732 2.20957L13.6869 3.63066L15.6246 3.11681L16.1385 5.0544L18.0734 5.57819L17.5496 7.51312L18.9634 8.9342L17.5424 10.348L18.0563 12.2857L16.1186 12.7995L15.5949 14.7344L13.6599 14.2106L12.2388 15.6244L10.825 14.2034ZM17.2782 19.264L14.8068 21.614L12.9889 17.0821L14.1223 15.9545L16.6947 16.6508L17.391 14.0784L17.9024 13.9428L20.097 19.414L17.2782 19.264Z"
                    fill="#B3BBC6"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_75_28986">
                    <rect width="24.3335" height="24.3335" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p class="elementor-icon-box-title">
                <span>کیفیت بالا </span>
              </p>
              <p class="elementor-icon-box-description">
                بالاترین کیفیت محصولات{" "}
              </p>
            </div>
            <div className="Footerfuture">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_75_28993)">
                  <path
                    d="M12.1671 4.66364C8.76442 4.66364 5.99609 7.43193 5.99609 10.8347C5.99609 14.2373 8.76442 17.0057 12.1671 17.0057C15.5698 17.0057 18.3381 14.2374 18.3381 10.8347C18.3381 7.43193 15.5698 4.66364 12.1671 4.66364ZM12.1671 15.3227C9.69244 15.3227 7.67909 13.3094 7.67909 10.8347C7.67909 8.36001 9.69244 6.34665 12.1671 6.34665C14.6418 6.34665 16.6551 8.35994 16.6551 10.8347C16.6551 13.3094 14.6418 15.3227 12.1671 15.3227Z"
                    fill="#B3BBC6"
                  ></path>
                  <path
                    d="M21.7978 9.88562H20.0234V15.2086L21.7978 14.4482L23.0651 13.4342V10.8995L21.7978 9.88562Z"
                    fill="white"
                    stroke="#B3BBC6"
                    stroke-width="0.608338"
                  ></path>
                  <path
                    d="M2.53495 9.88562H4.30927V15.2086L2.53495 14.4482L1.26758 13.4342V10.8995L2.53495 9.88562Z"
                    fill="white"
                  ></path>
                  <path
                    d="M21.248 8.66101H20.9623C20.5371 4.18219 16.755 0.666656 12.1668 0.666656C7.57849 0.666656 3.7964 4.18219 3.37124 8.66101H3.08551C1.38416 8.66101 0 10.0452 0 11.7465V12.588C0 14.2893 1.38416 15.6735 3.08551 15.6735H5.01394V9.50246C5.01394 5.5584 8.22266 2.34971 12.1667 2.34971C16.1108 2.34971 19.3195 5.5584 19.3195 9.50246V15.3998L15.7523 19.9862H14.8796C14.52 18.8298 13.4399 17.9877 12.1668 17.9877C10.6007 17.9877 9.32667 19.2617 9.32667 20.8277C9.32667 22.3937 10.6007 23.6678 12.1668 23.6678C13.4399 23.6678 14.52 22.8257 14.8796 21.6692H16.5755L21.2388 15.6735H21.248C22.9494 15.6735 24.3336 14.2893 24.3336 12.588V11.7465C24.3335 10.0452 22.9494 8.66101 21.248 8.66101ZM3.33093 13.9905H3.08551C2.31216 13.9905 1.683 13.3613 1.683 12.588V11.7465C1.683 10.9731 2.31216 10.344 3.08551 10.344H3.33093V13.9905ZM12.1668 21.9848C11.5287 21.9848 11.0097 21.4658 11.0097 20.8277C11.0097 20.1897 11.5287 19.6706 12.1668 19.6706C12.8048 19.6706 13.3238 20.1897 13.3238 20.8277C13.3238 21.4657 12.8048 21.9848 12.1668 21.9848ZM22.6505 12.588C22.6505 13.3613 22.0213 13.9905 21.248 13.9905H21.0026V10.344H21.248C22.0213 10.344 22.6505 10.9731 22.6505 11.7465V12.588Z"
                    fill="#B3BBC6"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_75_28993">
                    <rect width="24.3335" height="24.3335" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p class="elementor-icon-box-title">
                <span>پشتیبانی همه روزه </span>
              </p>
              <p class="elementor-icon-box-description">حتی جمعه ها </p>
            </div>
          </div>
        </div>

        <div className="  FooterEnd order-0 order-sm-1 col col-xl-2 order-xl-3 m-5">
          <div className="FooterEndContainer flex-column d-flex align-content-center  align-items-center">
            <div class="material-symbols-outlined fs-1 ">expand_less</div>
            <div className="MainFooterEndContainer text-white d-flex flex-column justify-content-center  ">
              <span class="elementor-heading-title elementor-size-default fs-2 fw-bold">
                همـه روزه پاسخگـــــوی شما عـــزیـــزان هـسـتـیـم
              </span>
              <hr />
              <span className="fs-2 fw-bold d-flex justify-content-center ">
                {" "}
                34567890 <span className="fw-lighter  mx-2"> 045 </span>
              </span>
              <hr />
              <img
                className="w-75 mx-auto   "
                src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/footer-call-vector.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" FooterMidle order-2 order-sm-2 border-black border-5 border-primary order-xl-2  col-12 col-xl">
          <div class="my-4">
            <strong>فروشگاه اینترنتی الکترو شاپ</strong> در قلب ایران فعالیت
            خودش را آغاز نموده است، ما بهترین نوع کالاها را برای مردم شریف ایران
            در این سایت فراهم کرده ایم و برای رضایت و خوشحالی شما تلاش میکنیم.
            ما افتخار می‌کنیم که یکی از معتبرترین فروشگاه های اینترنتی در ایران
            باشیم. از زمان شروع فعالیتمان در سال 1402، به دلیل کیفیت بالا، قیمت
            رقابتی و خدمات عالی، به گسترش روز افزون کسب و کارمان پی
            بردیم.امروزه، بیش از صدها هزار مشتری را در سراسر کشور داریم که به ما
            اعتماد کرده‌اند. تلاش می‌کنیم تا انواع محصولاتی را ارائه دهیم که
            بهترین کیفیت و قیمت را داشته باشند.{" "}
          </div>
          <hr />
          <div className=" row m-0 d-flex">
            {" "}
            <div className="col-auto">
              <div>
                <a className="ChoosenProductsEnglishTitle d-none d-md-inline text-secondary">
                  آدرس فروشگـاه
                </a>
                <div class="elementor-widget-container">
                  <strong>شهر مهربانان یـزد</strong>، میدان اول ، خیابان دوم ،
                  بن‌بست پنجم، پلاک ۱، طبقه دوم ، واحد 101{" "}
                </div>
              </div>
            </div>
            <div dir="ltr" className="FooterMail col  ">
              <span className="ChoosenProductsEnglishTitle d-none d-md-inline text-secondary">
                انتقاد و پیشنهاد{" "}
              </span>
              <div class="elementor-widget-container">info@yoursite.com </div>
            </div>
          </div>
          <hr />
          <div className="d-flex row mx-3 gap-3">
            <div className="col-auto m-auto">
              <strong>همراه با حجره</strong>
              <ul>
                <li>
                  {" "}
                  <a href="">مجله الکتروشاپ</a>
                </li>
                <li>
                  {" "}
                  <a href="">درباره ما</a>
                </li>
                <li>
                  {" "}
                  <a href="">تماس با ما</a>
                </li>
              </ul>
            </div>
            <div className="col-auto m-auto">
              <strong>راهنمای خرید</strong>
              <ul>
                <li>
                  {" "}
                  <a href="">نحوه ثبت سفارش</a>
                </li>
                <li>
                  {" "}
                  <a href="">رویه های ارسال کالا</a>
                </li>
                <li>
                  {" "}
                  <a href="">شیوه های پرداخت</a>
                </li>
              </ul>
            </div>
            <div className="col-auto m-auto">
              <strong>خدمات مشتریان</strong>
              <ul>
                <li>
                  {" "}
                  <a href="">ثبت نام / ورود</a>
                </li>
                <li>
                  {" "}
                  <a href="">مرجوعی سفارش</a>
                </li>
                <li>
                  {" "}
                  <a href="">شکایات و پیشنهادات</a>
                </li>
              </ul>
            </div>

            <div className="col eNamadIMG d-flex col-auto m-auto">
              <div>
                <img
                  className="shadow "
                  src="https://sitekar.com/images/enamad.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr />
          <p>تمامی حقوق این وبسایت برای سایت آماده الکترو شاپ محفوظ است.</p>
        </div>
        {/* 
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

          
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24">
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24">
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24">
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
