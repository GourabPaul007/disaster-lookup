import React from "react";
import "./App.css";
import FetchEqData from "./components/fetchEqData";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/earthquakes" exact component={FetchEqData} />
        </Router>
      </div>
    );
  }
}

export default App;
