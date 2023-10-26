import React from "react";
import "./CountdownTimer.css";

import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function CountdownTimer() {
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
          حراج ویژه
          <span className="topTitleBold fw-bolder text-warning  "> امروز </span>
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
    <div className="CountdownTimer d-flex justify-content-center align-items-center h-100 container-flud">
      <div className="CountdownTimerContainer  row  m-0">
        <div className="col-12 col-xl-2  offerStick row d-flex  justify-content-center align-items-center flex-column  ">
          <span className="fs-1 fw-bold m-3">چـوب حــراج 🔥 </span>
          <div dir="ltr" className="CountdownTimerNumbers my-2 row">
            <div className="col-auto d-flex flex-column bg-white rounded-3 align-items-center   ">
              <span className="fs-3 text-secondary">23</span>
              <span className="fs-6 text-secondary">ساعت</span>
            </div>
            <div className="col-auto d-flex flex-column  mx-3 bg-white rounded-3 align-items-center   ">
              <span className="fs-3 text-secondary ">18</span>
              <span className="fs-6 text-secondary">دقیقه</span>
            </div>
            <div className="CountdownTimerSecond col-auto d-flex flex-column   rounded-3 align-items-center   ">
              <span className="fs-3 text-white  ">58</span>
              <span className="fs-6  text-white">ثانیه</span>
            </div>
          </div>
          <img
            className="CountdownTimerIMG"
            src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/magic-pic-1.png"
            alt=""
          />
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
