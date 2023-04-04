import React, { Component } from "react";
import loader from "../assets/ripple-load.svg";

export default class Loader extends Component {
  render() {
    return (
      <div className="container text-center">
        <img src={loader} alt="loader" />
      </div>
    );
  }
}
