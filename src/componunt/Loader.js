import React, { Component } from "react";
import "./Loader.css";

export class Loader extends Component {
  render() {
    return (
      <>
        <div id="loading-bar-spinner" className="spinner text-center">
          <div className  ="spinner-icon text-center"></div>
        </div>
      </>
    );
  }
}

export default Loader;
