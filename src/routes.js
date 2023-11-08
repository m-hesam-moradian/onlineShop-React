import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Index from "./pages/Index/Index";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import AbloutUs from './pages/AbloutUs/AbloutUs';
import ContactUs from './pages/ContactUs/ContactUs';
// import CourseInfo from "./pages/CourseInfo/CourseInfo";
// import Category from "./pages/Category/Category";
// import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
// import Courses from "./pages/Courses/Courses";
// import Articles from "./pages/Articles/Articles";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductInfo from "./pages/ProductInfo/ProductInfo";


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
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  // { path: "/contact", element: <Contact /> },
  // { path: "/search/:value", element: <Search /> },

  // {
  //   path: "/p-admin/*",
  //   element: <AdminPanel />,
  //   children: [
  //     { path: "", element: <PAdminIndex /> },
  //     { path: "users", element: <Users /> },
  //     { path: "courses", element: <AdminCourses /> },
  //     { path: "menus", element: <Menus /> },
  //     { path: "articles", element: <AdminArticles /> },
  //     { path: "articles/draft/:shortName", element: <Draft /> },
  //     { path: "category", element: <AdminCategory /> },
  //     { path: "contacts", element: <AdminContact /> },
  //     { path: "sessions", element: <Sessions /> },
  //     { path: "comments", element: <Comments /> },
  //     { path: "offs", element: <Offs /> },
  //   ],
  // },
];

export default routes;
