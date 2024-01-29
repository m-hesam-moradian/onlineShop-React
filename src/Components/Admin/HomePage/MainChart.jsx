import React from "react";
import ChartJS from "chart.js/auto";
import Chart from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  ChartJS.LinearScale,
  ChartJS.CategoryScale,
  ChartJS.BarElement,
  ChartJS.PointElement,
  ChartJS.LineElement,
  ChartJS.Legend,
  ChartJS.Tooltip,
  ChartJS.LineController,
  ChartJS.BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

export function App() {
  return <Chart type="bar" data={data} />;
}
