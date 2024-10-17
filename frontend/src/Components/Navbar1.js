import React, { useEffect } from "react";
import "./Navbarstyle.css";

const NavBar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("slide-in");

    const links = document.querySelectorAll(".navbar a");
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add("fade-in");
      }, index * 100);
    });
  }, []);

  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <img src="logo.png" alt="Logo" width="70" height="70" />
        <div className="navbarr text-white">
          <h1>WELCOME TO CODE EASE </h1>
        </div>
        <div className="d-flex align-items-center">
          <li className="nav-item fs-6">
            <button className="btn btn-signup nav-link-custom" onClick={() => window.location.href='/auth'}>Sign up</button>
          </li>
          <li className="nav-item fs-7">
            <button className="btn btn-login nav-link-custom" onClick={() => window.location.href='/auth'}>Log in</button>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
