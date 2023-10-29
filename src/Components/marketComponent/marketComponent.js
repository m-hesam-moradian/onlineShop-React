// import React from "react";
import "./marketComponent.css";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Dropdown from "react-bootstrap/Dropdown";

function ProductCategory() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="w-100 bg-white text-secondary  border-secondary fs-4  d-flex align-items-center gap-3 rounded-4"
      >
        دسته بندی محصولات
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 fs-5 ">
        <Dropdown.Item
          href="#/action-1 "
          className="d-flex justify-content-start "
        >
          انواع کارت حافظه
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          className="d-flex justify-content-start "
        >
          تجهیزات شبکه
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="d-flex justify-content-start "
        >
          کالای دیجیتال
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="d-flex justify-content-start "
        >
          {" "}
          کامپیوتر و لوازم جانبی
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="d-flex justify-content-start "
        >
          هدفون، هدست
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
function ProductBrand() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="w-100 bg-white text-secondary e border-secondary fs-4 d-flex align-items-center gap-3 rounded-4 "
      >
        برند محصولات
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 fs-5">
        <Dropdown.Item
          href="#/action-1"
          className="d-flex justify-content-start "
        >
          kaku
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          className="d-flex justify-content-start "
        >
          rapoo
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="d-flex justify-content-start "
        >
          silicon power
        </Dropdown.Item>
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
    <div>
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

export default function marketComponent() {
  return (
    <div className="row">
      <div class="marketComponentFilterPart p-5 gap-4 d-grid h-100 ">
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
        <ProductCategory />
        <ProductBrand />
        <a
          class="btn btn-sm w-100 btn-color fs-4 p-3 rounded-4"
          href="#"
          role="button"
        >
          {" "}
          اعمال فیلتر ها{" "}
        </a>
      </div>
      <div class="col p-5">
        
      </div>
    </div>
  );
}
