import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./navcss.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
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
            <Link to="/mainpage" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/html" className="nav-link nav-link-custom">
                  HTML
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/css" className="nav-link nav-link-custom">
                  CSS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/javascript" className="nav-link nav-link-custom">
                  JavaScript
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/python" className="nav-link nav-link-custom">
                  Python
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
