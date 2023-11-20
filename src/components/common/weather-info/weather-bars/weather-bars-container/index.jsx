import { useContext } from "react"
import { weatherContext } from "../../.."

export default function WeatherBarsContainer ({children}){

    const {weatherCity} = useContext(weatherContext)

    return (
        weatherCity !== null ? <div className={`text-white w-screenh min-h-screen px-16 py-15 font-mono flex items-center bg-[url("https://wallpaperaccess.com/full/1379546.jpg")] bg-cover bg-no-repeat`}>
            {children}
        </div> : null
    )
}