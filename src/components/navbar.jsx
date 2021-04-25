import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark"
      // style={{ background: "#13001a" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Disaster Lookup
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/earthquakes">
                Earthquakes
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/tsunamis">
                Tsunamis
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
