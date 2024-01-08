import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";



const type = {
    
}

export default function SpecialCard({ Data ,type}) {
  return (
    <Carousel
      className="py-2 flex items-center justify-center"
      interval={2000}
      role="button"
    >
      {Data.map((todayOffIndex) => (
        <Carousel.Item key={todayOffIndex.id}>
          <OffCarousel
            key={todayOffIndex.id}
            id={todayOffIndex.id}
            img={todayOffIndex.img}
            name={todayOffIndex.name}
            price={todayOffIndex.price}
            priceBeforeOff={todayOffIndex.priceBeforeOff}
          ></OffCarousel>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function OffCarousel({ id, img, name, price, priceBeforeOff }) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/products/${id}`)}
      className="w-100 d-flex align-items-center rounded-5 overflow-hidden "
      style={{ width: "18rem" }}
    >
      <span className="topTitle p-4 text-secondary ">
        تخفیف های ویژه{" "}
        <span className="topTitleBold fw-bolder text-danger ">امروز</span>
      </span>
      <Card.Img className="w-50" variant="top" src={img} />
      <Card.Body className="w-100 ">
        <Card.Title className="fw-bold ">{name}</Card.Title>
        <hr />
        <Card.Text className="d-flex justify-content-between flex-row-reverse p-4">
          <div className="cardTextContainer">
            <div className="SliderPrice">
              <span className="SliderPrice-discont small fw-light text-decoration-line-through text-danger ">
                {priceBeforeOff}
              </span>
              <div className="SliderPrice-mainPriceContainer">
                <span className="SliderPrice-price p-1 fw-bolder ">
                  {" "}
                  {price.toLocaleString("en-US")}
                </span>
                <span className="SliderPrice-toman text-secondary  ">
                  تومان{" "}
                </span>
              </div>
            </div>
          </div>
          <Button variant="danger" className="bg-red-500">
            <span class="material-symbols-outlined p-2 ">shopping_bag</span>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
