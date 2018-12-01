
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Moment from "react-moment";
import { Scrollbars } from "react-custom-scrollbars";


class injury extends Component {

    constructor(props) {
        super(props);
        (this.state = {
          error: null,
          isLoaded: false,
          playerInjuries: []
        })
      }

      Injuries = () => {
        API.nbaInjuries()
          .then(APIresponse => {
            console.log("Injuries", APIresponse.data);
            this.setState({ playerInjuries: APIresponse.data });
          })
          .catch(err => console.log(err));
      };
      componentDidMount() {
        this.Injuries();
      }
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
              <div key={idx} style={styles} className="text-center pb-5 pr-5">
             <a href={"https://twitter.com/"+game.socialMediaAccounts.map((accounts, idx) =>(accounts.value))}> <img  src={"https://twitter.com/"+game.socialMediaAccounts.map((accounts, idx) =>(accounts.value)) +"/profile_image?size=bigger"} alt="No Twitter"></img>
             </a>
                {game.firstName} {game.lastName}
                <br />
                {game.currentInjury.description}
              </div>
            ));
          }

            render() {
            const Injuries = this.state.playerInjuries;
            return (
                <div className="col-md-6 float-left">
                <h3>Player Injuries</h3>
                <Scrollbars style={{ width: 600, height: 500 }}>
                  {Injuries.length <= 0 ? null : this.playerInjury()}
                </Scrollbars>
              </div>
                );
            }


    }

    export default injury;