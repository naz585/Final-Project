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
          Created and maintained by 
          <a href="https://philipwalton.com">Philip Walton</a>.
        </span> 
        <span className="Footer-credit">
          Source code and examples released under the 
          <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/LICENSE">
            MIT
          </a> 
          license.
        </span> 
        <span className="Footer-credit">
          Website and documentation licensed under 
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </span>
      </div>
    </div>
  </footer>
  )}
}

export default Footer;
