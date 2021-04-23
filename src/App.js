import React from "react";
import "./App.css";
import FetchEqData from "./components/fetchEqData";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import mountain from "./resources/images/mountain.jpg";

class App extends React.Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#3e2723",
          // backgroundImage: `url(${mountain})`,
          // backgroundPosition: "sticky",
          // backgroundSize: "cover",
          width: "100",
          height: "100",
        }}
      >
        <Router>
          <Navbar />
          <Route path="/earthquakes" component={FetchEqData} />
        </Router>
      </div>
    );
  }
}

export default App;
