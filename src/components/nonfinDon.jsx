import React, { Component } from "react";
import CampaignCard from "./campaignCard";

class nonfinDon extends Component {
  state = {
    donations: [
      { id: "1", name: "Clothes" },
      { id: "2", name: "Education" },
      { id: "3", name: "Food" },
      { id: "4", name: "Furniture" },
      { id: "5", name: "Skills" },
      { id: "6", name: "Toys" },
      { id: "7", name: "Volunter" },
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
            <div className="col-3 d-none d-md-block sidebar">
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
            <div className="col-9">
              <div className="row">
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default nonfinDon;
