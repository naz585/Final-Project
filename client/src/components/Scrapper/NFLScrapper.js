import React, { Component } from "react";
import table from "../Table"
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { FaInfoCircle } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'


class NFLscrape extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        lines: [],
      }

    };
  
    getLines = () => {
        API.getLines()
        .then(APIresponse =>{
          console.log('NFL lines', APIresponse)
           this.setState({lines: APIresponse})}
           )
          .catch(err => console.log(err));
      };

      componentDidMount() {
        console.log('I was triggered during componentDidMount')
        this.getLines();
        // this.getGames();
      }

      scrapedGames = () => {
        const lines = this.state.lines.slice(1);
          return (
            <tbody>
              {lines.map((line, idx) => <tr key={idx}><td>{line.teams}</td><td>{line.mls.ml}</td><td>{line.spreads.spread}</td><td>{line.totals.total}</td></tr>)}
            </tbody>
          )
        }

        render() {
            const lines = this.state.lines;
            
            return (
                <table className="table-striped table-bordered lines">
                <thead>
                  <tr>
                
                    <th  data-tip="Home team plays at their stadium and is listed second" scope="col">Away/Home<FaInfoCircle /><ReactTooltip /></th>
                    <th  data-tip="The predicted scoring differential between two opponents as quoted by a sportsbook" scope="col">Spread<FaInfoCircle /><ReactTooltip /></th>
                    <th  data-tip="A bet on the outcome of a match/game. One of three basic bet types" scope="col">Moneyline<FaInfoCircle /><ReactTooltip /></th>
                    <th  data-tip="Bet on whether the total of any given variable will be under the mark set by the bookmaker/Bet on whether the total of any given variable will be over the mark set by a bookmaker. One of three basic bet types" 
                    scope="col">Under/Over<FaInfoCircle /><ReactTooltip /></th>
                </tr>
              </thead>
                {lines.length <= 0 ? null : this.scrapedGames()}
             </table>
            )
        }


}

export default NFLscrape;



