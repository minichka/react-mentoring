import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">FotoRoulette</span>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
