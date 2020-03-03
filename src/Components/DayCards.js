import React from 'react';
import ThreeHourForecast from './ThreeHourForecast';

class DayCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayIndex : 0,
            dayData : [],
        };
      }

    render() {
        let days = [];
        let highs = [];
        let lows = [];
        let dayData = [];

        for(let i = 0; i < this.props.forecastData.list.length; i++) {
            let date = this.props.forecastData.list[i].dt_txt.split(' ')[0].replace(/-/g, '/');
            if (!days.includes(date)) {
                console.log(date);
                days.push(date);
            }

        }

        for(let x = 0; x < days.length; x++) {
            let dayHigh = 0;
            let dayLow = 1000;
            let indvDayData = [];
            for(let y = 0; y < this.props.forecastData.list.length; y++) {
                if(this.props.forecastData.list[y].dt_txt.split(' ')[0].replace(/-/g, '/') === days[x]) {
                    dayLow > this.props.forecastData.list[y].main.temp_min ? dayLow = this.props.forecastData.list[y].main.temp_min : console.log();
                    dayHigh < this.props.forecastData.list[y].main.temp_max ? dayHigh = this.props.forecastData.list[y].main.temp_max : console.log();
                    indvDayData.push(this.props.forecastData.list[y])
                }
            }
            dayData.push(indvDayData)
            highs.push(dayHigh);
            lows.push(dayLow);
        }

        let dayCard = days.map((date, index) => {
            if (index <= 4) {
            let day = new Date(date);
            let weekNum = day.getDay();
            const numToWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let dateMD = (day.getMonth()+1)+'-'+day.getDate();
            return (
                <div key={index} onClick={() => {this.setState({dayIndex : index})}}>
                    <h3>{numToWeek[weekNum]}</h3>
                    <h3>{dateMD}</h3>
                    <span>High:     {Math.round(highs[index])}&#8457; </span><br />
                    <span>Low:     {Math.round(lows[index])}&#8457; </span>
                </div>
            )}
        })

    return (
      <div className="daily-card-container">
          <div className="dayCards">
            {dayCard}
          </div>
          <ThreeHourForecast day={this.state.dayIndex} indvData={dayData[this.state.dayIndex]}/>
      </div>
    );
  }
}

export default DayCards;