import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import steph from './stephCurry.png';
import beast from './Beast.png';

class Nav extends Component {
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

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark mb-2">
      <img className="navPic ml-5" src="https://sportshub.cbsistatic.com/i/r/2018/09/15/f0e813c2-ad7f-453e-855d-097d9f4feed7/thumbnail/770x433/cdf43928ded227cc4f95dd2b8d702116/top100-cover.png  " width="300px" height="144px" />
        <div className="mx-auto">
        <Link className="navbar-brand mx-auto" to="/">
          Cashing Winners
        </Link>
        
        
         <button
          onClick={this.toggleNav}
          className="navbar-toggler mx-auto"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
           <span className="navbar-toggler-icon" />
        </button>
            
            

            
        
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse mx-auto`} id="navbarNav">
          <ul className="navbar-nav mx-auto"> 
             <li className="nav-item">
              <Link
                className={window.location.pathname === "/NFL" ? "nav-link active" : "nav-link"}
                to="/NFL"
              >
                NFL
                
              </Link>
            </li> 
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/NBA" ? "nav-link active" : "nav-link"}
                to="/NBA"
              >
                NBA
                
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/SignUp" ? "nav-link active" : "nav-link"}
                to="/SignUp"
              >
                Sign Up
                
              </Link>
            </li> 
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/LogIn" ? "nav-link active" : "nav-link"}
                to="/LogIn"
              >
                Log In
                
              </Link>
            </li> 
           </ul>
        </div>
        </div>
        <img className="navPic mr-5" src="http://www.ie-wallpapers.com/data/out/168/37366754-nfl-wallpaper.jpg" width="300px" height="144" />
      </nav>
    );
  }
}

export default Nav;
