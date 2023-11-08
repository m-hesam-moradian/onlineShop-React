import { API } from "../../FirebaseDatas";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./ProductInfo.css";

export default function ProductInfo() {
  const [ProductData, setProductData] = useState([]);
  const { productID } = useParams();

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((allData) => {
        setProductData(
          allData.find((item) => parseInt(item.id) == parseInt(productID))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(ProductData);
  {
    console.log();
  }
  return (
    <div>
      <Navbar />
      <Breadcrumb dir="ltr" className="backColor fs-3 m-5 p-2 rounded-4 d-grid">
        <Breadcrumb.Item href="#">خانه </Breadcrumb.Item>

        <Breadcrumb.Item href="#">
          کالای دیجیتال
        </Breadcrumb.Item>

        <Breadcrumb.Item>{ProductData.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Footer />
    </div>
  );
}
