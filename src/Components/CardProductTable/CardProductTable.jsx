import React from "react";
import "./CardProductTable.css";
import NumericInput from "react-numeric-input";

export default function CardProductTable({ className, setSum }) {
  const CardProducts = JSON.parse(localStorage.getItem("cards"));
  const countsCardProducts =JSON.parse(localStorage.getItem("countsCardProducts"))|| CardProducts.reduce((acc, curr) => {
    const found = acc.find((item) => item.id === curr.id);
    if (found) {
      found.count++;
    } else {
      acc.push({ ...curr, count: 1 });
    }
    return acc;
  }, []);

  return (
    <>
      <div class={`grid ${className}`}>
        <div class="cell"></div>

        <div class="cell fw-bold d-none d-md-flex  ">نام محصول</div>

        <div class="cell fw-bold d-none d-lg-flex">قیمت به تومان</div>

        <div class="cell fw-bold">تعداد</div>

        <div class="cell fw-bold ">جمع جزء به تومان</div>

        {CardProducts &&
          countsCardProducts.map((product, index) => (
            <>
              <div class="cell ">
                <span class="material-symbols-outlined  ">close</span>
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
                        "countsCardProducts",
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
