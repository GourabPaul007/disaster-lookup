import React, { Component, useState, useEffect } from "react";
import mountain from "../resources/images/mountain.jpg";

const Home = () => {
  const [buttonDisplay, setButtonDisplay] = useState("none");
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setButtonDisplay("inline");
      }
    };
  });

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${mountain})`,
        backgroundPosition: "sticky",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>&nbsp;</div>
      <h1
        style={{
          color: "#bcaaa4",
          textAlign: "center",
          fontSize: "72px",
          margin: "auto",
        }}
      >
        Welcome to our Earthquake Tracker
      </h1>
      <div style={{ marginTop: 50 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-arrow-down-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>
      </div>
      <button
        style={{
          color: "black",
          fontStyle: "bold",
          display: `${buttonDisplay}`,
          marginTop: 100,
        }}
        className="btn btn-primary"
      >
        Earthquakes
      </button>
    </div>
  );
};

export default Home;
