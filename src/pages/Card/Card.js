import React from "react";
import "./Card.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CardProductTable from "../../Components/CardProductTable/CardProductTable";
import CardSumPrice from "../../Components/CardSumPrice/CardSumPrice";
import { useState } from "react";

export default function Card() {
  const [justForRended, setJustForRended] = useState([]);
  const [sum, setSum] = useState(0);
  const [Rerendered, setRerendered] = useState();
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="row m-0">
        <div className="p-5"></div>
        <div className="col ">
          {JSON.parse(localStorage.getItem("cards")) && (
            <CardProductTable
              setSum={setSum}
              className="  m-md-5 p-0 p-md-4"
              setRerendered={setRerendered}
            ></CardProductTable>
          )}
        </div>
        <div className="col-auto ">
          {JSON.parse(localStorage.getItem("cards")) && (
            <CardSumPrice
              className="  m-5"
              setJustForRended={setJustForRended}
            ></CardSumPrice>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
