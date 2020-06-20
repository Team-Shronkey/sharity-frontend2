import React, { Component } from "react";

class categoryButton extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div
          className="card mb-4 shadow-sm text-center "
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
    );
  }
}

export default categoryButton;
