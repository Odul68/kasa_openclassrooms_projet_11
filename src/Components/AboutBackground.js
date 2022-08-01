import React, { Component } from "react";

export default class AboutBackground extends Component {
  render() {
    return (
      <div>
        <div className="aboutBackground">
          <img
            src={process.env.PUBLIC_URL + "images/aboutBackground.png"}
            alt="backgroundImage"
            className="aboutBackgroundImage"
          ></img>
        </div>
      </div>
    );
  }
}
