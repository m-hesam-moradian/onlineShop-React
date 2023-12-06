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
        <div className="col ">
          {JSON.parse(localStorage.getItem("cards")) && (
            <CardProductTable className="  m-md-5 p-0 p-md-4"></CardProductTable>
          )}
        </div>
        <div className="col-auto ">
          {JSON.parse(localStorage.getItem("cards")) && (
            <CardSumPrice className="  m-5"></CardSumPrice>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
