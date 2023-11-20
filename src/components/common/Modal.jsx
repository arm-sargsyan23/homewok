import { useEffect, useState } from "react"
import request from "../../request/request"

export default function Modal ({cityName, onClose}){

    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        request(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=82e2a5b6ec96ddfa6b2bc54d5a77c684`,(response) => setWeatherInfo(response))
    },[cityName])

    return (
        weatherInfo !== null ? <div onClick={onClose} className="w-screen h-screen bg-black/75 fixed">
            <div className="w-full h-full flex justify-center items-center rounded-3xl">
                <div className="w-[410px] h-[360px] bg-transparent shadow-lg shadow-neutral-700 backdrop-blur-md text-gray-400 px-6 py-6 font-bold text-xl rounded-3xl flex flex-col justify-center gap-4">
                    <div className="flex justify-center">
                        <p>{weatherInfo.city.name} , {weatherInfo.list[0].dt_txt.split(" ")[0]} , {weatherInfo.list[0].dt_txt.split(" ")[1].split(":")[0]}:00</p>
                    </div>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col items-center">
                            <div className="m-[-30px]">
                                <img className="w-56" src={`https://openweathermap.org/img/wn/${weatherInfo.list[0].weather[0].icon}.png`} alt="IMG" />
                            </div>
                            <p className="text-3xl">{weatherInfo.list[0].weather[0].description}</p>
                        </div>
                        <div>
                            <p className="text-6xl font-black">{Math.round((weatherInfo.list[0].main.temp) - 273)} C</p>
                        </div>
                    </div>
                    <hr className="text-black" />
                    <div className="w-full h-[45% p-2 flex justify-center items-center gap-2">
                        {weatherInfo.list.map((list, id) => {
                            return id <= 2 ? <div key={id} className="w-[120px] h-[135px] bg-[rgba(72, 73, 74, 0.6)] rounded-xl p-2 flex flex-col items-center text-2xl font-black">
                                <div className="flex flex-col items-center">
                                    <p>{list.dt_txt.split(" ")[0]}</p>
                                    <p>{list.dt_txt.split(" ")[1]}</p>
                                </div>
                                <div>
                                    <img className="w-20" src={`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`} alt="IMG" />
                                </div>
                                <div>
                                    <p>{Math.round((list.main.temp) - 273)} C</p>
                                </div>
                            </div> : null
                        })}
                    </div>
                </div>
            </div>
        </div> : null
    )
}