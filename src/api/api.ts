import axios from "axios";

// Interface to define the structure of country data
export interface Country {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: number;
  casesPerOneMillion: number;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
}

// Interface to define the structure of the country data
export interface CountryData {
  country: string;
  cases: number;
  deaths: number;
}

export const fetchLeafletData = async (): Promise<Country[]> => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  return response.data;
};

// Function to fetch COVID-19 data
export const fetchLineData = async (): Promise<CountryData[]> => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  return response.data;
};

// api.ts
export const fetchGlobalData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    if (!response.ok) {
      throw new Error("Failed to fetch global data");
    }
    return response.json();
  };
  
