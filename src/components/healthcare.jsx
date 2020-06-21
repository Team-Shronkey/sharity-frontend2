import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class healthcarePage extends Component {
  state = {
    selection: [
      { id: "1", amount: "$10", description: "A box of medical masks" },
      { id: "2", amount: "$20", description: "1 testing kit" },
      { id: "3", amount: "$50", description: "Support Clinical Research" },
      { id: "4", amount: "Custom", description: "Set a custom amount" },
    ],
  };

  handleClick = () => {
    console.log("Click");
  };

  paymentSelected = (amount) => {
    console.log("Payment Selected", amount);
  };

  render() {
    return (
      <div>
        <div className="bgimgHC">
          <div class="container">
            <div class="carousel-caption text-left" style={{ left: "15px" }}>
              <h1>Covid Vaccine Response Fund</h1>
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
        <div className="container">
          <div className="row justify-content-around card-deck mb-3">
            {this.state.selection.map((selected) => (
              <div className="col-3">
                {" "}
                <div className="card box-shadow">
                  <div className="my-0 card header font-weight-bold ">
                    {selected.description}
                  </div>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                    onClick={this.paymentSelected}
                  >
                    {selected.amount}
                  </button>
                </div>
              </div>
            ))}
          </div>{" "}
          <div className="input-group mb-2 mt-4">
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
