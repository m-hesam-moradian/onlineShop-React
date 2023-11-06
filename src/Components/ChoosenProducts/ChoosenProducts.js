import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";
import "./ChoosenProducts.css";
import { API } from "../../FirebaseDatas";

export default function ChoosenProducts() {
  const [dataArray, setdataArray] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/courses`)
  //     .then((res) => res.json())
  //     .then((allCourses) => setCourses(allCourses));
  // }, []);

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setdataArray(allData);
        // console.log(allData);
        // setLetReturner(true);
      });
  }, []);
  // console.log(dataArray.length>0,dataArray.length);
  return (
    <>
      {dataArray.length>0 ? (
        <ProductShower
          dataArrayContainer={dataArray}
          persianTitle="محصولاتـــ منتخب"
          englishTitle="Choosen Products"
        />
      ) : (
        "Loading..."
      )}
    </>
  );
}
