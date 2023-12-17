import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class NavBar extends Component {


  static propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };

  
  
  render() {
    
    const { darkMode, toggleDarkMode } = this.props;

    const logoUrl = darkMode
    ?  "https://i.ibb.co/3FbpDzt/image-removebg-preview.png"
    : "https://i.ibb.co/tmDStsr/logo-no-background.png"

    return (
      <div>
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className="container">
            <Link to="general">
              <img
                src={logoUrl}
                alt="News-Buss Logo"
                className="navbar-logo"
                style={darkMode ? {height: "71px", marginRight: "10px"} : {height: "31px", marginRight: "10px"} }
              />
            </Link>
            <Link className="navbar-brand" to="/">
              News-Buss
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="general"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/componunt/AboutUs">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" target="_blank" to="https://forms.gle/VFeZkx7B9nWk4jsy7">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Top-HeadLines
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/general">
                        General
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="form-check form-switch ms-auto">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label className="form-check-label" htmlFor="darkModeToggle">
                Dark Mode
              </label>
            </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
