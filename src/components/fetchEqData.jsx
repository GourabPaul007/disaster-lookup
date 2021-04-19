import React, { Component } from "react";
import Show from "./show";
// const axios = require("axios");

class FetchEqData extends Component {
  state = {
    earthquakes: [
      {
        _id: null,
        time: "",
        location: null,
        mag: null,
      },
    ],
  };

  fetchEarthquakes = async () => {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2021-01-02&minmagnitude=3";
    // const eqReq = await axios.get(url);
    // const eqData = eqReq.data;
    const eqReq = await fetch(url);
    const eqData = await eqReq.json();
    for (let i in eqData.features) {
      this.setState({
        earthquakes: [
          ...this.state.earthquakes, //IMPORTANT
          {
            _id: eqData.features[i].properties.time.toString(),
            location: eqData.features[i].properties.place.toString(),
            time: eqData.features[i].properties.time.toString(),
            mag: eqData.features[i].properties.mag.toString(),
          },
        ],
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container pt-3 pb-3"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="start"
                placeholder="Start date(year-mm-dd)"
                aria-label="Start date"
                // required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="end"
                placeholder="End date(year-mm-dd)"
                aria-label="End date"
                // required
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={this.fetchEarthquakes}
              >
                Fetch
              </button>
            </div>
          </div>
        </div>

        <Show eqs={this.state.earthquakes} />
      </div>

      // <div className="container">
      //   <input className="input" type="text" />
      //   <input type="text" />
      //   <button className="btn btn-primary" onClick={this.fetchEarthquakes}>
      //     Fetch
      //   </button>

      //   <Show eqs={this.state.earthquakes} />
      // </div>
    );
  }
}

export default FetchEqData;
