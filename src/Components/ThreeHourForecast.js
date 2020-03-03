import React from 'react';
import { Line } from 'react-chartjs-2';

class ThreeHourForecast extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.day !== prevProps.day) {
    //         return;
    //     }
    // }

    render() {
        const data = {
                    labels : this.props.indvData.map((item, index) => {
                        return item.dt_txt.split(' ')[1];
                    }),
                    datasets : [
                        {
                            label : 'Temperature',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data : this.props.indvData.map((item, index) => {
                                return item.main.temp;
                            })
                        }
                    ],
                }
        return (
            <div className="temp-chart" style={{ margin: 'auto', position: "relative", width: 600,}}>
                <h2>Daily Forecast</h2>
                <Line options={{ responsive: true }} data={data}/>
            </div>
                )
    }
}

export default ThreeHourForecast;