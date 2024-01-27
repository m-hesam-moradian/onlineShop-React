import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

const NewUsersChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      // height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  useEffect(() => {
    const domContainer = document.querySelector("#chart1");
    const apexChart = React.createElement(ReactApexChart, {
      options: chartOptions,
      series: chartSeries,
      type: "area",
      // height: 350,
    });
    ReactDOM.render(apexChart, domContainer);
  }, [chartOptions, chartSeries]);

  return (
    <div>
      <div id="chart1"></div>
      <div id="html-dist"></div>
    </div>
  );
};

export default NewUsersChart;
