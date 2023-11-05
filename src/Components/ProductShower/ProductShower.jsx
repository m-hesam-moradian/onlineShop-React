import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

import "./ProductShower.css";

export default function ProductShower({
  dataArray,
  persianTitle,
  englishTitle,
  SecondLine = false,
  InnerContainer = false,
}) {
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
          <div className="container">
            {!InnerContainer ? (
              <>
                <div className="row">
                  <ProductCard dataArray={dataArray[1]}></ProductCard>
                  <ProductCard dataArray={dataArray[2]}></ProductCard>
                  <ProductCard dataArray={dataArray[3]}></ProductCard>
                  <ProductCard dataArray={dataArray[4]}></ProductCard>
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
        </div>
      </div>
    </>
  );
}
