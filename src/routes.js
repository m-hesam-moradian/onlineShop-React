import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Index from "./pages/Index/Index";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import AbloutUs from "./pages/AbloutUs/AbloutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Card from "./pages/Card/Card";
import Admin from "./pages/Admin/Admin";
import { Product } from "./pages/Admin/subRoutes/Product";
import { Messages } from "./pages/Admin/subRoutes/Messages";
import { Users } from "./pages/Admin/subRoutes/Users";
import { HomePage } from "./pages/Admin/subRoutes/HomePage";

const routes = [
  { path: "/", element: <Index /> },
  {
    path: "/store",
    element: (
      <>
        <Navbar />
        <Store />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/Ablout-Us",
    element: (
      <>
        <AbloutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/Contact-Us",
    element: (
      <>
        <Navbar />
        <ContactUs />
        <Footer />
      </>
    ),
  },

  { path: "/products/:productID", element: <ProductInfo /> },
  { path: "/Card", element: <Card /> },
  { path: "/login", element: <Login /> },
  {
    path: "/admin/*",
    element: <Admin />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "product", element: <Product /> },
      { path: "Messages/:id", element: <Messages /> },
      {
        path: "Messages",
        element: (
          <div className=" font-bold text-admin-active p-8 bg-[#ffffff66] backdrop-blur-md h-full flex items-center justify-center flex-col ">
            <img
              className="w-20"
              src="https://img.icons8.com/?size=48&id=mXcvtsj8e1Ug&format=gif"
              alt=""
            />
            <div className="flex  text-center">
              {" "}
              لطفا فرد مورد نظر را برای ارسال <br />
              یا دریافت پیام انتخاب کنید
            </div>
          </div>
        ),
      },
      { path: "Users", element: <Users /> },
    ],
  },
];

export default routes;
