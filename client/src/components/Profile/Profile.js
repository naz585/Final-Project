import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const spacer = {
      height: "300px"
    };
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <h3>{profile.nickname}</h3>
            </div>
          </Panel>
        </div>
        <div style={spacer} />
        <div style={spacer} />
        <div style={spacer} />
      </div>
    );
  }
}

export default Profile;
