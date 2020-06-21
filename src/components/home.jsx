import React, { Component } from "react";
import categoryButton from "./categoryButton";

class homePage extends Component {
  handleClick = () => {
    console.log("pressed");
  };
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-5 mt-5">
            <h2 className="slogan">Share now, grow together,</h2>
            <h2 className="slogan">with Sharity!</h2>
            <p className="mt-5" style={{ color: "#042c59" }}>
              Sharity is the smartest way to donate to your favourite charities,
              however you want, whenever you want
            </p>
          </div>
          <div className="col-7" style={{ justifyContent: "flex-end" }}>
            <img src={require("../icons/landing.png")}></img>
          </div>
        </div>
      </main>
    );
  }
}

export default homePage;
