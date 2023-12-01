import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Index from "./pages/Index/Index";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import AbloutUs from "./pages/AbloutUs/AbloutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Card from "./pages/Card/Card";

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
  { path: "/register", element: <Register /> },
];

export default routes;
