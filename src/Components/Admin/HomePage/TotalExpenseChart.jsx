import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";



const TotalExpenseChart = () => {
  const [series] = useState([
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 230,
      type: "radar",
    },
    title: {
      text: "Basic Radar Chart",
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radar"
          height={230}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default TotalExpenseChart;
