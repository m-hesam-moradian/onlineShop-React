import React from "react";
import "./CardProductTable.css";
import NumericInput from "react-numeric-input";
export default function CardProductTable() {
  const CardProducts = JSON.parse(localStorage.getItem("cards"));
  

  return (
    <>
      {/* <div className="row">
        <div className="col"></div>
        <div className="col">محصول</div>
        <div className="col">قیمت</div>
        <div className="col">تعداد</div>
        <div className="col"> جمع جزء</div>
      </div>
      {CardProducts.map((product) => (
        <div className="row">
          <div className="col">
            <span class="material-symbols-outlined">close</span>
          </div>
          <div className="col">
            <img className="card-product-img" src={product.img} alt="" />
            <span>{product.name}</span>
          </div>
          <div className="col">{product.price}</div>
          <div className="col">4</div>
          <div className="col">4</div>
        </div>
      ))} */}
      {/* <table class="table">
        <thead>
          <tr className="">
            <th scope="col " class="text-center"></th>
            <th scope="col" class="text-center">
              محصول
            </th>
            <th scope="col" class="text-center">
              قیمت
            </th>
            <th scope="col" class="text-center">
              تعداد
            </th>
            <th scope="col" class="text-center">
              جمع جزء
            </th>
          </tr>
        </thead>
        <tbody>
          {CardProducts.map((product) => (
            <tr className="d-grid">
              <th class="text-center justify-content-center align-content-center d-flex">
                <div>
                  <span class="material-symbols-outlined d-flex ">close</span>
                </div>
              </th>
              <td class="">
                <div className="row m-0 ">
                  <div className="col-auto ">
                    <img
                      className="card-product-img"
                      src={product.img}
                      alt=""
                    />
                  </div>
                  <div className="col ">
                    <span>{product.name}</span>
                  </div>
                </div>
              </td>
              <td class="text-center">{product.price}</td>
              <td class="text-center">@mdo</td>
              <td class="text-center">{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* 
      <table class="product-table">
        <tr className="cardProductHeader">
          <td class="text-center">عکس محصول</td>
          <td class="text-center">نام محصول</td>
          <td class="text-center">قیمت به تومان</td>
          <td class="text-center">تعداد</td>
          <td class="text-center">جمع جزء به تومان</td>
        </tr>

        {CardProducts.map((product, index) => (
          <>
            <tr>
              <th>
                <span class="material-symbols-outlined  ">close</span>
                <img className="card-product-img" src={product.img} alt="" />
              </th>
              <th class="">
                <span>{product.name}</span>
              </th>
              <th class="text-center">{product.price}</th>
              <th class="text-center">4</th>
              <th class="text-center">{"۱,۲۸۰,۰۰۰"}</th>
            </tr>
          </>
        ))}
      </table> */}
      <div class="grid">
        <div class="cell"></div>

        <div class="cell fw-bold ">نام محصول</div>

        <div class="cell fw-bold">قیمت به تومان</div>

        <div class="cell fw-bold">تعداد</div>
        
        <div class="cell fw-bold">جمع جزء به تومان</div>

        {CardProducts.map((product, index) => (
          <>
            {/* <div class="grid"> */}
            <div class="cell">
              {" "}
              <span class="material-symbols-outlined  ">close</span>
              <img className="card-product-img" src={product.img} alt="" />
            </div>

            <div class="cell">
              <span className="fw-light  fs-5 ">{product.name}</span>
            </div>

            <div class="cell">
              {" "}
              <span className="textColor">
                {product.price.toLocaleString()}{" "}
                <span className="fs-5 text-black ">تومان</span>
              </span>
            </div>

            <div class="cell">
              <span>
                <NumericInput
                  className="form-control"
                  value={0}
                  min={0}
                  max={100}
                  step={1}
                  precision={0}
                  size={5}
                />
              </span>
            </div>
            <div class="cell">
              <span className="textColor">
                {product.price.toLocaleString()}{" "}
                <span className="fs-5 text-black ">تومان</span>
              </span>
            </div>
            {/* </div> */}
          </>
        ))}
      </div>
    </>
  );
}
