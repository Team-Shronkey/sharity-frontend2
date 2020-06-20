import React, { Component } from "react";
import categoryButton from "./categoryButton";

class homePage extends Component {
  handleClick = () => {
    console.log("pressed");
  };
  render() {
    return <h1>Landing Page</h1>;
  }
}

export default homePage;
