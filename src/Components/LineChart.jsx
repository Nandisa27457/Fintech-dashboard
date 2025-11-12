import {react} from "react";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale,   // y-axis
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";



export default function LineChart(){
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue (Rands)",
        data: [25000, 19000, 3000, 50000, 20000, 30000],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.4, 
        fill: true,
      },
    ],
  }
};