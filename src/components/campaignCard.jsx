import React, { Component } from "react";
import { MDBMask, MDBView, MDBContainer } from "mdbreact";

class CampaignCard extends Component {
  render() {
    return (
      <div className="card col box-shadow">
        <div className="text-center">
          <img
            class="card-img-top img-fluid"
            alt="Thumbnail [100%x225]"
            style={{
              height: "225px",
              width: "100%",
              display: "block",
            }}
            src={require("../icons/frontline.jpg")}
          />
        </div>
        <h4 className="card-text mx-auto mt-2" style={{ fontSize: 14 }}>
          Collecting Food for Food Bank
        </h4>
        <p className="mx-auto">by Foodbank</p>
        <div className="card-body">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <small className="text-muted">Ending on: 22nd June</small>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-block btn-outline-primary"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignCard;
