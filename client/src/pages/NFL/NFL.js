import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Moment from "react-moment";
import "moment-timezone";
import { Scrollbars } from "react-custom-scrollbars";
import BG from "../../components/HomeBackground2";
import Games from "../../components/NFL/Games.js"
import Injury from "../../components/NFL/Injury.js"


class NFL extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      error: null,
      isLoaded: false,  
      Standings: [],
      Players: [],
      playerInjuries: [],
      hasError: false
    })
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  Standings = () => {
    API.NFLStandings()
      .then(APIresponse => {
        console.log("Standings", APIresponse);
        this.setState({ Standings: APIresponse.data });
      })
      .catch(err => console.log(err));
  };

  Injuries = () => {
    API.NFLInjuries()
      .then(APIresponse => {
        console.log("Injuries", APIresponse.data);
        this.setState({ playerInjuries: APIresponse.data });
      })
      .catch(err => console.log(err));
  };
  Players = () => {
    API.NFLPlayers()
      .then(APIresponse => {
        console.log("players", APIresponse);
        this.setState({ Players: APIresponse.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log("I was triggered during componentDidMount");
    this.Standings();
    this.Players();
    this.Injuries();
    // this.getGames();
  }

  

  render() {
    const spacer = {
      height: "100px"
    };
    return (
      <BG>
        <Row>
          <Col size="lg-12">
            <Games>

            </Games>
           <Injury>

           </Injury>
          </Col>
        </Row>
        <div style={spacer}>

        </div>
         <div style={spacer}>

          

        </div>
        <div style={spacer}>

          

        </div>
      </BG>
    );
  }
}

export default NFL;
