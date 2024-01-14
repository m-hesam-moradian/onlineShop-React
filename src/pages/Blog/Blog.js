import React from "react";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";
import BlogPageNewArtickles from "../../Components/BlogPageNewArtickles/BlogPageNewArtickles";
import "./Blog.css";

export default function Blog() {
   window.scrollTo(0, 0);
  return (
    <div>
      <BlogHeader />
      <BlogPageNewArtickles />
    </div>
  );
}
