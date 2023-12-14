import React, { useContext, useState } from "react";
import "./CardProductTable.css";
import NumericInput from "react-numeric-input";
import CounterContext from "../../context/CounterContext";

export default function CardProductTable({
  className,
  setSum,
  setJustForRended,
}) {
  let countsCardProducts = JSON.parse(localStorage.getItem("cards"));
  const { count, incrementCount } = useContext(CounterContext);
  return (
    <>
      <div class={`grid ${className}`}>
        <div class="cell"></div>

        <div class="cell fw-bold d-none d-md-flex  ">نام محصول</div>

        <div class="cell fw-bold d-none d-lg-flex">قیمت به تومان</div>

        <div class="cell fw-bold">تعداد</div>

        <div class="cell fw-bold ">جمع جزء به تومان</div>

        {countsCardProducts &&
          countsCardProducts.map((product, index) => (
            <>
              <div class="cell ">
                <span
                  class="material-symbols-outlined  "
                  onClick={() => {
                    // countsCardProducts.filter((item) => item !== product);
                    incrementCount();
                    console.log(count);
                    countsCardProducts.splice(index, 1);
                    setJustForRended(countsCardProducts);
                    localStorage.setItem(
                      "cards",
                      JSON.stringify(countsCardProducts)
                    );
                    console.log(countsCardProducts);
                  }}
                >
                  close
                </span>
                <img className="card-product-img" src={product.img} alt="" />
              </div>

              <div class="cell d-none d-md-flex">
                <span className="fw-light  fs-5 ">{product.name}</span>
              </div>

              <div class="cell d-none d-lg-flex">
                <span className="textColor">
                  {product.price.toLocaleString()}{" "}
                  <span className="fs-5 text-black ">تومان</span>
                </span>
              </div>

              <div class="cell">
                <span>
                  <NumericInput
                    className="form-control"
                    value={product.count}
                    min={1}
                    max={100}
                    step={1}
                    precision={0}
                    size={5}
                    onChange={(e) => {
                      product.count = e;
                      const newPrice = product.price * product.count;

                      document.querySelector(` .num${index}`).textContent =
                        newPrice.toLocaleString();

                      countsCardProducts[index].sumPrice = newPrice;

                      localStorage.setItem(
                        "cards",
                        JSON.stringify(countsCardProducts)
                      );
                      setSum((e) => (e += product.sumPrice));
                    }}
                  />
                </span>
              </div>
              <div class="cell ">
                <span className={`textColor num${index}`}>
                  {(product.price * product.count).toLocaleString()}
                </span>
                <span className="fs-5 text-black ">تومان</span>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
