import FirstWeatherBar from "./weather-bars/weather-bar-1"
import SecondWeatherBar from "./weather-bars/weather-bar-2"
import WeatherBarsContainer from "./weather-bars/weather-bars-container"

export default function WeatherForecast (){
  return (
    <WeatherBarsContainer>
      <FirstWeatherBar/>
      <SecondWeatherBar/>
    </WeatherBarsContainer>
  )
}