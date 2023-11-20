import { useRef, useState } from "react";
import Modal from "./components/common/Modal";

export default function App() {

  const [cityName, setCityName] = useState("")
  const [modalCondition, setModalCondition] = useState(false)
  const inputRef = useRef(null)

  function onPlay(){
    setModalCondition(true)
  }

  function onClose(){
    setModalCondition(false)
  }

  return (
    <div>
      <div className="w-screen h-screen bg-[url('https://wallpaperaccess.com/full/1379546.jpg')] bg-cover bg-no-repeat">
        <div className="h-full w-full flex justify-center items-center">
          <div className="w-[300px] h-[200px] bg-transperant backdrop-blur-md p-10 rounded-2xl">
            <div className="w-full">
              <input value={cityName} onChange={ e => setCityName(e.target.value)} placeholder="Enter city!" className="w-full px-4 py-2 text-xl rounded-xl outline-none" type="text" name="search-weather-city" id="search-weather-city"/>
            </div>
            <div className="h-full py-10 text-2x flex justify-end items-end">
              <button onClick={onPlay} className="w-20 rounded-xl bg-white px-2 py-3">Submit</button>
            </div>
          </div>
          {modalCondition === true && <Modal cityName={cityName} onClose={onClose} />}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}