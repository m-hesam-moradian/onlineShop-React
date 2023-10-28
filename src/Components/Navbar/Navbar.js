import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "./Navbar.css";
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const [allMenus, setAllMenus] = useState(false);
  const authContext = useContext(AuthContext);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    // fetch(`http://localhost:4000/v1/menus`)
    //   .then((res) => res.json())
    //   .then((menus) => {
    //     setAllMenus(menus);
    //   });
  }, []);
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          onClick={handleShow}
          className="d-flex d-md-none align-items-center bg-transparent border-0 text-black btn-outline-secondary  "
        >
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="d-flex justify-content-center p-4  ">
              {" "}
              <img
                src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/logomain.png"
                className="w-50"
                alt="لوگوی سبزلرن"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form className="searchForm w-100 bg-light border-0  " action="">
              <input
                type="text"
                className="searchInput bg-transparent "
                placeholder="جستجوی محصولات"
              />
              <button
                className="searchBTN bg-transparent "
                aria-label="search submit"
                type="submit"
              >
                {/* <BiSearchAlt /> */}
                <i className="fas fa-search "></i>
              </button>
            </form>
            <ul class="navbar-nav justify-content-end flex-grow-1 p-4 text-secondary ">
              <li class="nav-item p-2 active">
                <a class="nav-link " aria-current="page" href="#">
                  صفحه اصلی
                </a>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link" to="/store">
                  فروشگاه
                </Link>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  وبلاگ{" "}
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  تماس باما
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  درباره ما
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content p-3 p-sm-5">
          <div className=" main-header__right ">
            <a className="d-flex d-md-none align-items-center ">
              <OffCanvasExample
                placement="end"
                name={
                  <span class="material-symbols-outlined  align-items-center ">
                    menu
                  </span>
                }
              />
            </a>
            <img
              src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/logomain.png"
              className="main-header__logo w-75 m-2 m-sm-4"
              alt="لوگوی سبزلرن"
            />
          </div>
          <form className="searchForm d-none d-md-flex" action="">
            <input
              type="text"
              className="searchInput"
              placeholder="جستجوی محصولات"
            />
            <button
              className="searchBTN"
              aria-label="search submit"
              type="submit"
            >
              {/* <BiSearchAlt /> */}
              <i className="fas fa-search "></i>
            </button>
          </form>
          <div className="main-header__left">
            <a
              href="#"
              className="main-header__cart-btn contactBTN d-none d-sm-flex"
            >
              <span class="material-symbols-outlined">contacts</span>
            </a>
            <a
              href="#"
              className="cartBTN shake-button main-header__cart-btn contactBTN mobileNavCart d-flex d-md-none"
            >
              <span className="productCounter">10</span>

              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            {authContext.isLoggedIn ? (
              <Link to="#" className="main-header__profile mainProfile">
                <span className="main-header__profile-text">
                  {authContext.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="main-header__profile mainProfile p-2 p-sm-4"
              >
                <span className="main-header__profile-text  d-none d-sm-flex ">
                  ورود / ثبت نام
                </span>
                <span class="material-symbols-outlined d-flex d-sm-none">
                  login
                </span>
              </Link>
            )}
          </div>
        </div>

        <a href="#" className="cartBTN shake-button d-none d-md-flex">
          <span className="productCounter">10</span>

          <i className="fas fa-shopping-cart main-header__cart-icon"></i>
        </a>
      </div>
      <div className="navbarMenu d-md-flex ">
        <ul>
          <ul className="categories">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="categories-container"
            >
              <span class="material-symbols-outlined ">widgets</span>
              دسته بندی ها{" "}
              <a href="">
                <span class="material-symbols-outlined">expand_more</span>
              </a>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`categoryItems ${!isHovered && "d-none"} `}
            >
              <div className="categoryItems-right">
                <a className="categoryItems-right-item active" href="">
                  انواع کارت حافظه{" "}
                </a>
                <a className="categoryItems-right-item" href="">
                  تجهیزات شبکه{" "}
                </a>
                <a className="categoryItems-right-item" href="">
                  کالای دیجیتال{" "}
                </a>
                <a className="categoryItems-right-item" href="">
                  کامپیوتر و لوازم جانبی{" "}
                </a>
                <a className="categoryItems-right-item" href="">
                  هدفون، هدست{" "}
                </a>
              </div>
              {/* <div className="categoryItems-left">
                <a className="categoryItems-right-itemz" href="">
                  <img
                    src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                    alt=""
                    <p>هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت</p>
                  />
                  <div>:تومان<span>320,000</span></div>
                </a>
              </div> */}
              {/* <div class="container text-center d-none d-lg-flex">
                <div class="categoryItems-left row h-100 align-content-around  p-3">
                  <div class=" col-md-6 col-xl-4   categoryparent">
                    {" "}
                    <a className="categoryItems-left-item " href="">
                      <img
                        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                        alt=""
                      />

                      <span>
                        <div>
                          <div>
                            هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت
                          </div>
                        </div>
                        <div className="categoryItems-price">
                          <span>320,000 </span> تومان
                        </div>
                      </span>
                    </a>
                  </div>
                  <div class=" col-md-6 col-xl-4   categoryparent">
                    {" "}
                    <a className="categoryItems-left-item " href="">
                      <img
                        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                        alt=""
                      />
                      <span>
                        <p>هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت</p>
                        <div className="categoryItems-price">
                          <span>320,000 </span> تومان
                        </div>
                      </span>
                    </a>
                  </div>
                  <div class=" col-md-6 col-xl-4   categoryparent">
                    {" "}
                    <a className="categoryItems-left-item " href="">
                      <img
                        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                        alt=""
                      />
                      <span>
                        <p>هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت</p>
                        <div className="categoryItems-price">
                          <span>320,000 </span> تومان
                        </div>
                      </span>
                    </a>
                  </div>
                  <div class=" col-md-6 col-xl-4   categoryparent">
                    {" "}
                    <a className="categoryItems-left-item " href="">
                      <img
                        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                        alt=""
                      />
                      <span>
                        <p>هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت</p>
                        <div className="categoryItems-price">
                          <span>320,000 </span> تومان
                        </div>
                      </span>
                    </a>
                  </div>
                  <div class=" col-md-6 col-xl-4   categoryparent">
                    {" "}
                    <a className="categoryItems-left-item " href="">
                      <img
                        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                        alt=""
                      />
                      <span>
                        <p>هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت</p>
                        <div className="categoryItems-price">
                          <span>320,000 </span> تومان
                        </div>
                      </span>
                    </a>
                  </div>
                  <div class=" col-md-6 col-xl-4   categoryparent">
                    {" "}
                    <a className="categoryItems-left-item " href="">
                      <img
                        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-1.jpg"
                        alt=""
                      />
                      <span>
                        <p>هارد اکسترنال ای دیتا مدل HD770G ظرفیت 2 ترابایت</p>
                        <div className="categoryItems-price">
                          <span>320,000 </span> تومان
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="row"></div>
              </div> */}
            </div>
          </ul>
          <li>
          
            <Link class="nav-link" to="/">
            
              <span class="material-symbols-outlined ">home</span> صفحه اصلی{" "}
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/store">
              <span class="material-symbols-outlined">storefront</span> فروشگاه{" "}
            </Link>
          </li>
          <li>
            <a href="">
              <span class="material-symbols-outlined">receipt_long</span> وبلاگ{" "}
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-symbols-outlined">receipt_long</span> درباره
              ما{" "}
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-symbols-outlined">receipt_long</span> تماس
              با ما{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
