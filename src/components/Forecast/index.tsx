import { COLORS } from "@/utils/constants";
import { SVGS } from "../svgs";

interface IForecast {
    high?: number;
    low?: number;
}

const Forecast: React.FC<IForecast> = ({ }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Fri</h3>
            <SVGS.WeatherCloudySvg fillColor={COLORS.BLUE} width={120} height={120} />
            <h3>Clouds</h3>
            <h4>H: 31°C/L: 24°C</h4>
        </div>
    )
};

export default Forecast;