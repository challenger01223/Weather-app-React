import { IForecast } from "@/utils/types";
import WeatherIcon from "../WeatherIcon";

interface ForecastProps {
    forecast: IForecast
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h3>{forecast.day}</h3>
            <WeatherIcon type={forecast.type} />
            <h3>{forecast.type}</h3>
            <h4>H: {forecast.temp_max}/L: {forecast.temp_min}</h4>
        </div>
    )
};

export default Forecast;