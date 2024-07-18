import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

API.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error) => {
        try {
            return Promise.reject(error);
        } catch (e) {
            console.log(error);
        }
    }
);

const GetGeocoding = (city: string) => API.get(`/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);
const GetCurrentWeather = (lat: number, lon: number, unit: string) => API.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${import.meta.env.VITE_API_KEY}`);
const Get5DaysForecast = (lat: number, lon: number, unit: string) => API.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${import.meta.env.VITE_API_KEY}`)

export const apis = {
    GetGeocoding,
    GetCurrentWeather,
    Get5DaysForecast
}