import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

interface Country {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
}

const LeafLet: React.FC = () => {
  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data: Country[] = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="text-xl mb-4">COVID-19 Map</div>
      <MapContainer
      //@ts-ignore
        center={[0, 0]}
        zoom={2}
        className="w-full h-[500px]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //@ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countryData.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafLet;
