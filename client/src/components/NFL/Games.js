
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Moment from "react-moment";
import { Scrollbars } from "react-custom-scrollbars";



class games extends Component {
    constructor(props) {
        super(props);
        (this.state = {
          error: null,
          isLoaded: false,
          seasonalGames: []
        })
      }

      Seasonal = () => {
        API.NFLSeasonal()
          .then(APIresponse => {
            console.log("Seasonal games", APIresponse.data);
            this.setState({ seasonalGames: APIresponse.data });
          })
          .catch(err => console.log(err));
      };
      componentDidMount() {
        console.log("I was triggered during componentDidMount");
        this.Seasonal();

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
  render() {
    const spacer = {
      height: "100px"
    };
    const seasonalGames = this.state.seasonalGames;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
    <div className="col-md-6 float-left Games">
                <h3 className="text-center">Weekly Schedule</h3>
              <Scrollbars style={{ width: 750, height: 500 }}>
                {seasonalGames.length <= 0 ? null : this.seasonalGames()}
              </Scrollbars>
            </div>

    )
    }
    }

    export default games;