import React, { Component } from "react";
import "./Footer.css";


class Footer extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render(){

  return(
  <footer className="Site-footer">
    <div className="Footer">
      <div className="Footer-credits">
        <span className="Footer-credit">
        Copyright &#9400; 
          <a href="https://github.com/naz585/Final-Project">Cashing Winners</a>.
        </span>
      </div>
    </div>
  </footer>
  )}
}

export default Footer;
