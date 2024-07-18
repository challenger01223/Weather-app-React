import { useDispatch, useSelector } from "react-redux";
import { CITIES, COLORS } from "@/utils/constants";
import { RootState } from "@/store";
import { apis } from "@/apis";
import { setCity, setForecast } from "@/store/slices/weatherSlice";
import { SVGS } from "@/components/svgs";
import Forecast from "@/components/Forecast";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import { WeatherContainer, CityContainer } from "@/styles";

const Weather = () => {
   const dispatch = useDispatch();
   const { city, forecast } = useSelector((state: RootState) => state.weather);

   const GetWeatherInfo = async (c: string) => {
      try {
         dispatch(setCity(c));
         // const response = await apis.GetGeocoding(c);
         // console.log(response);
      } catch (err) {

      }
   }

   return (
      <WeatherContainer>
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 200 }}>
            {city ?
               <div>
                  <div>
                     <h1 style={{ textAlign: 'center', marginBottom: 20 }}>{city}</h1>
                     {forecast === 'NOW' ?
                        <>
                           <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <SVGS.WeatherCloudySvg fillColor={COLORS.BLUE} width={150} height={150} />
                              <h3>Clouds</h3>
                              <div style={{ position: 'absolute', left: 'calc(50% + 200px)', top: '50%', transform: 'translate(-50%, -50%)', minWidth: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                 <h4>Temp: 23°C</h4>
                                 <h4>Feels Like: 23°C</h4>
                                 <h4>Humidity: 66%</h4>
                                 <h4>Sunrise: 06:28</h4>
                                 <h4>Sunset: 18:58</h4>
                              </div>
                           </div>
                        </> :
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
                           {Array(5).fill(0).map((_, index) => <Forecast key={index} />)}
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
                  <Button styles={{ padding: '15px' }} key={index} isActive={city === c} onClick={() => GetWeatherInfo(c)}>{c}</Button>
               ))}
            </Grid>
         </CityContainer>
      </WeatherContainer>
   )
};

export default Weather;