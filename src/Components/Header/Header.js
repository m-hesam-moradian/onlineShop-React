import React from "react";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import HeaderBottom from "../HeaderBottom/HeaderBottom";

import "./Header.css";

export default function Header() {
  return (
    <header className="header px-3 container-flud">
      <Navbar />
      <Landing />
      <HeaderBottom />
    </header>
  );
}
