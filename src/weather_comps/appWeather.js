import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeatherInfo from './weatherInfo'
import WeatherInput from './weatherInput'

export default function AppWeather() {
  const [infoObj,setInfoObj] = useState({});

  useEffect(() => {
    doApi("חיפה")
  },[])

  const doApi = async(_townName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_townName}&appid=d430503963529ff7141f98a79fe05cd2
    &units=metric`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setInfoObj(resp.data);
  }

  return (
    <div>
      <WeatherInput doApi={doApi} />
      <WeatherInfo item={infoObj} />
    </div>
  )
}