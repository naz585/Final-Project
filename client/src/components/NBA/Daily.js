import React, { Component } from "react";

import Moment from "react-moment";
import API from "../../utils/API";



class NBADaily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    
      items: []
     
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getGames = () => {
    API.getGames()
      .then(res => {console.log(res)
        this.setState({ items: res.data})})
      .catch(err => console.log(err));
  };



   componentDidMount() {
    console.log('I was triggered during componentDidMount')
    this.getGames();
  }

   ScheduleA = () => {
    let styles = {
      width: "125px",
      margin: "0",
      padding: "0",
      float: "left",
    }
    const games = this.state.items.games
    return games.length <= 0 ? null: ( games.map((game, idx) => <div key={idx} style={styles}>
    <div style={{fontSize: "16px", color: "white" }}>
    <Moment format="hh:mmA">
    {game.schedule.startTime}
    </Moment></div>
    
    {game.schedule.awayTeam.abbreviation}
    <br/>
    {game.schedule.homeTeam.abbreviation}
    </div>))
   
  }



   
  render() {
    const nbaLines = this.state.nbaLines;
    const games = this.state.items;
    const games2 = this.state.items;
    
    return (
      
          <h3>
          {games.length <= 0 ? null: this.ScheduleA()}
          </h3>

    );
  }
}

export default NBADaily;
