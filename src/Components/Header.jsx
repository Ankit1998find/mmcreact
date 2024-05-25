import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src="assets/img/logo.png" alt="logo" className="img-fluid" />
          </Link>
        </div>

        <nav id="navbar" className={`navbar ${isNavOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link className="nav-link scrollto active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/About">
                About
              </Link>
            </li>
            {/* <li><Link className="nav-link scrollto" to="/#portfolio">Portfolio</Link></li> */}
            {/* <li><Link className="nav-link scrollto" to="/#team">Team</Link></li>
              <li><Link className="nav-link scrollto" to="/#pricing">Pricing</Link></li> */}
            <li className="dropdown">
              <Link to="#">
                <span>Services</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link className="nav-link scrollto" to="/gis-application-dev">
                    GIS Application Development
                  </Link>
                </li>
                <li>
                  <Link to="/remote-sensing">Remote Sensing</Link>
                </li>
                <li>
                  <Link to="/3d-city-modeling">3D City Modelling</Link>
                </li>
                <li>
                  <Link to="/gis-photogrammetry">Photogrammetry</Link>
                </li>
                <li>
                  <Link to="/gis-data-analysis">
                    GIS Data/Analysis Services
                  </Link>
                </li>
                <li>
                  <Link to="#">Geocoding Services</Link>
                </li>
                <li>
                  <Link to="#">Utility Mapping</Link>
                </li>
                <li>
                  <Link to="#">GIS Implementation</Link>
                </li>
                <li>
                  <Link to="#">Golf Course Mapping</Link>
                </li>
                <li>
                  <Link to="#">Document Digitisation</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="getstarted scrollto" to="/#contact">
                Send a Message
              </Link>
            </li>
          </ul>
        </nav>
        <i
          className="bi bi-list mobile-nav-toggle"
          onClick={toggleNav}
          style={{ fontSize: "24px", cursor: "pointer" }}
        ></i>
      </div>
    </header>
  );
};

export default Header;
