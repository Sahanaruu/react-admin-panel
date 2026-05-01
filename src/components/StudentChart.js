import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, LineElement, Tooltip, Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function StudentChart() {
  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "Admissions",
      data: [50,80,120,180,250,320],
      borderColor: "#4f46e5",
      backgroundColor: "rgba(79,70,229,0.2)"
    }]
  };
  return <Line data={data} />;
}