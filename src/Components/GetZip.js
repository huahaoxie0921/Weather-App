import React from 'react';

class GetZip extends React.Component {
  // constructor(props) {
  //       super(props);
  //     }

  render() {
    return (
      <div>
          <h1>React Weather App</h1>
          <div className="get-zip-input">
            <h2>Enter Your Zip Code</h2>
            <div>
              <input type="text"></input>
              <button 
                onClick={() => {this.props.getCurrentData(document.querySelector('input').value);
                                this.props.getForecastData(document.querySelector('input').value);}}>Get Weather
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default GetZip;