import React from "react";
import NewUsersChart from "../../../Components/Admin/HomePage/NewUsersChart";
import TotalExpenseChart from "../../../Components/Admin/HomePage/TotalExpenseChart";
import TotalIcomeChart from "../../../Components/Admin/HomePage/TotalIcomeChart";
import NewOrdersChart from "../../../Components/Admin/HomePage/NewOrdersChart";
import MainChart from "../../../Components/Admin/HomePage/MainChart";

export const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="bg-red-500 h-full rounded-xl shadow">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
          </span>
          {/* <NewUsersChart /> */}
        </div>
        <div className="bg-yellow-500 h-full rounded-xl shadow">
          {" "}
          {/* <TotalExpenseChart />{" "} */}
        </div>
        <div className="bg-green-500 h-full rounded-xl shadow">
          {/* <TotalIcomeChart /> */}
        </div>
        <div className="bg-blue-500 h-full rounded-xl shadow">
          {/* <NewOrdersChart /> */}
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="bg-white rounded-xl">
          {" "}
          <MainChart />
        </div>
      </div>
    </div>
  );
};
