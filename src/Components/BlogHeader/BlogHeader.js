import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

export default function BlogHeader() {
const [BlogCategory, setBlogCategory] = useState([
  {
    src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/honar-cat-1.svg",
    title: "هنر و سینما",
  },
  {
    src: "https://halochin.ir/electronic-shop/wp-content/uploads/2023/04/montakhab-cat-2.svg",
    title: "منتخب سردبیر",
  },
  // Add more objects as needed
]);
    // setBlogCategory([1,2])

  return (
    <div>
      <div className="BlogCategory">
        sss
        <ul>
          {BlogCategory.map((item, index) => {
            <li key={index}>
              <a href="">
                <img src={item.src} alt="" />
                <span>{item.title}</span>
              </a>
            </li>;
          })}
        </ul>
      </div>
      <div className="BlogArtickles"></div>
    </div>
  );
}
