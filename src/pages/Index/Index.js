import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import ChoosenProducts from "../../Components/ChoosenProducts/ChoosenProducts";
import CountdownTimer from "../../Components/CountdownTimer/CountdownTimer";
import NewProducts from "../../Components/NewProducts/NewProducts";
import MiddleBanner from "../../Components/MiddleBanner/MiddleBanner";
// import CountdownTimer from "../../Components/CountdownTimer/CountdownTimer";


import "./Index.css";

export default function Index(props) {
  const [show, setModalShow] = useState(true);

  return (
    <>
      <Header />

      <ChoosenProducts />
      <CountdownTimer />
      <NewProducts />
      <MiddleBanner />
      <CountdownTimer />
      {/* <AboutUs /> */}
      {/* <PopularCourses /> */}
      {/* <PresellCourses /> */}
      {/* <LastArticles /> */}
      {/* <Footer /> */}
    </>
  );
}
