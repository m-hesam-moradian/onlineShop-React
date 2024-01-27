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
          <NewUsersChart />
        </div>
        <div className="bg-yellow-500 h-full rounded-xl shadow">
          {" "}
          <TotalExpenseChart />{" "}
        </div>
        <div className="bg-green-500 h-full rounded-xl shadow">
          <TotalIcomeChart />
        </div>
        <div className="bg-blue-500 h-full rounded-xl shadow">
          <NewOrdersChart />
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
