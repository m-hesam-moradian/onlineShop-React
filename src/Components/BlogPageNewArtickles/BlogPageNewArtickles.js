import React, { useEffect } from "react";
import ProductShower from "../ProductShower/ProductShower";
import "./BlogPageNewArtickles.css";
import { ArtickleCard } from "../RecentArticles/RecentArticles";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { API } from "../../App";
const itemsPerPage = 8;
const PaginationContainer = () => {
  const [ArtickleArray, setArtickleArray] = useState([]);

  useEffect(() => {
    fetch(`${API}articles`)
      .then((res) => res.json())
      .then((allData) => {
        setArtickleArray(allData);
        console.log(allData);
      });
  }, []);

  const apiData = ArtickleArray;

  const [page, setPage] = useState(1);
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
      {ArtickleArray &&
        currentData.map((item, itemIndex) => (
          <div key={item} className="col">
            {" "}
            <ArtickleCard ArtickleArray={item} key={itemIndex} />
          </div>
        ))}

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
