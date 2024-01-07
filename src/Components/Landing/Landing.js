import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { API } from "../../FirebaseDatas";
impoart "./Landing.css";

export default function Landing() {
  const [todayOff, setTodayOff] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setTodayOff(allData);
      });
  }, []);
  function UncontrolledExample() {
    return (
      <Carousel
        className="py-2 flex items-center justify-center"
        interval={2000}
        role="button"
      >
        {todayOff.map((todayOffIndex) => (
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
  return (
    <section className="landing py-3">
      <div className="containerz  ">
        <div className="row m-auto gap-3">
          <div className="col-12 col-md   m-auto">
            <a className=" w-100 my-3">
              {" "}
              <img
                role="button"
                onClick={() => navigate(`/store`)}
                className="w-100 h-100 rounded-5 "
                src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/Slider-3.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-12 px-2 p-md-0 col-md-3   rounded-5">
            <UncontrolledExample></UncontrolledExample>
          </div>
        </div>
      </div>
    </section>
  );
}
