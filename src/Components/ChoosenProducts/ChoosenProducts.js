import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";
import "./ChoosenProducts.css";
import { API } from "../../FirebaseDatas";

export default function ChoosenProducts() {

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/courses`)
  //     .then((res) => res.json())
  //     .then((allCourses) => setCourses(allCourses));
  // }, []);


  return (
    <>
      <ProductShower
        // dataArray={dataArray}
        persianTitle="محصولاتـــ منتخب"
        englishTitle="Choosen Products"
      />
    </>
  );
}
