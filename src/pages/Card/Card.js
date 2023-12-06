import React from "react";
import "./Card.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CardProductTable from "../../Components/CardProductTable/CardProductTable";
import CardSumPrice from "../../Components/CardSumPrice/CardSumPrice";

export default function Card() {
  return (
    <>
      <Navbar />
      <div className="row m-0">
        <div className="p-5"></div>
        <div className="col-7 ">
          {JSON.parse(localStorage.getItem("cards")) && (
            <CardProductTable className="  m-5"></CardProductTable>
          )}
        </div>
        <div className="col-3 ">
          {JSON.parse(localStorage.getItem("cards")) && (
            <CardSumPrice className="  m-5"></CardSumPrice>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
