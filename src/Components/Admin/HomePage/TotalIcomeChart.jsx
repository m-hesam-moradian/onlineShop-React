import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";


const TotalIcomeChart = () => {
  const [chartOptions, setChartOptions] = useState({
    annotations: {
      points: [
        {
          x: "Bananas",
          seriesIndex: 0,
          label: {
            borderColor: "#775DD0",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "Bananas are good",
          },
        },
      ],
    },
    chart: {
    //   height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [
        "Apples",
        "Oranges",
        "Strawberries",
        "Pineapples",
        "Mangoes",
        "Bananas",
        "Blackberries",
        "Pears",
        "Watermelons",
        "Cherries",
        "Pomegranates",
        "Tangerines",
        "Papayas",
      ],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Servings",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Servings",
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
    },
  ]);

  useEffect(() => {
    const domContainer = document.querySelector("#chart3");
    const apexChart = React.createElement(ReactApexChart, {
      options: chartOptions,
      series: chartSeries,
      type: "bar",
    //   height: 350,
    });
    ReactDOM.render(apexChart, domContainer);
  }, [chartOptions, chartSeries]);

  return (
    <div>
      <div id="chart3"></div>
      <div id="html-dist"></div>
    </div>
  );
};

export default TotalIcomeChart;
