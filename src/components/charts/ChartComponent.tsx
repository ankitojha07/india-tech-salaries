import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent: React.FC = () => {
  const data = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"],
    datasets: [
      {
        label: "10th Percentile",
        data: ["7.4", "8.2", "10", "12", "15", "18", "22", "28", "35"], // String values
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "25th Percentile",
        data: ["9", "12", "15", "18", "21", "24", "29", "35", "40"], // String values
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "50th Percentile (Median)",
        data: ["12", "15", "18", "21", "25", "28", "34", "40", "47"], // String values
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
      {
        label: "75th Percentile",
        data: ["18", "22", "25", "30", "35", "40", "45", "50", "60"], // String values
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "95th Percentile",
        data: ["33", "38", "45", "55", "65", "75", "85", "100", "120"], // String values
        borderColor: "rgba(255, 99, 255, 1)",
        backgroundColor: "rgba(255, 99, 255, 0.2)",
        fill: true,
      },
    ],
  };

  // Define chart options with the correct type
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (tooltipItem) {
            // Format the tooltip to display value with " LPA"
            return `${tooltipItem.raw} LPA`; // Add " LPA" to the numeric value
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years of experience",
        },
      },
      y: {
        title: {
          display: true,
          text: "Salary (₹ LPA)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
