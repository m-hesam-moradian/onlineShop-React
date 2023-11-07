import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";

import "./NewProducts.css";

export default function NewProducts({   SecondLine = false, dataArray }) {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/courses`)
  //     .then((res) => res.json())
  //     .then((allCourses) => setCourses(allCourses));
  // }, []);

  return (
    <ProductShower
      dataArrayContainer={dataArray}
      persianTitle="محصولاتـــ جـدید"
      englishTitle="Recent Products"
      SecondLine={SecondLine}
    />
  );
}
