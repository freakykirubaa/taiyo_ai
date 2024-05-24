




























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
import { useQuery } from "react-query";
import { fetchLineData, CountryData } from "../../api/api";

// Register the necessary chart.js components
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

const DeathData: React.FC = () => {
  const { data: countryData, isLoading } = useQuery<CountryData[]>(
    "lineData",
    fetchLineData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Prepare the data for the chart
  const chartData = {
    labels: countryData?.map((country) => country.country),
    datasets: [
        {
            label: "Deaths",
            data: countryData?.map((country) => country.deaths),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            borderWidth: 1,
            lineTension: 0.4,
          },
    
    ],
  };
  const options = {
    aspectRatio: 2,
    maintainAspectRatio: true,
    // You can add more options as needed
  };


  return (
    <div className="p-4">
      <h2>COVID-19 Deaths by Country</h2>
      <div className="h-[800px] lg:w-[800px] w-full">
        <Line data={chartData}  options={options}/>
      </div>
    </div>
  );
};

export default DeathData;






















