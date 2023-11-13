import React, { useContext, useState } from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { SignIn } from "../../Components/auth/SignIn";
import { API } from "../../FirebaseDatas";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // fetch("https://example.com/api")
      //   .then((response) => response.json())
      //   .then((data) => {
      //     data.push(4);
      //     fetch("https://example.com/api", {
      //       method: "PUT",
      //       body: JSON.stringify(data),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     });
      //   });
      

      const res = await fetch(`${API}/registered.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          Name,
          password,
          // token: email + "/" + password,
        }),
      });
      localStorage.setItem("UserEmail", email);
      localStorage.setItem("UserName", Name);
      localStorage.setItem("UserPassword", password);
      //  tokenLocalhost = localStorage.getItem("token");
      // console.log(localStorage.getItem("token"));
      navigate(`/`);

      // const [email, password] = localStorage.getItem("token").split("/");
      // console.log(email); // Output: hesamiwx@gmail.com
      // console.log(password); // Output: mohammadhesam
      // history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch(`${API}registered.json`)
      .then((res) => res.json())
      .then((allData) => {
        console.log(allData);
      });
  }, []);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch(`${API}/registered.json`, {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email,
      //     Name,
      //     password,
      //     // token: email + "/" + password,
      //   }),
      // });
      // localStorage.setItem("UserEmail", email);
      // localStorage.setItem("UserName", Name);
      // localStorage.setItem("UserPassword", password);
      // //  tokenLocalhost = localStorage.getItem("token");
      // // console.log(localStorage.getItem("token"));
      // navigate(`/`);
      // const [email, password] = localStorage.getItem("token").split("/");
      // console.log(email); // Output: hesamiwx@gmail.com
      // console.log(password); // Output: mohammadhesam
      // history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      {/* <SignIn></SignIn> */}
      <div className="row m-0 LoginPage">
        <div className="col m-4 ">
          <span className="mb-4 ">عضویت</span>
          <form
            onSubmit={handleSubmit}
            className="bg-light rounded-5 pb-5 px-5 mt-5"
          >
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                نام کاربری <span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                آدرس ایمیل<span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                گذرواژه<span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="py-5 fs-4 text-secondary">
              اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی
              از تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ
              حریم خصوصی توضیح داده شده است.
            </p>
            <button
              class="btn btn-sm  btn-color fs-4 p-3 rounded-4"
              href="#"
              role="button"
              type="submit"
            >
              عضویت
            </button>
          </form>
        </div>
        <div className="col m-4 ">
          <span className="mb-4 ">ورود</span>
          <form
            onSubmit={handleSubmit}
            className="bg-light rounded-5 pb-5 px-5 mt-5"
          >
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                نام کاربری یا آدرس ایمیل
                <span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" pt-5">
              <span className="fs-4 text-secondary">
                گذرواژه<span className="text-danger fw-bold  ">*</span>
              </span>
              <input
                class="form-control fs-4 p-3 rounded-4 border-0 "
                name=""
                id=""
                aria-describedby="helpId"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a
              class="btn my-5 btn-sm  btn-color fs-4 p-3 rounded-4"
              href="#"
              role="button"
            >
              ورود
            </a>
            <a href="#" className="me-5 fs-4 text-secondary">
              گذرواژه خود را فراموش کرده اید؟
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
