import React, { Component } from "react";
import CauseCard from "./causeCard";

class Causes extends Component {
  state = {
    donations: [
      { id: "1", name: "Animal Welfare", select: "false" },
      { id: "2", name: "Arts & Heritage", select: "false" },
      { id: "3", name: "Children & Youth", select: "false" },
      { id: "4", name: "Disability", select: "false" },
      { id: "5", name: "Elderly", select: "false" },
      { id: "6", name: "Environment", select: "false" },
      { id: "7", name: "Health", select: "false" },
      { id: "8", name: "Humanitarian", select: "false" },
    ],
  };
  handleSelect = (id) => {
    console.log("SELECTED", id);
  };
  render() {
    return (
      <main className="container">
        <div
          className="alert alert-light content-justify-center mx-auto"
          role="alert"
        >
          Want to donate in other ways? Fret not! Scroll through to see what you
          have that you could offer to support your favourite causes!
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5 d-none d-md-block sidebar">
              <h6 style={{ color: "042C59" }}>Type of Donation</h6>
              {this.state.donations.map((donation) => (
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        className="clickable"
                        onClick={() => this.handleSelect(donation)}
                      />
                    </div>
                  </div>
                  <text
                    className="form-control col-5"
                    aria-label="Text input with radio button"
                  >
                    {donation.name}
                  </text>
                </div>
              ))}
            </div>
            <div className="row" />
            <CauseCard />
            <div className="row mt-5">
              <div className="col-5" />
              <CauseCard />
            </div>
            <div className="col-9">
              <div className="row"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Causes;
