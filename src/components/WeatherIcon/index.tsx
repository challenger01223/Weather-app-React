import { COLORS } from "@/utils/constants";
import { SVGS } from "../svgs";

const WeatherIcon = ({ type }: { type: string }) => {
    return (type.toLowerCase().includes('rain') || type.toLowerCase().includes('drizzle')) ? <SVGS.WeatherLightningRainySvg width={120} height={120} fillColor={COLORS.BLUE} /> :
        type.toLowerCase().includes('thunderstorm') ? <SVGS.WeatherLightningSvg width={120} height={120} fillColor={COLORS.BLUE} /> :
            type.toLowerCase().includes('clear') ? <SVGS.WeatherClearSvg width={120} height={120} fillColor={COLORS.BLUE} /> :
                type.toLowerCase().includes('clouds') ? <SVGS.WeatherCloudySvg width={120} height={120} fillColor={COLORS.BLUE} /> :
                    type.toLowerCase().includes('snow') ? <SVGS.WeatherSnowySvg width={120} height={120} fillColor={COLORS.BLUE} /> :
                        <SVGS.WeatherFogSvg width={120} height={120} fillColor={COLORS.BLUE} />;
};

export default WeatherIcon;