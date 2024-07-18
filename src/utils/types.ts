export interface ISvg {
    fillColor?: string;
    width?: number;
    height?: number;
    handleClick?: () => void
}

export type IWeather = {
    type: string;
    main: {
        temp: number,
        feels_like: number,
        humidity: number,
    },
    sunrise: number,
    sunset: number
}

export type IForecast = {
    type: string,
    temp_max: number,
    temp_min: number,
    day: string
}