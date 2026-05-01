import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function GenderPieChart() {
  const data = {
    labels: ["Male","Female"],
    datasets: [{ data: [70,50], backgroundColor: ["#3b82f6","#ec4899"] }]
  };
  return <Pie data={data} />;
}