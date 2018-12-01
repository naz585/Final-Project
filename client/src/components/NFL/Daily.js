import React, { Component } from "react";


import API from "../../utils/API";



const spacer = {
  height: '100px'
};
class NFLDaily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    
      items2: []
     
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getGames = () => {
    API.getGames2()
      .then(res => this.setState({ items2: res.data}))
      .catch(err => console.log(err));
  };



   componentDidMount() {
    console.log('I was triggered during componentDidMount')
    this.getGames();
  }

   ScheduleB = () => {
    let styles = {
      width: "125px",
      margin: "0",
      padding: "0",
      float: "left",
    }
    const games = this.state.items2.games
    return games.length <= 0 ? null: ( games.map((game, idx) => <div key={idx} style={styles}>{game.schedule.awayTeam.abbreviation}
    <br/>
    {game.schedule.homeTeam.abbreviation}
    </div>))
   
  }



   
  render() {
    const games = this.state.items2;
    
    return (
      
          <h3>
              No Games Today
          {games.length <= 0 ? 'No Games Today': this.ScheduleB()}
          </h3>

    );
  }
}

export default NFLDaily;
