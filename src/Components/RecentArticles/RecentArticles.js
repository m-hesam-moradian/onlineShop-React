import React, { useEffect, useState } from "react";
import "./RecentArticles.css";
import ProductShower from "../ProductShower/ProductShower";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { API } from "../../FirebaseDatas";
import { useNavigate } from "react-router-dom";

export function ArtickleCard({ Img, addClass = "", ArtickleArray }) {
  return (
    <Card
      className={` ProductCard ArtickleCard w-100 d-flex align-items-center rounded-5 col border-0  shadow p-3 ${addClass} `}
      style={{ width: "18rem" }}
    >
      <div className="ArtickleCardIMGcontainer">
        <Card.Img
          className="w-100 ArtickleCardIMG rounded-4 "
          variant="top"
          src={`${ArtickleArray.img}`}
        />
      </div>
      <Card.Body className="w-100 ">
        <Card.Title className="mx-4">
          {ArtickleArray.title}
          <span className="d-flex align-content-center text-secondary  fs-6 my-2 gap-3 ">
            {" "}
            <span className="d-flex align-content-center align-items-center ">
              {" "}
              <i aria-hidden="true" class="far fa-comment mx-2"></i>
              {ArtickleArray.StudyTimeline} نظر
            </span>
            <span className="d-flex align-content-center align-items-center ">
              {/* <span class="material-symbols-outlined fs-3 mx-2">category</span>
              دسته: {ArtickleArray.category} */}
            </span>
            <i
              aria-hidden="true"
              class="fas ArtickleCardArrow fa-arrow-left"
            ></i>
          </span>
        </Card.Title>
        <hr />
        <Card.Text className="text-secondary  fs-6 my-2 opacity-75 ">
          {ArtickleArray.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export function MiniArtickleCard({ ArtickleArray }) {
  return (
    <>
      <div className="MiniArtickleCard">
        <div className="MiniArtickleCardContainer">
          <Card className="ProductCard ArtickleCard w-100 d-flex flex-row  align-items-center rounded-5 col border-0  ">
            <Card.Img
              className=" MiniArtickleCardIMG rounded-4 "
              variant="top"
              src={`${ArtickleArray.img}`}
            />
            <Card.Body className="w-100 ">
              <Card.Title className="me-2">
                {ArtickleArray.title}

                <span className="d-flex align-content-center text-secondary  fs-6 my-2 gap-3 ">
                  {" "}
                  <span className="d-flex align-content-center align-items-center ">
                    {" "}
                    <i aria-hidden="true" class="far fa-comment mx-2"></i>
                    {ArtickleArray.StudyTimeline} نظر
                  </span>
                  <span className="d-flex align-content-center align-items-center ">
                    {/* <span class="material-symbols-outlined fs-3 mx-2">
                      category
                    </span>
                    دسته: {ArtickleArray.category} */}
                    
                  </span>
                </span>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default function RecentArticles() {
       const navigate = useNavigate();

  const [ArtickleArray, setArtickleArray] = useState([]);

  useEffect(() => {
    fetch(`${API}articles.json`)
      .then((res) => res.json())
      .then((allData) => {
        setArtickleArray(allData);
        // setLetReturner(true);
      });
  }, []);
  // console.log(ArtickleArray);
  return (
    <>
      <ProductShower
        persianTitle="آخرین مطالب"
        englishTitle="Recent Articles"
        SecondLine={false}
        InnerContainer={
          ArtickleArray && (
            <div
              // role="button"
              onClick={() => navigate(`/blog`)}
              className="d-flex  gap-5 row"
            >
              <div className="col col-lg-3 d-grid gap-4 MiniArtickleCardsContainer ">
                {ArtickleArray.reverse()
                  .slice(0, 3)
                  .map((item) => (
                    <MiniArtickleCard
                      ArtickleArray={item}
                      Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
                    />
                  ))}
              </div>
              {ArtickleArray.reverse()
                .slice(0, 3)
                .map((item) => (
                  <ArtickleCard
                    ArtickleArray={item}
                    Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
                    title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
                  />
                ))}
            </div>
          )
        }
      />
    </>
  );
}
