import React from "react";
import "./CardProductTable.css";
import NumericInput from "react-numeric-input";

export default function CardProductTable({ className }) {




  const CardProducts = JSON.parse(localStorage.getItem("cards"));
  const countsCardProducts = CardProducts.reduce((acc, curr) => {
    const found = acc.find((item) => item.id === curr.id);
    if (found) {
      found.count++;
    } else {
      acc.push({ ...curr, count: 1 });
    }
    return acc;
  }, []);
 localStorage.setItem("countsCardProducts", JSON.stringify(countsCardProducts));


  return (
    <>
      <div class={`grid ${className}`}>
        <div class="cell"></div>

        <div class="cell fw-bold ">نام محصول</div>

        <div class="cell fw-bold">قیمت به تومان</div>

        <div class="cell fw-bold">تعداد</div>

        <div class="cell fw-bold">جمع جزء به تومان</div>

        {CardProducts &&
          countsCardProducts.map((product, index) => (
            <>
              <div class="cell ">
                <span class="material-symbols-outlined  ">close</span>
                <img className="card-product-img" src={product.img} alt="" />
              </div>

              <div class="cell">
                <span className="fw-light  fs-5 ">{product.name}</span>
              </div>

              <div class="cell">
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
                    min={0}
                    max={100}
                    step={1}
                    precision={0}
                    size={5}
                    onChange={(e) => {
                      product.count = e;
                      // Calculate the new price
                      const newPrice = product.price * product.count;

                      // Update the price display
                      document.querySelector(` .num${index}`).textContent =
                        newPrice.toLocaleString();

                      // Update the price display in the countCardProducts array
                      countsCardProducts[index].sumPrice = newPrice;

                      // Log the new count and price
                      console.log(product.count, product.sumPrice);
                      localStorage.setItem(
                        "countsCardProducts",
                        JSON.stringify(countsCardProducts)
                      );
                    }}
                  />
                </span>
              </div>
              <div class="cell">
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
