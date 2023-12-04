import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CounterContext from "../../../context/CounterContext";

export const handleClick = (data) => {
  const items = JSON.parse(localStorage.getItem("cards"))
    ? JSON.parse(localStorage.getItem("cards"))
    : [];
 

  localStorage.setItem("cards", JSON.stringify([...items, data]));
};

function ProductCard({ dataArray }) {
  const navigate = useNavigate();
  const { incrementCount } = useContext(CounterContext);
  return (
    <Card
      className="ProductCard w-100 d-flex align-items-center rounded-5 col border-0 m-3 shadow-sm "
      style={{ width: "18rem" }}
    >
      <Card.Img
        onClick={() => {
          navigate(`/products/${dataArray.id}`);
        }}
        className="w-50 mt-5 h-100"
        variant="top"
        src={`${dataArray.img}`}
      />
      <Card.Body className="w-100 ">
        <Card.Title
          onClick={() => navigate(`/products/${dataArray.id}`)}
          className="mx-4"
        >
          {dataArray.name}
        </Card.Title>
        <hr />
        <Card.Text
          // onClick={() => navigate(`/products/${dataArray.id}`)}
          className="d-flex justify-content-between flex-row-reverse p-4 align-items-center "
        >
          <div className="cardTextContainer">
            <div className="SliderPrice d-grid ">
              {dataArray && (
                <span className="SliderPrice-discont small fw-light text-decoration-line-through text-danger ">
                  {dataArray.priceBeforeOff}
                </span>
              )}
              <div className="SliderPrice-mainPriceContainer">
                <span className="SliderPrice-price p-1 fw-bolder ">
                  {dataArray.price.toLocaleString("en-US")}
                </span>
                <span className="SliderPrice-toman text-secondary  ">
                  تومان
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              handleClick(dataArray);
              incrementCount();
            }}
            variant="white"
            className="ProductCardBTN border-secondary rounded-4  "
          >
            <span class="ProductCardBTNSpan material-symbols-outlined p-1 text-secondary ">
              shopping_bag
            </span>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProductCard;
