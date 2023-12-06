import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { API } from "../../FirebaseDatas";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Login, setLogin] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if ((email.length > 5) && (Name.length > 3) && (password.length > 5)) {
        const res = await fetch(`${API}/registered.json`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            Name: Name,
            password: password,
          }),
        });
        localStorage.setItem("UserEmail", email);
        localStorage.setItem("UserName", Name);
        localStorage.setItem("UserPassword", password);
        Swal.fire({
          title: "حساب شما با موفقیت ساخته شد",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/`);
          }
        });
      } else {
        if (email.length <= 5) {
          Swal.fire({
            title: "تعداد کاراکتر ایمیل باید بیشتر از 5 باشد",
            icon: "error",
          });
        }
        if (Name.length <= 3) {
          Swal.fire({
            title: "تعداد کاراکتر نام باید بیشتر از 3 باشد",

            icon: "error",
          });
        }
        if (password.length <= 5) {
          Swal.fire({
            title: "تعداد کاراکتر رمز باید بیشتر از 5 باشد",

            icon: "error",
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch(`${API}registered.json`)
      .then((res) => res.json())
      .then((allData) => {
        setLogin(Object.values(allData));
      });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      if (email.length > 5 && password.length > 4) {
        Login.map((dataObj) => {
          if (dataObj.email == email && dataObj.password == password) {
            localStorage.setItem("UserEmail", dataObj.email);
            localStorage.setItem("UserName", dataObj.Name);
            localStorage.setItem("UserPassword", dataObj.password);

            Swal.fire({
              title: "با موفقیت وارد اکانت خود شدید",
              icon: "success",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate(`/`);
              }
            });
          }
        });
      } else {
        if (email.length <= 5) {
          Swal.fire({
            title: "تعداد کاراکتر ایمیل باید بیشتر از 5 باشد",
            icon: "error",
          });
        }
        if (password.length <= 4) {
          Swal.fire({
            title: "تعداد کاراکتر رمز باید بیشتر از 5 باشد",

            icon: "error",
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />

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
            onSubmit={handleSubmitLogin}
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
            <button
              class="btn btn-sm  btn-color fs-4 p-3 rounded-4"
              href="#"
              role="button"
              type="submit"
            >
              ورود
            </button>

            <a
              onClick={() => {
                Swal.fire("سعی کنید به یاد بیارید چون این سایت بک اند ندارد!!");
              }}
              href="#"
              className="me-5 fs-4 text-secondary"
            >
              گذرواژه خود را فراموش کرده اید؟
            </a>
          </form>
          {
            <form className="  mt-5">
              <button
                class="btn btn-sm w-100  fs-4 p-3 rounded-4 btn-outline"
                href="#"
                role="button"
                type="submit"
                onClick={() => {
                  localStorage.clear();
                  navigate(`/`);
                }}
              >
                خروج از اکانت
              </button>
            </form>
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

function LoginModal() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
