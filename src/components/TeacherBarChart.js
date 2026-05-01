import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function TeacherBarChart() {
  const data = {
    labels: ["CS","Math","Physics","Commerce"],
    datasets: [{ data: [8,6,5,6], backgroundColor: "#22c55e" }]
  };
  return <Bar data={data} />;
}