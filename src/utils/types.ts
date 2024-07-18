export interface ISvg {
    fillColor?: string;
    width?: number;
    height?: number;
    handleClick?: () => void
}

export interface IWeather {
    type: string;
    main: {
        temp: number,
        feels_like: number,
        humidity: number,
    },
    sunrise: number,
    sunset: number
}