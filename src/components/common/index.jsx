import { createContext, useEffect, useState} from "react"
import request from "../../request/request"

export const weatherContext = createContext(null)
export const themeContext = createContext(null)

export default function WeatherContainer ({children}){

  const [weatherCity, setWeatherCity] = useState(null)
  const [weatherList, setWeatherList] = useState(null)
  const [inputValue, setInputValue] = useState("Yerevan")

  useEffect(() => {
      request(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=82e2a5b6ec96ddfa6b2bc54d5a77c684`,
        "GET",
        response => {
          setWeatherCity(response.city)
          setWeatherList(response.list)
        }
      )
  },[])

  return (
    <weatherContext.Provider value={{weatherCity, setWeatherCity, weatherList, setWeatherList, inputValue, setInputValue}}>
      {children}
    </weatherContext.Provider>
  )
}