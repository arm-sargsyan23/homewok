import WeatherForecast from "./components/weather-info/weather-forecast";
import WeatherContainer from "./components/weather-container";

export default function App() {

  return (
    <WeatherContainer>
      <WeatherForecast/>
    </WeatherContainer>
  );
}