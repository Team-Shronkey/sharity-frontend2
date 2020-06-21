import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class CauseCard extends Component {
  render() {
    return (
      <div className="card col box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">
            Covid Vaccine Response Fund
          </h4>
        </div>
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
        <p className="card-text mx-auto mt-2" style={{ fontSize: 14 }}>
          With the recent COVID-19 Pandemic, hospitals are more than ever in
          need of your support to get more medical supplies & to fund research
          for a vaccine. Donate today to help flatten our ever-increasing COVID
          case numbers.
        </p>
        <p>Organisations Involved:</p>
        <div className="container">
          <div clasName="row">
            <div className="col-sm-3" style={{ backgroundColor: "#F5f5f5" }}>
              World Health Organisation
            </div>
          </div>
        </div>
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
              <Link to="/causes/covid-vaccine-response-fund">
                <button
                  type="button"
                  className="btn btn-sm btn-block btn-outline-primary"
                >
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CauseCard;
