import "./marketComponent.css";
import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "@mui/material/Pagination";
import ProductCard from "../ProductShower/ProductCard/ProductCard";
import { API } from "../../App";
import {  useNavigate } from "react-router-dom";


export default function MarketComponent() {
  const [ProductArray, setProductArray] = useState([]);
  const [OrginalDatas, setOrginalDatas] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => res.json())
      .then((allData) => {
        setProductArray(allData);
        setOrginalDatas(allData);
      });
  }, []);
  return (
    <div className="row m-0">
      <div class="marketComponentFilterPart p-5 gap-4 d-grid h-100 col-12 col-lg-auto">
        <div className="searchContainer   ">
          {" "}
          <input
            type="text"
            class="form-control fs-4 p-3 rounded-4"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="جستجو ..."
            onChange={(event) => {
              let result = ProductArray.filter((product) =>
                product.name
                  .toUpperCase()
                  .includes(event.target.value.toUpperCase())
              );
              if (!event.target.value) {
                result = [];
              }
              setsearchResult(result);

            }}
          />
          <ul className="searchList rounded-4 d-grid gap-3">
            {searchResult &&
              searchResult.map((event) => (
                <a key={event}
                  onClick={() => navigate(`/products/${event.id}`)}
                  href=""
                  className=" searchListItem"
                >
                  <img src={event.img} alt="" />
                  <span>{event.name}</span>
                </a>
              ))}
          </ul>
        </div>
        <a class="btn w-100 marketComponentSearchBTN btn-color fs-4 p-3 rounded-4">
          جستجو کنید
        </a>
        <DoubleSlider
          setProductArray={setProductArray}
          OrginalDatas={OrginalDatas && OrginalDatas}
        />
        <DropDown
          setProductArray={setProductArray}
          OrginalDatas={OrginalDatas}
          title="دسته بندی محصولات"
          items={[
            {
              title: "انواع کارت حافظه",
              category: `MemoryCard`,
            },
            {
              title: "تجهیزات شبکه",
              category: `NetworkTools`,
            },
            {
              title: "کالای دیجیتال",
              category: `DigitalProduct`,
            },
            {
              title: "کامپیوتر و لوازم جانبی",
              category: `PcAndAccessories`,
            },
            {
              title: "هدفون، هدست",
              category: `Headphones`,
            },
          ]}
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
                {
                  title: "براساس قیمت از ارزان ترین به گران ترین",
                  category: `cte`,
                },
                {
                  title: "براساس قیمت از گران ترین به ارزان ترین",
                  category: `etc`,
                },
                {
                  title: "براساس تاریخ از قدیمی ترین به جدیدترین",
                  category: `otn`,
                },
                {
                  title: "براساس تاریخ از جدیدترین به قدیمی ترین",
                  category: `nto`,
                },
              ]}
            />
          </div>
        </header>
        <div className="marketComponentProductContainer row m-0">
          <MyComponent
            ProductArray={ProductArray}
          ></MyComponent>
        </div>
      </div>
    </div>
  );
}

function DropDown({ title, items, setProductArray, OrginalDatas }) {
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
          return (
            <Dropdown.Item
              key={element}
              className="d-flex justify-content-start "
              onClick={() => {
                const targetCategory = element.category;

                  const filteredObjects =
                    targetCategory &&
                    OrginalDatas &&
                    OrginalDatas.filter((object) =>
                      object.category.includes(targetCategory)
                    );

                  filteredObjects && setProductArray(filteredObjects);
                  console.log(OrginalDatas && filteredObjects);
              }}
            >
              {element.title}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const DoubleSlider = ({ OrginalDatas, setProductArray }) => {
  const [range, setRange] = useState([100000, 500000]);
  const handleChange = (event, newValue) => {
    setRange(newValue);
    let filteredPrices =
      OrginalDatas &&
      OrginalDatas.filter(
        (index) => index.price >= newValue[0] && index.price <= newValue[1]
      );
    setProductArray(filteredPrices);
  };

  return (
    <div className=" border   rounded-4  p-5">
      <span> فیلتر قیمت</span>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(value) => `${value}`}
        step={1}
        min={0}
        max={1000000}
      />
      <span className="m-auto d-flex justify-content-center text-secondary ">
        {range[1].toLocaleString("en-US")} تومان —{" "}
        {range[0].toLocaleString("en-US")} تومان
      </span>
    </div>
  );
};

const itemsPerPage = 9;

const MyComponent = ({ ProductArray }) => {
  
  const apiData = ProductArray;
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
      {ProductArray &&
        currentData.map((item, itemIndex) => (
          <ProductCard
            dataArray={item}
            className="MarketProductCard"
            key={itemIndex}
            data={item}
          />
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

