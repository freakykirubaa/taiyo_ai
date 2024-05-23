import { useEffect, useState } from "react";
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

const fetchGlobalData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  if (!response.ok) {
    throw new Error("Failed to fetch global data");
  }
  return response.json();
};

const GlobalPieChart = () => {
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGlobalData();
        setGlobalData(data);
      } catch (error) {
        console.error("Error fetching global data:", error);
      }
    };

    fetchData();

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
  }, []);

  if (!globalData) {
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

