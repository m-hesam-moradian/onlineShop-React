import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import CounterContext from "../../context/CounterContext";
import { NavLinks } from "./NavLinks/NavLinks";
import HumbergerMenu from "./HumbergerMenu";
import "./Navbar.css";
import useSearch from "../../hooks/useSearch";
import { API } from "../../App";

export default function Navbar() {
  //states
  const [ProductArray, setProductArray] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  //navigates
  const navigate = useNavigate();

  //contexts
  const { count, incrementCount } = useContext(CounterContext);
  const authContext = useContext(AuthContext);

  //side effect
  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => res.json())
      .then((allData) => {
        setProductArray(allData);
      });
  }, [searchResult]);

  //costume hook
  const searchResultElement = useSearch(searchResult);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content p-3 p-sm-5">
          <div className=" main-header__right ">
            <a className="d-flex d-md-none align-items-center ">
              <HumbergerMenu
                ProductArray={ProductArray}
                placement="end"
                name={
                  <span className="material-symbols-outlined  align-items-center ">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>

            <ul className="searchList rounded-4 d-grid gap-3">
              {searchResultElement}
            </ul>
          </form>

          <div className="main-header__left">
            <NavLink
              to="/admin"
              className="main-header__cart-btn contactBTN d-none d-sm-flex"
            >
              <span className="material-symbols-outlined">contacts</span>
            </NavLink>
            <NavLink
              to="/Card"
              className={`cartBTN ${
                localStorage.getItem("UserName")
                  ? "cartBTNActive "
                  : "shake-button"
              } main-header__cart-btn contactBTN mobileNavCart d-flex d-md-none hover:scale-110`}
            >
              <span className="productCounter">{count}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class=" w-12"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </NavLink>
            {authContext.isLoggedIn ? (
              <NavLink to="#" className="main-header__profile mainProfile">
                <span className="main-header__profile-text">
                  {authContext.userInfos.name}
                </span>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="main-header__profile mainProfile p-2 p-sm-4"
              >
                <span className="main-header__profile-text  d-none d-sm-flex ">
                  {}
                  {localStorage.getItem("UserName")
                    ? localStorage.getItem("UserName")
                    : " ورود / ثبت نام"}
                </span>
                <span className="material-symbols-outlined d-flex d-sm-none">
                  login
                </span>
              </NavLink>
            )}
          </div>
        </div>
        <NavLink
          to={localStorage.getItem("UserName") ? "/Card" : `/login`}
          className={`cartBTN ${
            localStorage.getItem("UserName") ? "cartBTNActive " : "shake-button"
          } d-none d-md-flex`}
        >
          {localStorage.getItem("UserName")
            ?  <span className="productCounter">{count}</span>
            : ""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class=" w-12"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>

          {/* <i className="fas fa-shopping-cart main-header__cart-icon"></i> */}
        </NavLink>
      </div>
      <div className="navbarMenu d-md-flex ">
        <ul>
          <ul className="categories">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="categories-container"
            >
              <span className="material-symbols-outlined ">widgets</span>
              دسته بندی ها
              <a href="">
                <span className="material-symbols-outlined">expand_more</span>
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

          <NavLinks />
        </ul>
      </div>
    </div>
  );
}
