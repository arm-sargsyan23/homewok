import { useContext } from "react"
import request from "../../../../../request/request"
import { weatherContext } from "../../.."


export default function FirstWeatherBar (){

    const {weatherCity, setWeatherCity, weatherList, inputValue, setWeatherList, setInputValue} = useContext(weatherContext)

    return (
        <>
            <div className="dark flex flex-col w-96 h-full px-8 py-12 bg-transperant rounded-2xl backdrop-blur-3xl">
                <div className="flex justify-center items-center">
                    <div className="w-12 h-12 flex justify-center p-2 bg-neutral-400 rounded-l-2xl border border-r-neutral-400 border-zinc-800">
                    <img 
                    onClick={
                        () => {
                            request(
                                `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=82e2a5b6ec96ddfa6b2bc54d5a77c684`, "GET", response => {
                                setWeatherCity(response.city)
                                setWeatherList(response.list)
                                }
                            )
                        }
                    }
                    src="/media/images/search-icon.png" alt="search-icon" />
                    </div>
                    <input
                    id="searchInput"
                    name="searchInput"
                    value={inputValue} 
                    onChange={
                        e => {
                            setInputValue(e.target.value)
                        }
                    }
                    className="text-black border h-12 border-l-neutral-400 border-y-black border-r-black bg-neutral-400 outline-none rounded-r-2xl px-1 py-2 text-xl"
                    type="text"
                    />
                </div>
                <div className="p-2 flex justify-center">
                    <img className="w-56" src={`https://openweathermap.org/img/wn/${weatherList[0].weather[0].icon}.png`} alt="Cloudy" />
                </div>
                <div className="px-2 py-0.5 font-medium text-xl flex">
                    <img className="w-8" src="/media/images/location-arrow.png" alt="" />
                    <p className="px-4">
                    {`${weatherCity.country} , ${weatherCity.name}`}
                    </p>
                </div>
                <div className="p-2">
                    <p className="text-3xl font-black">{Math.round((weatherList[0].main.temp - 273.15).toFixed(2))} C</p>
                    <p className="text-2xl">{(weatherList[0].dt_txt).split(" ")[0]} {(weatherList[0].dt_txt).split(" ")[1].split(":")[0]}:00</p>
                </div>
                <hr />
                <div className="p-2">
                    <div className="py-2">  
                    <p className="text-xl font-bold">The Next Day Forecast</p>
                    <div className="flex justify-between">
                        <button className="font-bold">2 days</button>
                        <button className="font-bold">4 days</button>
                        <button className="font-bold">6 days</button>
                    </div>
                    </div>
                    <div className="py-2 flex">
                    <div className="w-8 mr-4 mt-2">
                        <img src="/media/images/clouds-sun.png" alt="" />
                    </div>
                    <div>
                        <p className="font-bold text-xl">{(weatherList[0].dt_txt).split(" ")[0]} {(weatherList[0].dt_txt).split(" ")[1].split(":")[0]}:00</p>
                        <p className="text-lg text-gray-500">{weatherList[0].weather[0].description}</p>
                    </div>
                    </div>
                    <div className="flex">
                    <div className="w-8 mr-4 mt-2">
                        <img src="/media/images/smog.png" alt="" />
                    </div>
                    <div>
                        <p className="font-bold text-xl">{(weatherList[0].dt_txt).split(" ")[0]} {(weatherList[0].dt_txt).split(" ")[1].split(":")[0]}:00</p>
                        <p className="text-lg text-gray-500">{weatherList[0].weather[0].main} Day</p>
                    </div>  
                    </div>
                </div>
            </div>
        </>
    )
}