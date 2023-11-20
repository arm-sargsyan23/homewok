import { useContext } from "react"
import { weatherContext } from "../../.."


export default function SecondWeatherBar (){
    
    const {weatherList} = useContext(weatherContext)

    return (
        <div className="w-3/4 h-max flex flex-col justify-between ml-8 p-8">
          <div className="mt-11">
            <p className="text-7xl">Snow Thunderstorm</p>
            <div className="flex justify-around">
              {weatherList.map((fcInfo, i) => {  
                return i <= 6 && i !== 0 ? <div key={i} className="py-2 bg-transperant w-32 h-48 my-9 rounded-3xl p-6 flex flex-col items-center text-2xl justify-around backdrop-blur-3xl">
                  <div className="border border-transparent border-b-white">
                    {(fcInfo.dt_txt).split(" ")[1].split(":")[0]}:00
                  </div>
                  <div><img src={`https://openweathermap.org/img/wn/${fcInfo.weather[0].icon}.png`} alt="weather-icon" /></div>
                  <p className="text-4xl font-black">{Math.round((fcInfo.main.temp - 273.15).toFixed(1))} C</p>
                </div> : null
              })}
            </div>
          </div>
          <div className="mt-28">
            <p className="text-7xl">Today's Highlig</p>
            <div className="flex justify-around py-12">
              <div className="w-96 bg-transperant h-56 rounded-2xl p-6 text-3xl flex flex-col justify-between backdrop-blur-3xl">
                <p>UV Index - 0 (Low)</p>
                <p>Wind Speend - {Math.round(weatherList[0].wind.speed)} Km/h</p>
                <p>Sunrise - 5:18 AM</p>
                <p>Sunset - 18:44 PM</p>
              </div>
              <div className="w-96 bg-transperant h-56 rounded-2xl p-6 text-3xl flex flex-col justify-between backdrop-blur-3xl">
                <p>Humidity - {weatherList[0].main.humidity}%</p>
                <p>Visibility - {((weatherList[0].visibility) / 1000).toFixed(2)}Km</p>
                <p>Air Quality - 90</p>
              </div>
            </div>
          </div>
        </div>
    )
}