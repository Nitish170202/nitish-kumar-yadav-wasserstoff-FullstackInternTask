import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { BackgroundLayout, MiniCard, WeatherCard } from './Components'
import { useStateContext } from './Context'

function App() {

  const [input, setInput] = useState('')
  const { weather, setPlace, place } = useStateContext();
  const [result , setResult] = useState(false);
  const submitCity = () => {
    setPlace(input)
    setResult(true)
    setInput('')
  }
  

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4  items-center justify-center'>
        {/* <WeatherCard /> */}
        {(result) ? <WeatherCard/> : <MiniCard/>}
      </main>
    </div>
  )
}

export default App
