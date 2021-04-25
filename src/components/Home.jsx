import React, { useState, useEffect } from "react";
import mountain from "../resources/images/mountain.jpg";
import { Link } from "react-router-dom";

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
      <Link
        style={{
          fontStyle: "bold",
          fontSize: "36",
          display: `${buttonDisplay}`, //needs backtick
          marginTop: 100,
        }}
        type="button"
        class="btn btn-primary"
        to="/earthquakes"
        role="button"
      >
        Earthquakes
      </Link>
      {/* <Link to="/earthquakes">Earthquakes</Link> */}
      <div className="container">
        <footer
          className="footer fixed-bottom bg-dark py-2"
          style={{ color: "#bbb" }}
        >
          This is a side project, created with react and bootstrap.
          <div>
            Contact Me:{" "}
            <a
              href="mailto: gourabpaul900@gmail.com?subject = Feedback"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 18 18"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
