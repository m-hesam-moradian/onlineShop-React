import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

import "./ProductShower.css";
import { useNavigate } from "react-router-dom";
// import { API } from "../../FirebaseDatas";

export default function ProductShower({
  dataArrayContainer,
  persianTitle,
  englishTitle,
  SecondLine = false,
  InnerContainer = false,
}) {
  // const [LetReturner, setLetReturner] = useState(false);
const navigate = useNavigate();

  // console.log(dataArrayContainer[1]);
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
          <span
            role="button"
            onClick={() => navigate(`/store`)}
            className="ChoosenProductsShowMore d-flex  align-items-center text-secondary    "
          >
            مشاهده همه
            <span class="material-symbols-outlined">chevron_left</span>
          </span>
        </div>
        <div className="courses-content mt-5 ">
          <div className="container">
            {!InnerContainer ? (
              <>
                <div className="row">
                  <ProductCard dataArray={dataArrayContainer[0]}></ProductCard>
                  <ProductCard dataArray={dataArrayContainer[1]}></ProductCard>
                  <ProductCard dataArray={dataArrayContainer[2]}></ProductCard>
                  <ProductCard dataArray={dataArrayContainer[3]}></ProductCard>
                </div>
              </>
            ) : (
              InnerContainer
            )}

            {SecondLine &&
              (!InnerContainer ? (
                <>
                  <div className="row d-none d-lg-flex  ">
                    <ProductCard
                      dataArray={dataArrayContainer[4]}
                    ></ProductCard>
                    <ProductCard
                      dataArray={dataArrayContainer[5]}
                    ></ProductCard>
                    <ProductCard
                      dataArray={dataArrayContainer[6]}
                    ></ProductCard>
                    <ProductCard
                      dataArray={dataArrayContainer[7]}
                    ></ProductCard>
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
