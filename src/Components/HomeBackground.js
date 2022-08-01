import React, { Component } from "react";

export default class HomeBackground extends Component {
  render() {
    return (
      <div className="homeBackground">
        <img
          src={process.env.PUBLIC_URL + "images/homeBackground.png"}
          alt="backgroundImage"
          className="homeBackgroundImage"
        ></img>
        <h2 className="homeBackgroundTitle">Chez vous, partout et ailleurs</h2>
      </div>
    );
  }
}
