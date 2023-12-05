import React from "react";
import "./Card.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CardProductTable from "../../Components/CardProductTable/CardProductTable";

export default function Card() {
  return (
    <>
          <Navbar />
          <div className="p-5"></div>
      <div className="col-7 ">
       { JSON.parse(localStorage.getItem("cards"))&& <CardProductTable clas="col-6 bg-black "></CardProductTable>}
      </div>
      <Footer />
    </>
  );
}
