import { API } from "../../FirebaseDatas";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductInfoHeader from "../../Components/ProductInfoHeader/ProductInfoHeader";
import "./ProductInfo.css";
import ProductShower from "../../Components/ProductShower/ProductShower";

export default function ProductInfo() {
  const [ProductData, setProductData] = useState([]);
  const [AllDatas, setAllDatas] = useState([]);
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
        // setAllDatas([...allData]);
        setAllDatas(allData);

        setProductData(
          allData.find((item) => parseInt(item.id) == parseInt(productID))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(AllDatas);
  function Description({ ProductData }) {
    return (
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          className="active  m-5 opacity-75 p-5"
          eventKey="توضیحات محصول"
          title="توضیحات محصول"
        >
          امروزه موسیقی جایگاه بسیار خاصی در بین مردم پیدا کرده‌است که به
          وسیله‌ی آن می‌توانید خود را از دنیای اطراف خود رها ساخته و در آرامش،
          به گوش دادن موسیقی مورد علاقه خود بپردازید. ایرفون بلوتوث تسکو مدل TH
          5398 به صورت گردنی طراحی شده است و دو سری آن توسط یک سیم به هم متصل
          شده که این امر باعث کاهش وزن این محصول می‌شود. بر روی TH 5398 کلیدهایی
          قرار داده شده است که عملکرد شما را بسیار آسان می کند و بوسیله آن ها می
          توانید به راحتی کنترل موسیقی را در دست گرفته و عمل کنید. صدای آن را کم
          و زیاد کنید و روی آنچه که پخش می شود سلطه داشته باشید. همچنین
          میکروفونی روی آن تعبیه شده که به شما اجازه مکالمه می دهد. افزون بر
          موارد فوق باید این مورد را هم اضافه کرد که گوشی های TH 5398 حالتی
          مگنتی داشته و به شما این امکان را می دهد که بتوانید در هنگامی که از
          ایرفون استفاده ای ندارید و فقط آن را روی دوش خود قرار داده اید، گوشی
          های آن را به یکدیگر متصل کرده و مانع از افتادن آن شوید. گفتنی است که
          پس از یکبار شارژ کامل TH 5398 که زمانی حدود 2 ساعت به طول می انجامد،
          شما می توانید چیزی حدود 3 تا 4 ساعت به موسیقی گوش دهید و یا به مکالمه
          کردن بپردازید .
        </Tab>
        <Tab eventKey="نظرات (0)" title="نظرات (0)">
          نظری برای این محصول وجود ندارد
        </Tab>
        {/* <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab> */}
      </Tabs>
    );
  }

  // console.log(ProductData);
  {
    // console.log([...AllDatas]);
  }
  return (
    <div>
      <Navbar />

      <Breadcrumb dir="ltr" className="backColor fs-3 m-5 p-2 rounded-4 d-grid">
        <Breadcrumb.Item href="#">خانه </Breadcrumb.Item>
        <Breadcrumb.Item href="#">کالای دیجیتال</Breadcrumb.Item>
        <Breadcrumb.Item>{ProductData.name}</Breadcrumb.Item>
      </Breadcrumb>

      <ProductInfoHeader ProductData={ProductData} />
      <Description ProductData={ProductData} />

      {/* {ProductData && (
        <ProductShower
          dataArrayContainer={AllDatas}
          persianTitle="محصولاتـــ مرتبط"
          englishTitle="Related Products"
        />
      )} */}
      {AllDatas.length > 0 ? (
        <ProductShower
          dataArrayContainer={AllDatas}
          persianTitle="محصولاتـــ مرتبط"
          englishTitle="Related Products"
        />
      ) : (
        "Loading..."
      )}

      <Footer />
    </div>
  );
}
