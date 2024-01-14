import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import SpecialCard from "../SpecialCard/SpecialCard";
import {API} from "../../App"

export default function Landing() {
  const [todayOff, setTodayOff] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => res.json())
      .then((allData) => {
        setTodayOff(allData);
      });
  }, []);

  const type = {
    color: "danger",
    title: "تخفیف ویژه ",
    titleSpan: "امروز",
  };
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
          <div className="col-12 px-2 p-md-0 col-md-3   rounded-5 flex items-center justify-center">
            <SpecialCard Data={todayOff} type={type}></SpecialCard>
          </div>
        </div>
      </div>
    </section>
  );
}
