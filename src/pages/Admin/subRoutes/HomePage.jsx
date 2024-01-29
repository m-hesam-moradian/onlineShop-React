import React, { useContext, useEffect, useState } from "react";
import MainChart from "../../../Components/Admin/HomePage/MainChart";
import { API } from "../../../App";
import adminContext from "../../../context/adminContext";

// import MainChart from "../../../Components/Admin/HomePage/MainChart";

export const HomePage = () => {
  // const usetInfo = useContext(adminContext);
  const [UsetInfo, setUsetInfo] = useState();
  window.scrollTo(0, 0);
  const [productInfo, setproductInfo] = useState();
  useEffect(() => {
    fetch(`${API}products`)
      .then((res) => res.json())
      .then((allData) => {
        setproductInfo(allData);
      });
    fetch(`${API}registered`)
      .then((res) => res.json())
      .then((allData) => {
        setUsetInfo(allData);
      });
  }, []);
  console.log(UsetInfo);
  return (
    <div className="h-[100vh] overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-none ">
        <div className="bg-red-500 h-full rounded-xl shadow flex w-full p-5 justify-between ">
          <div className="  ">
            <div className="text-gray-100 text-3xl">کاربران </div>
            <div className="font-extrabold text-6xl text-white pt-5">156</div>
            <div className="text-white"> %51 رشد در ماه</div>
          </div>
          <div className=" p-4 bg-white rounded-full h-max ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-14 text-red-500"
            >
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
          </div>

          {/* <NewUsersChart /> */}
        </div>
        <div className="bg-yellow-500  h-full rounded-xl shadow flex w-full p-5 justify-between ">
          <div className="  ">
            <div className="text-gray-100 text-3xl">مخارج</div>
            <div className="font-extrabold text-6xl text-white pt-5">
              ${(569).toLocaleString("en-US")}
            </div>
            <div className="text-white">افزایش %7 درصدی</div>
          </div>
          <div className=" p-4 bg-white rounded-full h-max ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-14 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                clip-rule="evenodd"
              />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
          </div>

          {/* <TotalExpenseChart /> */}
        </div>
        <div className="bg-green-500  h-full rounded-xl shadow flex w-full p-5 justify-between ">
          <div>
            <div className="text-gray-100 text-3xl">سود</div>
            <div className="font-extrabold text-6xl text-white pt-5">
              {" "}
              ${(969).toLocaleString("en-US")}
            </div>
            <div className="text-white">افزایش %60 در ماه</div>
          </div>
          <div className=" p-4 bg-white rounded-full h-max ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-14 text-green-500"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          {/* <TotalIcomeChart /> */}
        </div>
        <div className="bg-blue-500 h-full rounded-xl shadow flex w-full p-5 justify-between ">
          <div>
            <div className="text-gray-100 text-3xl">سفارشات</div>
            <div className="font-extrabold text-6xl text-white pt-5">863</div>
            <div className="text-white">رشد %20 در ماه </div>
          </div>
          <div className=" p-4 bg-white rounded-full h-max ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-14  text-blue-500 "
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          {/* <NewOrdersChart /> */}
        </div>
      </div>
      <div className="grid  border-none gap-7 w-full  grid-cols-1  lg:grid-cols-2  ">
        <div className="bg-white rounded-xl p-7 w-full h-full overflow-auto">
          <div className="text-4xl font-bold p-2  border-b border-solid border-gray-400">
            پرفوش ترین محصولات{" "}
          </div>
          {productInfo &&
            productInfo.slice(0, 4).map((item) => (
              <div className=" border-0 m-4 ">
                <div className=" grid grid-cols-1 md:flex justify-between items-center ">
                  <div className="grid grid-cols-1 border-none md:flex items-center justify-center">
                    <img
                      className="grid grid-cols-4 w-40 border-none "
                      src={item.img}
                      alt=""
                    />
                    <div>
                      {" "}
                      <div className="text-xl font-bold">{item.name}</div>
                      <div className="text-lg font-thin text-gray-600">
                        {item.model}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    {item.price.toLocaleString("en-US")}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="bg-white rounded-xl p-7 w-full h-full  ">
          <div className="text-4xl font-bold p-2  border-b border-solid border-gray-400 ">
            خلاصه
          </div>
          <div className="grid  md:grid-cols-3 border-0 m-4 overflow-auto gap-8">
            <div>
              <div className="text-3xl font-bold text-green-600">2518</div>
              <div className="text-gray-400">درآمد</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">
                ${(9569).toLocaleString("en-US")}
              </div>
              <div className="text-gray-400"> فروش</div>
            </div>
            <div className="text-red-700">
              <div className="text-3xl font-bold">
                ${(3569).toLocaleString("en-US")}
              </div>
              <div className="text-gray-400 ">هزینه ها</div>
            </div>
          </div>
          <MainChart />
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="bg-white rounded-xl p-7 w-full h-full overflow-auto">
          <div className="text-4xl font-bold p-2  border-b border-solid border-gray-400">
            کاربران
          </div>
          {UsetInfo &&
            UsetInfo.slice(0, 4).map((item) => (
              <div className=" border-0 m-4 ">
                <div className=" grid grid-cols-1 md:flex justify-between items-center ">
                  <div className="grid grid-cols-1 border-none md:flex items-center justify-center">
                    <img
                      className="grid grid-cols-4 w-40 border-none  "
                      src={item.img}
                      alt=""
                    />
                    <div>
                      {" "}
                      <div className="text-xl font-bold">{item.Name}</div>
                      <div className="text-lg font-thin text-gray-600">
                        {item.email}
                      </div>
                      <div className="text-lg font-thin text-gray-600">
                        {item.seniority}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold"></div>
                </div>
              </div>
            ))}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
