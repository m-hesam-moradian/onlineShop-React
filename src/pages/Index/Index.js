import React, { useEffect, useState } from "react";
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
import { API } from "../../App";

export default function Index(props) {
  const [NewProductsArray, setModalNewProductsArray] = useState(true);

  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => res.json())
      .then((allData) => {
        setModalNewProductsArray(allData.reverse());
      });
  }, []);

  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <ChoosenProducts />
      <CountdownTimer />
      {NewProductsArray.length > 0 ? (
        <NewProducts dataArray={NewProductsArray} SecondLine={true} />
      ) : (
        "Loading..."
      )}
      <MiddleBanner />
      <MostSales />
      {NewProductsArray.length > 0 ? (
        <NewProducts dataArray={NewProductsArray} />
      ) : (
        "Loading..."
      )}
      <BottomBanner />
      <RecentArticles />
      <Footer />
    </>
  );
}
