import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#F89DA6" }}
      >
        <a
          className="navbar-brand mr-5 font-weight-bold"
          href="#"
          style={{ color: "#FFFFFF" }}
        >
          Sharity
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-item nav-link mx-5 navheader" to="/home">
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link mx-5 navheader"
              to="/financial-donations"
            >
              Financial Donations
            </NavLink>
            <NavLink
              className="nav-item nav-link mx-5 navheader"
              to="/non-financial-donations"
            >
              Non-Financial Donations
            </NavLink>
            <NavLink className="nav-item nav-link mx-5 navheader" to="/about">
              About
            </NavLink>
          </div>
          <div className="navbar-nav ml-auto ml-2">
            <NavLink
              className="nav-item nav-link mr-auto navheader"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
