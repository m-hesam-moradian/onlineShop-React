import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";

import "./NewProducts.css";

export default function NewProducts({ SecondLine }) {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/courses`)
  //     .then((res) => res.json())
  //     .then((allCourses) => setCourses(allCourses));
  // }, []);

 
  return (
    <ProductShower
      persianTitle="محصولاتـــ جـدید"
      englishTitle="Recent Products"
      SecondLine={SecondLine}
    />
  );
}
