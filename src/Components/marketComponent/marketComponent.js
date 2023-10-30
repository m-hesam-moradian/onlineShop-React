// import React from "react";
import "./marketComponent.css";
import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "@mui/material/Pagination";

function DropDown({ title, items }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="w-100 bg-white text-secondary  border fs-4  d-flex align-items-center gap-3 rounded-4"
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className=" rounded-4 bg-light border-0 shadow fs-5 ">
        {items.map((element) => {
          // {console.log(element)}
          return (
            <Dropdown.Item
              href="#/action-1 "
              className="d-flex justify-content-start "
            >
              {/* {console.log(element)} */}
              {element}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const DoubleSlider = () => {
  const [range, setRange] = useState([2500, 5000]);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <div className=" border   rounded-4  p-5">
      {/* <Typography id="range-slider" gutterBottom></Typography> */}
      <span> فیلتر قیمت</span>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(value) => `${value}`}
        step={1}
        min={0}
        max={10000}
      />
      <span className="m-auto d-flex justify-content-center text-secondary ">
        {range[1]} تومان — {range[0]} تومان
      </span>
      {/* <Typography className="d-flex">
      </Typography> */}
    </div>
  );
};

function ProductCard() {
  return (
    <Card
      className="ProductCard w-100 d-flex align-items-center rounded-5 col border-0 m-3 shadow-sm "
      style={{ width: "18rem" }}
    >
      {/* <span className="topTitle p-4 text-secondary ">
          تخفیف های ویژه{" "}
          <span className="topTitleBold fw-bolder text-danger ">امروز</span>
        </span> */}
      <Card.Img
        className="w-50 mt-5"
        variant="top"
        src="https://halochin.ir/electronic-shop/wp-content/uploads/2023/08/product-image-2.jpg"
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

// import React, { useEffect, useState } from 'react';

// function Product({ data }) {
//   // Your ProductCard component here
//   return (
//     <div className="product-card">
//       {/* Render data here */}
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////

// function Market() {

//   return (
//     <div>
//       {groupedData.map((group, index) => (
//         <div key={index} className="marketComponentProductContainer row m-0">
//           {group.map((item, itemIndex) => (
//             <ProductCard
//               className="MarketProductCard"
//               key={itemIndex}
//               data={item}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
const itemsPerPage = 9; // Number of items per page

const MyComponent = () => {
  // useEffect(() => {
  //   Replace this with the actual API endpoint
  //   fetch('https://api.example.com/products')
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data))
  //     .catch((error) => console.error('Error fetching data: ', error));
  // }, []);

  const apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 2, 3, 4, 5, 6, 7, 8];

  const [page, setPage] = useState(1); // Current page
  const data = apiData;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {currentData.map((item, itemIndex) => (
        <ProductCard
          className="MarketProductCard"
          key={itemIndex}
          data={item}
        />
      ))}
      {/* <Market></Market> */}

      {/* Render Pagination component */}
      <Pagination
        className="d-flex justify-content-center "
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        shape="rounded"
      />
    </>
  );
};

////////////////////////////////////////////////////////////////

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultArray = [];

// for (let i = 0; i < originalArray.length; i += 3) {
//   resultArray.push(originalArray.slice(i, i + 3));
// }

// Now, you can use resultArray in your JSX code

export default function marketComponent() {
  return (
    <div className="row">
      <div class="marketComponentFilterPart p-5 gap-4 d-grid h-100 col-12 col-lg-auto">
        <input
          type="text"
          class="form-control fs-4 p-3 rounded-4"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="جستجو ..."
        />
        <a class="btn w-100 marketComponentSearchBTN btn-color fs-4 p-3 rounded-4">
          جستجو کنید
        </a>
        <DoubleSlider />
        <DropDown
          title="دسته بندی محصولات"
          items={[
            "انواع کارت حافظه",
            "تجهیزات شبکه",
            "کالای دیجیتال",
            "کامپیوتر و لوازم جانبی",
            "هدفون، هدست",
          ]}
        />
        <DropDown
          title="برند محصولات"
          items={["kaku", "rapoo", "silicon power", "verity", "تسکو"]}
        />

        <a
          class="btn btn-sm w-100 btn-color fs-4 p-3 rounded-4"
          href="#"
          role="button"
        >
          {" "}
          اعمال فیلتر ها{" "}
        </a>
      </div>
      <div class="col p-5 marketComponentProducts">
        <header className="d-flex justify-content-between border p-5 rounded-5">
          <h2 className="fs-2 fw-bold text-dark opacity-75 ">فروشگاه</h2>
          <div className="">
            <DropDown
              title="مرتب سازی براساس ..."
              items={[
                "براساس قیمت از ارزان ترین به گران ترین",
                "براساس قیمت از گران ترین به ارزان ترین",
                "براساس تاریخ از قدیمی ترین به جدیدترین",
                "براساس تاریخ از جدیدترین به قدیمی ترین",
              ]}
            />
          </div>
        </header>
        {/* <div className="marketComponentProductContainer row m-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div> */}
        {/* <Market></Market> */}
        <div className="marketComponentProductContainer row m-0">
          <MyComponent></MyComponent>
        </div>
      </div>
    </div>
  );
}
