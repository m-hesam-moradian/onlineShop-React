import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

const NewOrdersChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            // width: 230,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const [chartSeries, setChartSeries] = useState([44, 55, 41, 17, 15]);

  useEffect(() => {
    const domContainer = document.querySelector("#NewOrdersChart");
    const apexChart = React.createElement(ReactApexChart, {
      options: chartOptions,
      series: chartSeries,
      type: "donut",
    });
    ReactDOM.render(apexChart, domContainer);
  }, [chartOptions, chartSeries]);

  return (
    <div>
      <div id="NewOrdersChart"></div>
      <div id="html-dist"></div>
    </div>
  );
};

export default NewOrdersChart;
