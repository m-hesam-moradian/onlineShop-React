import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "./Navbar.css";
import { BiSearchAlt } from "react-icons/bi";

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

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/logomain.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />
          </div>
          <form className="searchForm" action="">
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
            <a href="#" className="main-header__cart-btn contactBTN">
              <span class="material-symbols-outlined">contacts</span>
            </a>

            {authContext.isLoggedIn ? (
              <Link to="#" className="main-header__profile mainProfile">
                <span className="main-header__profile-text">
                  {authContext.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile mainProfile">
                <span class="material-symbols-outlined">login</span>
                <span className="main-header__profile-text">
                  ورود / ثبت نام
                </span>
              </Link>
            )}
          </div>
        </div>

        <a href="#" className="cartBTN shake-button">
          <span className="productCounter">10</span>

          <i className="fas fa-shopping-cart main-header__cart-icon"></i>
        </a>
      </div>
      <div className="navbarMenu">
        <ul>
          <ul className="categories">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="categories-container"
            >
              <span class="material-symbols-outlined">widgets</span>
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
              <div class="container text-center">
                <div class="categoryItems-left row h-100 align-content-around  p-3">
                  <div class="col-4 categoryparent">
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
                  <div class="col-4 categoryparent">
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
                  <div class="col-4 categoryparent">
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
                  <div class="col-4 categoryparent">
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
                  <div class="col-4 categoryparent">
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
                  <div class="col-4 categoryparent">
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
              </div>
            </div>
          </ul>
          <li>
            <a href="">
              <span class="material-symbols-outlined">home</span> صفحه اصلی{" "}
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-symbols-outlined">storefront</span> فروشگاه{" "}
            </a>
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
