import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
const GetGeocoding = (city: string) => API.get(`/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);

export const apis = {
    GetGeocoding
}