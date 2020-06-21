import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class finDon extends Component {
  state = {
    category: [],
  };

  handleClick = () => {
    console.log("Click");
  };

  render() {
    return (
      <div className="home-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center font-weight-bold">
        <h1 className="display-4">
          What cause would you like to support today?
        </h1>
        <div className="category py-5 bg-light my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable "
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-german-shepherd-50.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4">Animals</h5>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable"
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-pagoda-48.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4 ">Arts and Heritage</h5>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable"
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-children-50.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4">Children</h5>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable "
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-wheelchair-50.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4">Disability</h5>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable "
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-old-woman-50.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4">Elderly</h5>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable"
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-sprout-50.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4">Environment</h5>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <Link
                  to="/causes"
                  onClick={this.handleClick}
                  donations={this.state.donations}
                  category={this.state.category}
                >
                  <div
                    className="card mb-4 shadow-sm text-center clickable"
                    style={{
                      width: "12rem",
                      height: "12rem",
                      backgroundColor: "#FFFFFF",
                      color: "#042c59",
                      borderColor: "#F5F5F5",
                      borderWidth: "2px",
                      borderRadius: "1.5rem",
                    }}
                  >
                    <div>
                      <img
                        className="mt-4"
                        width="60em"
                        height="60em"
                        src={require("../icons/icons8-medical-heart-50.png")}
                      />
                    </div>
                    <h5 className="card-title mt-4">Healthcare</h5>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 mt-3">
                <div
                  className="card mb-4 shadow-sm text-center clickable"
                  onClick={this.handleClick}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    backgroundColor: "#FFFFFF",
                    color: "#042c59",
                    borderColor: "#F5F5F5",
                    borderWidth: "2px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div>
                    <img
                      className="mt-4"
                      width="60em"
                      height="60em"
                      src={require("../icons/icons8-globe-50.png")}
                    />
                  </div>
                  <h5 className="card-title mt-4">Humanitarian</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default finDon;
