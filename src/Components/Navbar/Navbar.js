import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { API } from "../../FirebaseDatas";
import { Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";
import CounterContext from "../../context/CounterContext";


export default function Navbar() {
  const [ProductArray, setProductArray] = useState([]);
  const [searchResult, setsearchResult] = useState([]);

  const { count, incrementCount } = useContext(CounterContext);

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setProductArray(allData);
      });
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const [allMenus, setAllMenus] = useState(false);
  const authContext = useContext(AuthContext);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {}, []);
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
                onChange={(event) => {
                  let result = ProductArray.filter((product) =>
                    product.name
                      .toUpperCase()
                      .includes(event.target.value.toUpperCase())
                  );
                  if (!event.target.value) {
                    result = [];
                  }
                  setsearchResult(result);
                }}
              />

              <button
                href=""
                className="searchBTN bg-transparent"
                aria-label="search submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <i className="fas fa-search"></i>
              </button>
              <ul className="searchList rounded-4 d-grid gap-3">
                {searchResult &&
                  searchResult.map((event) => (
                    <a
                      onClick={() => navigate(`/products/${event.id}`)}
                      href=""
                      className=" searchListItem"
                    >
                      <img src={event.img} alt="" />
                      <span>{event.name}</span>
                    </a>
                  ))}
              </ul>
            </form>

            <ul class="navbar-nav justify-content-end flex-grow-1 p-4 text-secondary ">
              <li class="nav-item p-2 active">
                <Link class="nav-link" to="/">
                  <span class="material-symbols-outlined ">home</span> صفحه اصلی
                </Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link" to="/store">
                  <span class="material-symbols-outlined">storefront</span>
                  فروشگاه
                </Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link" to="/blog">
                  <span class="material-symbols-outlined">receipt_long</span>
                  وبلاگ
                </Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link" to="/Ablout-Us">
                  <span class="material-symbols-outlined">receipt_long</span>
                  درباره ما
                </Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link" to="/Contact-Us">
                  <span class="material-symbols-outlined">receipt_long</span>
                  تماس با ما
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  const navigate = useNavigate();

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
              role="button"
              onClick={() => navigate(`/`)}
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
              onChange={(event) => {
                let result = ProductArray.filter((product) =>
                  product.name
                    .toUpperCase()
                    .includes(event.target.value.toUpperCase())
                );
                if (!event.target.value) {
                  result = [];
                }
                setsearchResult(result);
              }}
            />

            <button
              className="searchBTN"
              aria-label="search submit"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="fas fa-search "></i>
            </button>
            <ul className="searchList rounded-4 d-grid gap-3">
              {searchResult &&
                searchResult.map((event) => (
                  <a
                    onClick={() => navigate(`/products/${event.id}`)}
                    href=""
                    className=" searchListItem"
                  >
                    <img src={event.img} alt="" />
                    <span>{event.name}</span>
                  </a>
                ))}
            </ul>
          </form>

          <div className="main-header__left">
            <Link
              to="/Contact-Us"
              className="main-header__cart-btn contactBTN d-none d-sm-flex"
            >
              <span class="material-symbols-outlined">contacts</span>
            </Link>
            <Link
              to="/Card"
              className="cartBTN shake-button main-header__cart-btn contactBTN mobileNavCart d-flex d-md-none"
            >
              <span className="productCounter">{count}</span>

              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </Link>
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
                  {}
                  {localStorage.getItem("UserName")
                    ? localStorage.getItem("UserName")
                    : " ورود / ثبت نام"}
                </span>
                <span class="material-symbols-outlined d-flex d-sm-none">
                  login
                </span>
              </Link>
            )}
          </div>
        </div>
        <Link
          to={localStorage.getItem("UserName") ? "/Card" : `/login`}
          className={`cartBTN ${
            localStorage.getItem("UserName") ? "cartBTNActive " : "shake-button"
          } d-none d-md-flex`}
        >
          {localStorage.getItem("UserName") ? (
            <span className="productCounter">{count}</span>
          ) : (
            ""
          )}

          <i className="fas fa-shopping-cart main-header__cart-icon"></i>
        </Link>
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
              دسته بندی ها
              <a href="">
                <span class="material-symbols-outlined">expand_more</span>
              </a>
            </div>
            <div
              role="button"
              onClick={() => navigate(`/store`)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`categoryItems ${!isHovered && "d-none"} `}
            >
              <div className="categoryItems-right">
                <a className="categoryItems-right-item active">
                  انواع کارت حافظه
                </a>
                <a className="categoryItems-right-item">تجهیزات شبکه </a>
                <a className="categoryItems-right-item">کالای دیجیتال </a>
                <a className="categoryItems-right-item">
                  کامپیوتر و لوازم جانبی
                </a>
                <a className="categoryItems-right-item">هدفون، هدست </a>
              </div>
            </div>
          </ul>
          <li>
            <Link class="nav-link" to="/">
              <span class="material-symbols-outlined ">home</span> صفحه اصلی
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/store">
              <span class="material-symbols-outlined">storefront</span> فروشگاه
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/blog">
              <span class="material-symbols-outlined">receipt_long</span> وبلاگ
            </Link>
            <a href=""></a>
          </li>
          <li>
            <Link class="nav-link" to="/Ablout-Us">
              <span class="material-symbols-outlined">receipt_long</span> درباره
              ما
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/Contact-Us">
              <span class="material-symbols-outlined">receipt_long</span> تماس
              با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
