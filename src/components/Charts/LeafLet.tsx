import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";
import { Country, fetchLeafletData } from "../../api/api";
import L from "leaflet";
import { LOCATION } from "../../common/common";

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: LOCATION,
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const LeafLet = () => {
  const { data: countryData, isLoading } = useQuery<Country[]>(
    "leafletData",
    fetchLeafletData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-xl mb-4">COVID-19 Map</div>
      <MapContainer
        //@ts-ignore
        center={[0, 0]}
        zoom={2}
        className="w-full md:h-[500px] sm:h-[350px]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //@ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countryData?.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon} // Use the custom icon
          >
            <Popup>
              <div>
                <h2>Country: {country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Population: {country.population}</p>
                <p>Continent: {country.continent}</p>
                <p>Cases Per Million: {country.casesPerOneMillion}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafLet;
