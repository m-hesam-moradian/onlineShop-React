import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "./Navbar.css";
import { BiSearchAlt } from "react-icons/bi";

export default function Navbar() {
  const [allMenus, setAllMenus] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
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
    </div>
  );
}
