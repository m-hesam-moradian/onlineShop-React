import React from "react";
import "./RecentArticles.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function RecentArticles() {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/courses`)
  //     .then((res) => res.json())
  //     .then((allCourses) => setCourses(allCourses));
  // }, []);

  function ArtickleCard({ Img }) {
    return (
      <Card
        className="ProductCard ArtickleCard w-100 d-flex align-items-center rounded-5 col border-0  shadow-sm p-3"
        style={{ width: "18rem" }}
      >
        {/* <span className="topTitle p-4 text-secondary ">
          تخفیف های ویژه{" "}
          <span className="topTitleBold fw-bolder text-danger ">امروز</span>
        </span> */}
        <Card.Img
          className="w-100 ArtickleCardIMG rounded-4 "
          variant="top"
          src={Img}
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
    <>
      <div className="ChoosenProductscontainer bg-light p-4 ">
        <div className=" ChoosenProducts d-flex  align-items-center ">
     
          <span className="ChoosenProductsPersianTitle fw-bolder     ">
            محصولاتـــ جـدید
          </span>
          <span className="ChoosenProductsEnglishTitle d-none d-md-inline text-secondary">
            Recent Products
          </span>
          <hr className="col m-1 text-secondary   " />
          <span className="ChoosenProductsShowMore d-flex  align-items-center text-secondary    ">
            {" "}
            مشاهده همه{" "}
            <span class="material-symbols-outlined">chevron_left</span>
          </span>
        </div>
        <div className="courses-content mt-5 ">
          <div className="">
            <div className="row">
              <div className="col-3">
                <i aria-hidden="true" class="far fa-comment"></i>
                <span class="material-symbols-outlined">category</span>
              </div>
              <ArtickleCard Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg" title='رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود' />
              <ArtickleCard Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-10.jpg" title='رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود' />
              <ArtickleCard Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-11.jpg" title='رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
