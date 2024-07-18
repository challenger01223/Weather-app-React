import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CITIES, DATES } from "@/utils/constants";
import { RootState } from "@/store";
import { apis } from "@/apis";
import { setCity, setForecast } from "@/store/slices/weatherSlice";
import Forecast from "@/components/Forecast";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import { WeatherContainer, CityContainer } from "@/styles";
import { IForecast, IWeather } from "@/utils/types";
import { OutPutTime } from "@/utils";
import WeatherIcon from "@/components/WeatherIcon";

const Weather = () => {
   const dispatch = useDispatch();
   const { city, forecast, unit, type } = useSelector((state: RootState) => state.weather);
   const [loading, setLoading] = React.useState(false);
   const [weather, setWeather] = React.useState<IWeather | null>(null)
   const [weathers, setWeathers] = React.useState<Array<IForecast>>([]);

   const GetWeatherInfo = async () => {
      try {
         setLoading(true)
         setWeather(null);
         setWeathers([]);
         const response: any = await apis.GetGeocoding(city as string);
         const lat = response[0].lat;
         const lon = response[0].lon;
         if (forecast === 'NOW') {
            const res: any = await apis.GetCurrentWeather(lat, lon, unit);
            setWeather({
               type: res.weather[0].main,
               main: res.main,
               sunrise: res.sys.sunrise,
               sunset: res.sys.sunset
            })
         } else {
            const res: any = await apis.Get5DaysForecast(lat, lon, unit);
            setWeathers(res.list.filter((_: any, index: number) => index % 8 === 0).map((weather: any) => {
               return {
                  type: weather.weather[0].main,
                  temp_max: weather.main.temp_max,
                  temp_min: weather.main.temp_min,
                  day: DATES[new Date(weather.dt * 1000).getDay()]
               }
            }))
         }
      } catch (err) {
         console.log(err);
      } finally {
         setLoading(false)
      }
   }

   React.useEffect(() => {
      if (city) {
         GetWeatherInfo();
      }
   }, [forecast, city])

   return (
      <WeatherContainer>
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 100 }}>
            {city ?
               <div>
                  <div>
                     <h1 style={{ textAlign: 'center', marginBottom: 20 }}>{city}</h1>
                     {forecast === 'NOW' ?
                        <>
                           {(!loading && weather) ?
                              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                 <WeatherIcon type={weather.type}/>
                                 <h3>{weather.type}</h3>
                                 <div style={{ position: 'absolute', left: 'calc(50% + 200px)', top: '50%', transform: 'translate(-50%, -50%)', minWidth: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    <h4>Temp: {weather.main.temp}</h4>
                                    <h4>Feels Like: {weather.main.feels_like}</h4>
                                    <h4>Humidity: {weather.main.humidity}%</h4>
                                    <h4>Sunrise: {OutPutTime(weather.sunrise * 1000, type)}</h4>
                                    <h4>Sunset: {OutPutTime(weather.sunset * 1000, type)}</h4>
                                 </div>
                              </div> : <h2 style={{ textAlign: 'center' }}>Loading...</h2>
                           }
                        </>
                        :
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
                           {weathers.map((we: IForecast, index: number) => <Forecast key={index} forecast={we} />)}
                        </div>
                     }
                  </div>
                  <div style={{ marginTop: 30 }}>
                     <h4 style={{ textAlign: 'center' }}>Forecast</h4>
                     <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 10 }}>
                        <Button styles={{ width: '100px' }} isActive={forecast === 'NOW'} onClick={() => dispatch(setForecast('NOW'))}>Now</Button>
                        <Button styles={{ width: '100px' }} isActive={forecast === '5-DAYS'} onClick={() => dispatch(setForecast('5-DAYS'))}>5 days</Button>
                     </div>
                  </div>
               </div>
               :
               <h2 style={{ textAlign: 'center' }}>Pick a City to see the full forecast</h2>
            }
         </div>
         <CityContainer>
            <Grid>
               {CITIES.map((c: string, index: number) => (
                  <Button styles={{ padding: '10px' }} key={index} isActive={city === c} onClick={() => {
                     dispatch(setForecast('NOW'));
                     dispatch(setCity(c));
                  }}>{c}</Button>
               ))}
            </Grid>
         </CityContainer>
      </WeatherContainer>
   )
};

export default Weather;