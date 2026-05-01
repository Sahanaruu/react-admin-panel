import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function StudentsPieChart() {
  const data = {
    labels: ["BCA", "BBA", "BCom", "BSc", "MBA"],
    datasets: [
      {
        label: "Students",
        data: [35, 25, 20, 18, 22],
        backgroundColor: [
          "#4caf50",
          "#2196f3",
          "#ff9800",
          "#9c27b0",
          "#f44336",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Students per Course",
        font: { size: 18 },
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default StudentsPieChart;