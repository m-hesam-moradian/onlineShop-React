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
        className="w-100 bg-white text-dark border-black fs-4"
      >
        ProductCategory Button
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
function ProductBrand() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="w-100 bg-white text-dark border-black fs-4"
      >
        ProductBrand Button
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
      <div class="col-3 p-5 gap-3 d-grid">
        <input
          type="text"
          class="form-control fs-4"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
        <a class="btn w-100 marketComponentSearchBTN btn-color fs-4">
          جستجو کنید
        </a>
        <DoubleSlider />
        <ProductCategory />
        <ProductBrand />
        <a class="btn btn-sm w-100 btn-color fs-4" href="#" role="button">
          {" "}
          succes{" "}
        </a>
      </div>
    </div>
  );
}
