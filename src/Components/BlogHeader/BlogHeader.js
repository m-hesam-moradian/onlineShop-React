import React, { useEffect } from "react";
import { useState } from "react";
import "./BlogHeader.css";
import { API } from "../../App";

export default function BlogHeader() {
  const [BlogCategory, setBlogCategory] = useState([]);
  const [MainBanner, setMainBanner] = useState([]);
  useEffect(() => {
    fetch(`${API}BlogCategory`)
      .then((res) => res.json())
      .then((allData) => {
        setBlogCategory(allData);
      });
  }, []);
  useEffect(() => {
    fetch(`https://mhm-jsonserver.liara.run/MainBanner`)
      .then((res) => res.json())
      .then((allData) => {
        setMainBanner( allData);
        console.log(MainBanner);
        
      });
    }, []);
    
    return (
    <div className="bg-light row m-0">
      <div className="BlogCategory row m-0 col col-md-auto ">
        <ul className=" bg-white shadow m-4 p-5 px-5 rounded-4 gap-4  d-flex flex-column col-auto">
          {BlogCategory &&
            BlogCategory.map((item, index) => (
              <li key={item}>
                <a href="" className="d-flex">
                  <img className="mx-4" src={item.src} alt="" />
                  <span className="text-secondary ">{item.title}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="row col  m-0 m-sm-5 gap-4">
        <div className="col-lg-12 gap-4 row m-0">
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{
                backgroundImage: `url(${MainBanner.length>0&&MainBanner[0].src})`,
              }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner.length>0&&MainBanner[0].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner.length>0&&MainBanner[0].date}
                  </span>
                </span>
                <span className="">{MainBanner.length>0&&MainBanner[0].title}</span>
              </div>
            </div>
          </div>
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{
                backgroundImage: `url(${MainBanner.length>0&&MainBanner[1].src})`,
              }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner.length>0&&MainBanner[1].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner.length>0&&MainBanner[1].date}
                  </span>
                </span>
                <span className="">{MainBanner.length>0&&MainBanner[1].title}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col row gap-4 m-0">
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{
                backgroundImage: `url(${MainBanner.length>0&&MainBanner[2].src})`,
              }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner.length>0&&MainBanner[2].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner.length>0&&MainBanner[2].date}
                  </span>
                </span>
                <span className="">{MainBanner.length>0&&MainBanner[2].title}</span>
              </div>
            </div>
          </div>
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{
                backgroundImage: `url(${MainBanner.length>0&&MainBanner[3].src})`,
              }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner.length>0&&MainBanner[3].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner.length>0&&MainBanner[3].date}
                  </span>
                </span>
                <span className="">{MainBanner.length>0&&MainBanner[3].title}</span>
              </div>
            </div>
          </div>
          <div className="BlogArtickles p-0 col  row m-0">
            <div
              id="miuDesign"
              className="HeaderArtickle col d-flex  shadow-lg   d-flex justify-content-center align-items-end  text-white  "
              style={{
                backgroundImage: `url(${MainBanner.length>0&&MainBanner[4].src})`,
              }}
            >
              <div className="HeaderArtickleContainer z-1 m-5">
                <span className="d-flex align-content-center text-white opacity-75 d-flex justify-content-center   fs-6 my-2 gap-3 ">
                  <span className="d-flex align-content-center align-items-center ">
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {MainBanner.length>0&&MainBanner[4].comment}
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    {MainBanner.length>0&&MainBanner[4].date}
                  </span>
                </span>
                <span className="">{MainBanner.length>0&&MainBanner[4].title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
