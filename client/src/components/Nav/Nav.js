import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


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
    const { isAuthenticated } = this.props.auth;
    return (

      <nav className="navbar navbar-expand-lg navbar-dark mb-2">
      <img className="navPic img-fluid ml-5" src="https://sportshub.cbsistatic.com/i/r/2018/09/15/f0e813c2-ad7f-453e-855d-097d9f4feed7/thumbnail/770x433/cdf43928ded227cc4f95dd2b8d702116/top100-cover.png  " alt='left' width="300px" height="144px" />
        <div className="mx-auto">
        <Link className="navbar-brand mx-auto" to="/home">
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
                className={window.location.pathname === "/Glossary" ? "nav-link active" : "nav-link"}
                to="/FAQ"
              >
                Glossary
                
              </Link>
            </li>
            {
              isAuthenticated() && (
                <li className="nav-item">
                <Link
                  className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}
                  to="/Profile"
                >
                  Profile
                  
                </Link>
              </li>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
              


            {
              !isAuthenticated() && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={this.login.bind(this)}
                  >
                    Login/Signup
                  </button>
                )
            }
           </ul>
        </div>
        </div>
        <img className="navPic mr-5" src="https://wallpaper.wiki/wp-content/uploads/2017/06/NFL-wallpapers-HD-team-pittsburgh-steelers.jpg" alt="right" width="300px" height="144" />
      </nav>
    );
  }
}

export default Nav;