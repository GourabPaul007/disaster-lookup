import React, { Component } from "react";
import Show from "./show";
// const axios = require("axios");

// starttime=2021-01-01&endtime=2021-01-02&minmagnitude=3
class FetchEqData extends Component {
  state = {
    startDate: null,
    endDate: null,
    earthquakes: [
      {
        _id: null,
        time: null,
        location: null,
        mag: null,
        url: undefined,
      },
    ],
  };

  //Making an URL for fetchEarthquakes()
  makeUrl = () => {
    let mainUrl =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&";

    let date = new Date();
    let currentDate = date.toISOString().split("T")[0];
    //`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    date.setDate(date.getDate() - 1);
    let previousDate = date.toISOString().split("T")[0];
    console.log(currentDate);
    let finalUrl =
      this.state.startDate || this.state.endDate == null
        ? mainUrl +
          `starttime=${previousDate}&endtime=${currentDate}&minmagnitude=3`
        : mainUrl +
          `starttime=${this.state.startDate}&` +
          `endtime=${this.state.endDate}&` +
          `minmagnitude=3`;
    return finalUrl;
  };

  //Fetching Earthquakes
  fetchEarthquakes = async () => {
    const eqReq = await fetch(this.makeUrl());
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
            url: eqData.features[i].properties.url.toString(),
          },
        ],
      });
    }
  };

  render() {
    return (
      <div
        className="container-fluid px-0 pt-3"
        style={{
          backgroundColor: "",
          width: "100",
          height: "100",
        }}
      >
        <div className="container">
          <div className="row">
            {/* StartDate input */}
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="start"
                placeholder="Start date(year-mm-dd)"
                aria-label="Start date"
                // required
                onChange={(event) => {
                  this.setState({ startDate: event.target.value });
                }}
              />
            </div>
            {/* EndDate input */}
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="end"
                placeholder="End date(year-mm-dd)"
                aria-label="End date"
                // required
                onChange={(event) => {
                  this.setState({ endDate: event.target.value });
                }}
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

          <Show eqs={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default FetchEqData;
