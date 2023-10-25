import React from "react";
import "./MostSales.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MostSales() {
  function UncontrolledExample() {
    return (
      <Carousel className="" interval={2000}>
        <Carousel.Item className="row ">
          <div className="row">
            <ProductCard></ProductCard>
            <div className="d-none d-md-flex col ">
              <ProductCard></ProductCard>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="row ">
          <div className="row">
            <ProductCard></ProductCard>
            <div className="d-none d-md-flex col ">
              <ProductCard></ProductCard>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="row ">
          <div className="row">
            <ProductCard></ProductCard>
            <div className="d-none d-md-flex col ">
              <ProductCard></ProductCard>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="row ">
          <div className="row">
            <ProductCard></ProductCard>
            <div className="d-none d-md-flex col ">
              <ProductCard></ProductCard>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  function ProductCard() {
    return (
      <Card
        className="ProductCard  col  d-flex align-items-center rounded-5  border-0 m-5 shadow col "
        style={{ width: "18rem" }}
      >
        <span className="topTitle p-4 text-secondary ">
          پرفروشترین محصولات
          <span className="topTitleBold fw-bolder text-primary  "> هفته </span>
        </span>
        <Card.Img
          className="w-50 mt-5"
          variant="top"
          src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-2.jpg"
        />
        <Card.Body className="w-100 ">
          <Card.Title className="mx-4">
            رم دسکتاپ DDR4 تک کاناله 2666 مگاهرتز کروشیال ظرفیت 8 گیگابایت
          </Card.Title>
          <hr />
          <Card.Text className="d-flex justify-content-between flex-row-reverse p-4">
            <div className="cardTextContainer">
              <div className="SliderPrice d-grid ">
                <span className="SliderPrice-discont small fw-light text-decoration-line-through text-danger ">
                  880,000
                </span>
                <div className="SliderPrice-mainPriceContainer">
                  <span className="SliderPrice-price p-1 fw-bolder ">
                    {" "}
                    780,000
                  </span>
                  <span className="SliderPrice-toman text-secondary  ">
                    تومان{" "}
                  </span>
                </div>
              </div>
            </div>
            <Button
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
  return (
    <div className=" MostSales d-flex justify-content-center align-items-center h-100 ">
      <div className="CountdownTimerContainer row  w-auto">
        <div className="col-12 col-xl-2 MostSalesIMG  row d-flex  justify-content-center align-items-center flex-column  ">
          <img
            className="CountdownTimerIMG"
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/tab-product-sec-pic1-1.png"
            alt=""
          />
          <span className="fs-4 fw-bold m-3">پرفروشترین محصولات</span>
          <span className="ChoosenProductsShowMore d-flex  align-items-center text-secondary    ">
            {" "}
            مشاهده همه{" "}
            <span class="material-symbols-outlined">chevron_left</span>
          </span>
          <div className="d-flex justify-content-center MostSalesCategoryBTNContainer align-items-center m-3 mt-5 gap-3 row ">
            <button type="button" class="MostSalesCategoryBTN col ">
              مودم و شبکه
            </button>
            <button type="button" class="MostSalesCategoryBTN col ">
              کالای دیجیتال
            </button>
            <button type="button" class="MostSalesCategoryBTN col ">
              سیستم استوک
            </button>
            <button type="button" class="MostSalesCategoryBTN col-auto active">
              تجهیزات ذخیره سازی
            </button>
          </div>
        </div>
        <div className="CountdownTimerProducts col row">
          <div className="d-block d-xl-none">
            <UncontrolledExample></UncontrolledExample>
          </div>

          <div className="row d-none d-xl-flex">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            {/* <ProductCard></ProductCard> */}
          </div>
        </div>
      </div>
    </div>
  );
}
