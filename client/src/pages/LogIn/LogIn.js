import Auth from '../../auth.js';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class login extends Component {
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark mb-2">
        <Link className="navbar-brand mx-auto" to="/">
          Cashing Winners
        </Link>
        <button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, 'home')}
        > Home
            </button>
            {
              !isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
        </nav>
      </div>
    );
  }
}

export default login;
// import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import Card from "../../components/Card";
// import Book from "../../components/Book";
// import Footer from "../../components/Footer";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List } from "../../components/List";
// import Auth from '../../auth.js';
// const auth = new Auth();

// const login = () => (
  
//   auth.login()

// )

// export default login;
