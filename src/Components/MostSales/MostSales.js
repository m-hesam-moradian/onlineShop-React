import React, { useEffect, useState } from "react";
import "./MostSales.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { API } from "../../FirebaseDatas";
import ProductCard from "../ProductShower/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export default function MostSales() {
  const [todayOff, setTodayOff] = useState([]);
  // const [articles, setarticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setTodayOff(allData);
        // setarticles(allData);
        // console.log(allData);
      });
  }, []);
  function UncontrolledExample({ dataArraypromp }) {
    return (
      <Carousel className="" interval={2000}>
        {todayOff &&
          dataArraypromp.map((data, index) => (
            <Carousel.Item className="row m-0">
              <div className="row m-0">
                <ProductCard dataArray={data}></ProductCard>

                {/* <div className="d-none d-md-flex col ">
              <ProductCard dataArray={todayOff[0]}></ProductCard>
            </div> */}
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    );
  }
  function ProductCard({ dataArray }) {
    const navigate = useNavigate();
    return (
      <Card
        role="button"
        onClick={() => navigate(`/products/${dataArray.id}`)}
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
          src={`${dataArray.img}`}
        />
        <Card.Body className="w-100 ">
          <Card.Title className="mx-4">{dataArray.name}</Card.Title>
          <hr />
          <Card.Text className="d-flex justify-content-between flex-row-reverse p-4">
            <div className="cardTextContainer">
              <div className="SliderPrice d-grid ">
                {dataArray && (
                  <span className="SliderPrice-discont small fw-light text-decoration-line-through text-danger ">
                    {dataArray.priceBeforeOff}
                  </span>
                )}
                <div className="SliderPrice-mainPriceContainer">
                  <span className="SliderPrice-price p-1 fw-bolder ">
                    {" "}
                    {dataArray.price}
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

  //
  //
  //
  //
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory
    ? todayOff.filter((item) => item.category.includes(selectedCategory))
    : todayOff;

  return (
    <div className=" MostSales d-flex justify-content-center align-items-center h-100 container-flud">
      <div className="CountdownTimerContainer row m-0 ">
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
            <button
              onClick={() => handleCategoryClick(null)}
              type="button"
              class={`MostSalesCategoryBTN col ${
                selectedCategory == null && "active"
              }`}
            >
              همه
            </button>

            <button
              onClick={() => handleCategoryClick("MemoryCard")}
              type="button"
              class={`MostSalesCategoryBTN col ${
                selectedCategory == "MemoryCard" && "active"
              }`}
            >
              حافظه
            </button>
            <button
              onClick={() => handleCategoryClick("Headphones")}
              type="button"
              class={`MostSalesCategoryBTN col ${
                selectedCategory == "Headphones" && "active"
              }`}
            >
              هدفون
            </button>
            <button
              onClick={() => handleCategoryClick("PcAndAccessories")}
              type="button"
              class={`MostSalesCategoryBTN col ${
                selectedCategory == "PcAndAccessories" && "active"
              }`}
            >
              لوازم جانبی کامپیوتر
            </button>
          </div>
        </div>
        {todayOff.length > 1 ? (
          <>
            <div className="CountdownTimerProducts col row">
              <div className="d-block d-lg-none">
                <UncontrolledExample
                  dataArraypromp={filteredItems}
                ></UncontrolledExample>
              </div>

              <div className="row d-none d-lg-flex">
                <ProductCard dataArray={filteredItems[1]}></ProductCard>
                <ProductCard dataArray={filteredItems[2]}></ProductCard>
                <ProductCard dataArray={filteredItems[0]}></ProductCard>
              </div>
            </div>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}
