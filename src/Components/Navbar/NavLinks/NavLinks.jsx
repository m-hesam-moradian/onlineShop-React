import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <>
      {" "}
     
        <li>
          <NavLink className="nav-link flex" to="/">
            <span className="material-symbols-outlined ">home</span> صفحه اصلی
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link flex" to="/store">
            <span className="material-symbols-outlined">storefront</span>{" "}
            فروشگاه
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link flex" to="/blog">
            <span className="material-symbols-outlined">receipt_long</span>{" "}
            وبلاگ
          </NavLink>
          <a href=""></a>
        </li>
        <li>
          <NavLink className="nav-link flex" to="/Ablout-Us">
            <span className="material-symbols-outlined">receipt_long</span>{" "}
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link flex" to="/Contact-Us">
            <span className="material-symbols-outlined">receipt_long</span> تماس
            با ما
          </NavLink>
        </li>
 
    </>
  );
};
