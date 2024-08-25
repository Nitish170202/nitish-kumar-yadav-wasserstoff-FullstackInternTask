/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import sun from '../assets/icons/sun.png'
import wind from '../assets/icons/windy.png'
import { useStateContext } from '../Context'

const MiniCard = () => {
  const {weather,count} = useStateContext();
  const [icon,setIcon] = useState(sun)
  const iconString = weather[count];
  useEffect(() => {
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
  }, [iconString])
  return (
    <div className='glassCard w-auto h-auto p-4 flex flex-col'>
      <h2>Please Search Your Location</h2>
    </div>
  )
}

export default MiniCard