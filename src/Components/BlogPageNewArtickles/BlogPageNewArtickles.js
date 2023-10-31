import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";

import "./BlogPageNewArtickles.css";
import { ArtickleCard } from "../RecentArticles/RecentArticles";

export default function BlogPageNewArtickles() {
  return (
    <div>
      <ProductShower
        persianTitle="آخرین مطالب"
        englishTitle="Recent Articles"
        SecondLine={false}
        InnerContainer={
          <div className="gap-4 d-grid">
            <div className="d-flex  gap-5 row">
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-10.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-11.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
            </div>
            <div className="  gap-5  row d-none d-lg-flex ">
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-10.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
              <ArtickleCard
                Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-11.jpg"
                title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
