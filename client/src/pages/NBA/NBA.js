import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Moment from "react-moment";
import "moment-timezone";
import { Scrollbars } from "react-custom-scrollbars";
import "./NBA.css";
import ReactTimeout from "react-timeout";
import BG from "../../components/HomeBackground";
class NBA extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      error: null,
      isLoaded: false,
      seasonalGames: [],
      playerInjuries: [],
      Standings: [],
      Players: [],
      hasError: false
    }),
      function() {
        console.log("setState completed", this.state);
      };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  Seasonal = () => {
    API.nbaSeasonal()
      .then(APIresponse => {
        console.log("Seasonal games", APIresponse.data);
        this.setState({ seasonalGames: APIresponse.data });
      })
      .catch(err => console.log(err));
  };

  Standings = () => {
    API.nbaStandings()
      .then(APIresponse => {
        console.log("Standings", APIresponse);
        this.setState({ Standings: APIresponse.data });
      })
      .catch(err => console.log(err));
  };

  Injuries = () => {
    API.nbaInjuries()
      .then(APIresponse => {
        console.log("Injuries", APIresponse.data);
        this.setState({ playerInjuries: APIresponse.data });
      })
      .catch(err => console.log(err));
  };

  Players = () => {
    API.nbaPlayers()
      .then(APIresponse => {
        console.log("players", APIresponse);
        this.setState({ Players: APIresponse.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log("I was triggered during componentDidMount");
    this.Standings();
    this.Injuries();
    this.Seasonal();
    this.Players();
    // this.getGames();
  }

  seasonalGames = () => {
    let styles = {
      width: "140px",
      fontSize: "20px",
      margin: "0",
      padding: "0",
      float: "left",
      color: "white"
    };
    let styles2 = {
      fontSize: "16px"
    };
    const games = this.state.seasonalGames.games;

    return games.length <= 0
      ? null
      : games.map((game, idx) => (
          <div key={idx} style={styles} className="text-center mb-5">
            <div key={idx} style={styles2}>
              <Moment format="ddd MMM DD hh:mmA">
                {game.schedule.startTime}
              </Moment>
            </div>
            {game.schedule.awayTeam.abbreviation}
            <br />
            {game.schedule.homeTeam.abbreviation}
          </div>
        ));
  };

  playerInjury = () => {
    let styles = {
      width: "140px",
      fontSize: "20px",
      margin: "0",
      padding: "0",
      float: "left",
      color: "white"
    };

    const games = this.state.playerInjuries.players;

    return games.length <= 0
      ? null
      : games.map((game, idx) => (
          <div key={idx} style={styles} className="text-center">
            {game.firstname} {game.lastname}
            <br />
            {game.currentInjury.discription}
          </div>
        ));
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const spacer = {
      height: "100px"
    };
    const seasonalGames = this.state.seasonalGames;
    const Injuries = this.state.playerInjuries;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <BG>
        <Row>
          <Col size="lg-12">
            <div className="col-md-6 float-left Games">
              <Scrollbars style={{ width: 440, height: 250 }}>
                {seasonalGames.length <= 0 ? null : this.seasonalGames()}
              </Scrollbars>
            </div>
            <div className="col-md-6 float-left">
              <Scrollbars style={{ width: 200, height: 250 }}>
                {Injuries.length <= 0 ? null : this.playerInjury()}
              </Scrollbars>
            </div>
          </Col>
        </Row>
        <div style={spacer}>

        </div>
      </BG>
    );
  }
}

export default NBA;
