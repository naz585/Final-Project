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
        nbaLines: []
      }

    };
  
    getNbaLines = () => {
        API.getNbaLines()
        .then(APIresponse =>{
          console.log('NBA lines', APIresponse)
           this.setState({nbaLines: APIresponse})}
           )
          .catch(err => console.log(err));
      };
      componentDidMount() {
        console.log('I was triggered during componentDidMount')
        this.getNbaLines();
        // this.getGames();
      }

      scrapedNbaGames = () => {
        const nbaLines = this.state.nbaLines.slice(2);
          return (
            <tbody>
              {nbaLines.map((nbaLine, idx) => <tr key={idx}><td>{nbaLine.favorite}</td><td>{nbaLine.line}</td><td>{nbaLine.dog}</td><td>{nbaLine.total}</td></tr>)}
            </tbody>
          )
        }
  
        render() {
            const nbaLines = this.state.nbaLines;
            
            return (
                <table className="table-striped table-bordered lines">
                <thead>
                  <tr>
                    <th  data-tip="The selection that the markets sees as the most probable winner of a given event. The quoted odds reflect the extent to which the choice is favored."scope="col">Favorite<FaInfoCircle /><ReactTooltip /></th>
                    <th data-tip="The predicted scoring differential between two opponents as quoted by a sportsbook" scope="col">Spread<FaInfoCircle /><ReactTooltip /></th>
                    <th data-tip="Team perceived to be least likely to win." scope="col">Underdog<FaInfoCircle /><ReactTooltip /></th>
                    <th data-tip="Bet on whether the total of any given variable will be under the mark set by the bookmaker/Bet on whether the total of any given variable will be over the mark set by a bookmaker. One of three basic bet types"
                    scope="col">Under/Over<FaInfoCircle /><ReactTooltip /></th>
                  </tr>
                </thead>
                  {nbaLines.length <= 0 ? null : this.scrapedNbaGames()}
            </table>
            )
        }


}

export default NFLscrape;



