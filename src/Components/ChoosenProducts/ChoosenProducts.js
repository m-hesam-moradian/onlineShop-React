import React, { useEffect, useState } from "react";
import ProductShower from "../ProductShower/ProductShower";
import "./ChoosenProducts.css";
import { API } from "../../FirebaseDatas";

export default function ChoosenProducts() {
  const [dataArray, setdataArray] = useState([]);

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setdataArray(allData);
      });
  }, []);
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
