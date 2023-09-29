import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const apiKey="1c78d44999f0b3e3568b0c9b93b0a2cb"
  const [data, setData]= useState({})
  const getWeatherDetails= (cityName) =>{
    if(!cityName) return
    const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res)=>{
      // console.log("response",res.data)
      setData(res.data)
    }).catch((err)=>{
      // console.log("err",err)
    })
  }
  // Just to test 
  //   useEffect(()=> {
  //   getWeatherDetails("Mysore")
  // },[])


  const [inputCity, setInputCity] = useState(" ")

  const handleInputChange=(e)=>{
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }
  const handleSearch = ()=>{
    getWeatherDetails(inputCity)
  }


  return (
      <div className="col-md-12">
        <div className='weatherBG'>
          <h1 className='heading'>Weather App</h1>
          <div className='d-grid gap-3 col-4 mt-3'>
          <input text='text' className='from-control' onChange={handleInputChange} value={inputCity}></input>
          <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>
          </div>
        </div>
        {Object.keys(data).length>0 &&
        <div className='col-md-12 text-center mt-5'>
          <div className='shadow rounded weather-resultbox'>
            <h1>Weather report</h1>
            <img className="weatherIcon" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
            <h2 className='City'>{data?.name}</h2>
            <h4 className='Temperature'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h4>
          </div>
        </div>}
      </div>
  );
}

export default App;
