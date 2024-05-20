import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
}

const LineGraph: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data: CountryData[] = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: countryData.map((country) => country.country),
    datasets: [
      {
        label: "Cases",
        data: countryData.map((country) => country.cases),
        borderColor: "navy",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 1,
        lineTension: 0.4,
      },
      {
        label: "Deaths",
        data: countryData.map((country) => country.deaths),
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderWidth: 1,
        lineTension: 0.4,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2>COVID-19 Cases and Deaths by Country</h2>
      <div className="h-[800px] w-[800px]">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default LineGraph;
