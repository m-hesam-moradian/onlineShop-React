import { API } from "../../FirebaseDatas";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function ProductInfo() {
  const [ProductArray, setProductArray] = useState([]);
  const [ProductData, setProductData] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const { productID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((allData) => {
        // setProductArray(allData);
        // setOrginalDatas(allData);
        // console.log(allData);
        setProductData(
          allData.find((item) => parseInt(item.id) == parseInt(productID))
        );
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(ProductArray, productID, ProductData);
  {
    console.log();
  }
  return (
    <div>
      <Navbar />
      <Breadcrumb dir="ltr" className="">
        <Breadcrumb.Item dir="" href="#">
          خانه{" "}
        </Breadcrumb.Item>

        <Breadcrumb.Item
          dir=""
          href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
        >
          کالای دیجیتال
        </Breadcrumb.Item>

        <Breadcrumb.Item dir="" active>
          {ProductData && ProductData.name}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Footer />
    </div>
  );
}
