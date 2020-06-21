import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class healthcarePage extends Component {
  state = {
    categories: [],
  };

  handleClick = () => {
    console.log("Click");
  };

  render() {
    return (
      <div>
        <div className="bgimgHC">
          <div class="container">
            <div class="carousel-caption text-left" style={{ left: "15px" }}>
              <h1>Healthcare</h1>
            </div>
          </div>
        </div>
        <div>
          <p>
            With the recent COVID-19 pandemic, hospitals are more than ever in
            need of your support to get more medical supplies & to fund research
            for a vaccine. Donate today to help flatten our ever-increasing
            COVID case numbers.
          </p>
        </div>
        <div>
          <h1>Donate</h1>
        </div>
        <div class="container">
          <div class="row justify-content-around">
            <div class="col-4">
              <button type="button" class="btn btn-outline-primary">
                $10
              </button>
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-outline-primary">
                $20
              </button>
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-outline-primary">
                $30
              </button>
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-outline-primary">
                Custom
              </button>
            </div>
          </div>{" "}
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  className="clickable"
                />
              </div>
            </div>
            <text
              className="form-control col-5"
              aria-label="Text input with radio button"
            >
              I would like to donate to an organization of my choice
            </text>
          </div>
        </div>
      </div>
    );
  }
}

export default healthcarePage;
