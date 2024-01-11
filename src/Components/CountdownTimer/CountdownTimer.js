import React from "react";
import "./CountdownTimer.css";
import { API } from "../../FirebaseDatas";
import { useEffect } from "react";
import { useState } from "react";
import SpecialCard, { SpecialCardsItems } from "../SpecialCard/SpecialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function CountdownTimer() {
  const [todayOff, setTodayOff] = useState([]);

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => res.json())
      .then((allData) => {
        setTodayOff(allData);
      });
  }, []);
  const type = {
    color: "warning",
    title: " حراج ویژه",
    titleSpan: " امروز  ",
  };

  //setinterval for countdown

  return (
    <div className="CountdownTimer d-flex justify-content-center align-items-center h-100 container-flud">
      <div className="CountdownTimerContainer  row    grid grid-cols-5 border-none">
        <div className=" col-span-5 lg:col-span-1  offerStick row d-flex  justify-content-center align-items-center flex-column  w-[100%] lg:w-[30rem]  mx-auto ">
          <span className="fs-1 fw-bold m-2">چـوب حــراج 🔥 </span>
          <div dir="ltr" className="CountdownTimerNumbers my-2 row">
            <div className="col-auto d-flex flex-column bg-white rounded-3 align-items-center  shadow-md ">
              <span className="fs-3 text-secondary">23</span>
              <span className="fs-6 text-secondary">ساعت</span>
            </div>
            <div className="col-auto d-flex flex-column  mx-3 bg-white rounded-3 align-items-center  shadow-md ">
              <span className="fs-3 text-secondary ">18</span>
              <span className="fs-6 text-secondary">دقیقه</span>
            </div>
            <div className="CountdownTimerSecond col-auto d-flex flex-column   rounded-3 align-items-center   shadow-md">
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
        {todayOff.length > 1 ? (
          <>
            <div className="CountdownTimerProducts col-span-5  lg:col-span-4 row mt-8 ">
              {/* <div className="d-block d-lg-none container">
                <SpecialCard
                  Data={todayOff}
                  type={type}
                  key={todayOff}
                ></SpecialCard>
              </div> */}
              <div className="row  d-flex flex-nowrap gap-5 py-8 overflow-auto bg-stone-100 rounded-3xl">
                {todayOff.map((todayOffIndex) => (
                  <div className="w-96">
                    <SpecialCardsItems
                      type={type}
                      key={todayOffIndex.id}
                      id={todayOffIndex.id}
                      img={todayOffIndex.img}
                      name={todayOffIndex.name}
                      price={todayOffIndex.price}
                      priceBeforeOff={todayOffIndex.priceBeforeOff}
                    ></SpecialCardsItems>
                  </div>
                ))}
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
