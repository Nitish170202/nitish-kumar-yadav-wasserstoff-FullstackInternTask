import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const st = 0;
    const [weather, setWeather] = useState([]);
    const [dates, setDate] = useState([]);
    const [count, setCount] = useState();
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Delhi');


    // fetch api
    const apikey = 'N3HZHF4QQHUCCXH6MT5XLB3ZL';
    
    const fetchWeather = async () => {
        let allweather =[];
        let allDates = [];
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${apikey}`;
        let data = await fetch(url);
        let alldata = await data.json();
        console.log(alldata)
        setValues(alldata);
        for(let i=0 ; i<5 ; i++){
            allweather.push(alldata.days[i].icon)
            allDates.push(alldata.days[i].datetime);
        }
        setWeather(allweather);
        setDate(allDates);
        console.log(dates,"weathrt icon is :",weather)
    }

    useEffect(() => {
        setCount(st)
        fetchWeather()
    }, [place])


    return (
        <StateContext.Provider value={{
            weather,setWeather,count,setCount,dates,setDate,
            values,setValues,
            place,setPlace,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)