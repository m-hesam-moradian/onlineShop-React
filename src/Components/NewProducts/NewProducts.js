import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";

import "./NewProducts.css";

export default function NewProducts({   SecondLine = false, dataArray }) {

  return (
    <ProductShower
      dataArrayContainer={dataArray}
      persianTitle="محصولاتـــ جـدید"
      englishTitle="Recent Products"
      SecondLine={SecondLine}
    />
  );
}
