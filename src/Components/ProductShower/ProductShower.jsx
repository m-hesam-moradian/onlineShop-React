import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

import "./ProductShower.css";

export default function ProductShower({

  persianTitle,
  englishTitle,
  SecondLine = false,
  InnerContainer = false,
}) {
  const [dataArrayContainer, setDataArrayContainer] = useState([]);
  const [LetReturner, setLetReturner] = useState(false);

  useEffect(() => {
    fetch(`https://dimondshop-6146f-default-rtdb.firebaseio.com/products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setDataArrayContainer(allData);
        console.log(allData);
        setLetReturner(true);
      });
  }, []);
  console.log(dataArrayContainer[1]);
  return (
    <>
      <div className="ChoosenProductscontainer bg-light p-4 ">
        <div className=" ChoosenProducts d-flex  align-items-center ">
          <span className="ChoosenProductsPersianTitle fw-bolder     ">
            {persianTitle}
          </span>
          <span className="ChoosenProductsEnglishTitle d-none d-md-inline text-secondary">
            {englishTitle}
          </span>
          <hr className="col m-1 text-secondary   " />
          <span className="ChoosenProductsShowMore d-flex  align-items-center text-secondary    ">
            مشاهده همه
            <span class="material-symbols-outlined">chevron_left</span>
          </span>
        </div>
        <div className="courses-content mt-5 ">
          {LetReturner && (
            <div className="container">
              {!InnerContainer ? (
                <>
                  <div className="row">
                    <ProductCard
                      dataArray={dataArrayContainer[1]}
                    ></ProductCard>
                    <ProductCard
                      dataArray={dataArrayContainer[2]}
                    ></ProductCard>
                    <ProductCard
                      dataArray={dataArrayContainer[3]}
                    ></ProductCard>
                    <ProductCard
                      dataArray={dataArrayContainer[4]}
                    ></ProductCard>
                  </div>
                </>
              ) : (
                InnerContainer
              )}

              {SecondLine &&
                (!InnerContainer ? (
                  <>
                    <div className="row d-none d-lg-flex  ">
                      <ProductCard></ProductCard>
                      <ProductCard></ProductCard>
                      <ProductCard></ProductCard>
                      <ProductCard></ProductCard>
                    </div>
                  </>
                ) : (
                  InnerContainer
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
