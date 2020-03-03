import React from 'react';

export default function CardCurrentDay (props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let now = new Date();
  let date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
  let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  return (
        <div>
            <div className="selected-day-info">
              <p>{date}</p>
              <p>{time}</p>
              <p>{days[now.getDay()]}</p>
              <p>{Math.round(props.currentData.main.temp)}&#8457;</p> {/* &#8451 for DEGREE CELSIUS*/}
              <img src={require("./WeatherSVGs/" + props.currentData.weather[0].main + ".svg")} />
            </div>
        </div> )
}