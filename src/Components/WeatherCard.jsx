/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import { useDate } from '../Utils/useDate'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import sun from '../assets/icons/sun.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = () => {
  const {weather,dates, place,values,count, setCount} = useStateContext();
  const [icon, setIcon] = useState(sun)
  const { time } = useDate()
  let temp = (values.days[count].temp - 32)/1.8;
  temp = temp.toFixed(2);
  let mintemp = (values.days[count].tempmin - 32)/1.8;
  mintemp = mintemp.toFixed(2);
  let maxtemp = (values.days[count].tempmax - 32)/1.8;
  maxtemp = maxtemp.toFixed(2);
  
  let placename = place.toUpperCase();
  
  useEffect(() => {
    let iconString = weather[count]
    // console.log(iconString)
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [count])

  const handlePre =()=>{
    setCount(count-1);
  }
  const handlenext=()=>{
    setCount(count+1);
  }

  return (
        <div className='flex justify-center w-[50%]'>
    <div className='w-[100%] min-w-[50%] h-auto glassCard p-4 '>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{temp} &deg;C</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2 font-bold text-xl'>{placename}</p>
        <p className='flex-1 text-center p-2 font-bold text-xl'>{dates[count]}</p>
      </div>

      <div className='w-auto flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-3 font-bold bg-blue-600 shadow rounded-lg'>Min Temperature <p className='font-normal'>{mintemp} &deg;C</p></p>
        <p className='flex-1 text-center p-3 font-bold rounded-lg bg-green-600'>Max Temperature <p className='font-normal'>{maxtemp} &deg;C</p></p>
      </div>

      <div className='w-auto flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{values.days[count].windspeed
        } km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Wind Direction<p className='font-normal'>{values.days[count].winddir}</p></p>
      </div>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold' >
        Humidity {values.days[count].humidity}
      </div>
      <div className='w-full p-3 flex justify-center items-center'>
        <p className='font-semibold text-lg'>{values.days[count].description}</p>
      </div>
      <hr className='bg-slate-600' />

<div class="mt-4 flex justify-between">
  <button disabled={count<1} className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handlePre}>
    Previous
  </button>
  <button disabled={count>=5} className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handlenext}>
    Next
  </button>
</div>
      
      
    </div>
    </div>
  )
}

export default WeatherCard

