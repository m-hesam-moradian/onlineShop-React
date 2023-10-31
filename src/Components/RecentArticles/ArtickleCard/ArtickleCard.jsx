import React from "react";
import "../RecentArticles.css";
import ProductShower from "../ProductShower/ProductShower";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ArtickleCard({ Img }) {
  return (
    <Card
      className="ProductCard ArtickleCard w-100 d-flex align-items-center rounded-5 col border-0  shadow p-3"
      style={{ width: "18rem" }}
    >
      <Card.Img
        className="w-100 ArtickleCardIMG rounded-4 "
        variant="top"
        src={Img}
      />
      <Card.Body className="w-100 ">
        <Card.Title className="mx-4">
          رم دسکتاپ DDR4 تک کاناله 2666 مگاهرتز کروشیال ظرفیت 8 گیگابایت
          <span className="d-flex align-content-center text-secondary  fs-6 my-2 gap-3 ">
            {" "}
            <span className="d-flex align-content-center align-items-center ">
              {" "}
              <i aria-hidden="true" class="far fa-comment mx-2"></i>
              بدون نظر
            </span>
            <span className="d-flex align-content-center align-items-center ">
              <span class="material-symbols-outlined fs-3 mx-2">category</span>
              دسته: بازی ویدئویی
            </span>
            <i
              aria-hidden="true"
              class="fas ArtickleCardArrow fa-arrow-left"
            ></i>
          </span>
        </Card.Title>
        <hr />
        <Card.Text className="text-secondary  fs-6 my-2 opacity-75 ">
          روز گذشته شیائومی اعلام کرد که گوشی CIVI 2 را در تاریخ ۵ مهر رسما
          رونمایی خواهد کرد. اما حالا قبل از رونمایی این ساعت، شیائومی...
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
