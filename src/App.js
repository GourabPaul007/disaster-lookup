import React from "react";
import "./App.css";
import FetchEqData from "./components/fetchEqData";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/earthquakes" component={FetchEqData} />
        </div>
      </Router>
    );
  }
}

export default App;
