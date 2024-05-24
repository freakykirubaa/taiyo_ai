import { useQuery } from "react-query";
import { Pie } from "react-chartjs-2";
import Chart, {
  CategoryScale,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js/auto";
import { fetchGlobalData } from "../../api/api";

// Initialize Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GlobalPieChart = () => {
  const { data: globalData, isLoading } = useQuery("globalData", fetchGlobalData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { cases, deaths, recovered, active } = globalData;

  const chartData = {
    labels: ["Cases", "Deaths", "Recovered", "Active"],
    datasets: [
      {
        data: [cases, deaths, recovered, active],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="p-4">
      <h2>Global COVID-19 Data</h2>
      <div className="w-full md:w-[500px] mx-auto">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default GlobalPieChart;
