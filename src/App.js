import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import GetZip from './Components/GetZip';
import DayCards from './Components/DayCards';
import CardCurrentDay from './Components/CardCurrentDay';

export default function App() {
  const [currentData, setcurrentData] = useState([]);
  const [forecastData, setforecastData] = useState([]);

  const getCurrentData = (zip) => {
      axios
        .get("http://api.openweathermap.org/data/2.5/weather?zip="+ zip +",us&units=imperial&appid=6c383058dc52c8efb2a8317ed6ce95c4")
        .then(response => setcurrentData(response.data));
  }

  const getForecastData = (zip) => {
      axios
        .get("http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&units=imperial&appid=6c383058dc52c8efb2a8317ed6ce95c4")
        .then(response => setforecastData(response.data));
  }

  while(currentData.length === 0 || forecastData.length === 0) {
    return (
      // Component to get input from user.
      <div className="App-getting-zip App">
        <GetZip getCurrentData={getCurrentData} getForecastData={getForecastData}/>
      </div>
    );
  }

  const setBackground = () => {
    console.log("forecastData," + forecastData);
    let setUrl = require('./WeatherBackgrounds/' + currentData.weather[0].main + '.png');
    document.querySelector('.App').style.background = "url(" + setUrl + ")"; 
  }

  return (
    <div className="App">
      {setBackground()}
      <span className="city">{currentData.name}</span>
      <CardCurrentDay currentData={currentData}/>
      <DayCards forecastData={forecastData}/>
      <button className="return" onClick={() => {setcurrentData([]);setforecastData([]);document.querySelector('.App').style.background = 'rgba(184,184,184,.75)';}}>Go Back</button>
    </div>
  );
}