// // import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import ProductShower from "../ProductShower/ProductShower";

// import "./BlogPageNewArtickles.css";
// import { ArtickleCard } from "../RecentArticles/RecentArticles";

import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import ProductShower from "../ProductShower/ProductShower";
import "./BlogPageNewArtickles.css";
import { ArtickleCard } from "../RecentArticles/RecentArticles";
// import React from "react";
// import "./marketComponent.css";
// import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
// import { MyComponent } from "../marketComponent/marketComponent";
const itemsPerPage = 8;
const PaginationContainer = () => {
  // useEffect(() => {
  //   Replace this with the actual API endpoint
  //   fetch('https://api.example.com/products')
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data))
  //     .catch((error) => console.error('Error fetching data: ', error));
  // }, []);

  const apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 2, 3, 4, 5];

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
        <div className="col">
          {" "}
          <ArtickleCard
            key={itemIndex}
            // addClass="col"
            Img="https://halochin.ir/electronic-shop/wp-content/uploads/2022/10/blog-new-9.jpg"
            title="رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود"
          />
        </div>
        // <ProductCard
        //   className="MarketProductCard"
        //   key={itemIndex}
        //   data={item}
        // />
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
export default function BlogPageNewArtickles() {
  return (
    <div>
      <ProductShower
        persianTitle="آخرین مطالب"
        englishTitle="Recent Articles"
        SecondLine={false}
        InnerContainer={
          <div className="gap-4 row m-0 ">
            <PaginationContainer />
          </div>
        }
      />
    </div>
  );
}
