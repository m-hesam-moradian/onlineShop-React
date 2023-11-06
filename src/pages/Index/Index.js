import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import ChoosenProducts from "../../Components/ChoosenProducts/ChoosenProducts";
import CountdownTimer from "../../Components/CountdownTimer/CountdownTimer";
import NewProducts from "../../Components/NewProducts/NewProducts";
import MiddleBanner from "../../Components/MiddleBanner/MiddleBanner";
import MostSales from "../../Components/MostSales/MostSales";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";
import RecentArticles from "../../Components/RecentArticles/RecentArticles";
import Footer from "../../Components/Footer/Footer";

import "./Index.css";

export default function Index(props) {
  const [show, setModalShow] = useState(true);

  return (
    <>
      <Header />
      <ChoosenProducts />
      <CountdownTimer />
      <NewProducts SecondLine={true} />
      {/* <MiddleBanner /> */}
      {/* <MostSales /> */}
      {/* <NewProducts SecondLine={false} /> */}
      {/* <BottomBanner /> */}
      {/* <RecentArticles /> */}
      {/* <Footer /> */}
    </>
  );
}
