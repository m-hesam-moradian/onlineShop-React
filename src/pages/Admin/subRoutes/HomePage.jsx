import React from "react";
import NewUsersChart from "../../../Components/Admin/HomePage/NewUsersChart";
import TotalExpenseChart from "../../../Components/Admin/HomePage/TotalExpenseChart";
import TotalIcomeChart from "../../../Components/Admin/HomePage/TotalIcomeChart";
import NewOrdersChart from "../../../Components/Admin/HomePage/NewOrdersChart";

export const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="bg-red-500 h-full">
          <NewUsersChart />
        </div>
        <div className="bg-yellow-500 h-full">
          {" "}
          <TotalExpenseChart />{" "}
        </div>
        <div className="bg-green-500 h-full">
          <TotalIcomeChart />
        </div>
        <div className="bg-blue-500 h-full">
          <NewOrdersChart />
        </div>
      </div>
    </div>
  );
};
