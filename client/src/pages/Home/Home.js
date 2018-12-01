import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import Card from "../../components/Card";
// import Form from "../../components/Form";
// import Book from "../../components/Book";
// import Footer from "../../components/Footer";
//import Table from "../../components/Table";
import Marquee from "../../components/marquee"
import table from "../../components/Table"
import API from "../../utils/API";
import NBABG from "../../components/HomeBackground"
import NFLBG from "../../components/HomeBackground2"
import { Col, Row, Container } from "../../components/Grid";
import { FaInfoCircle } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'
import NFLscrape from '../../components/Scrapper/NFLScrapper.js'
import NBAscrape from '../../components/Scrapper/NBAScrapper.js'
import Daily from "../../components/NBA/Daily"
import Daily2 from "../../components/NFL/Daily"
// import { List } from "../../components/List";


const spacer = {
  height: '100px'
};

const spacer2 = {
  height: '50px'
};


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    
      items: [],
      // lines: [],
      items2: []
     
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // getLines = () => {
  //   API.getLines()
  //   .then(APIresponse =>{
  //     console.log('NFL lines', APIresponse)
  //      this.setState({lines: APIresponse})}
  //      )
  //     .catch(err => console.log(err));
  // };
  
 

   componentDidMount() {
    console.log('I was triggered during componentDidMount')
    // this.getGames();
  }

  //scrapedGames = () => {
//    let teams = []
//    for (let j = 1; j < nflResults.length; j++) {
//      teams.push(<tr><td>{nflResults.first[j]}</td><td>{nflResults.third[j].sell}</td><td>{nflResults.second[j].sell}</td>
//      <td>{nflResults.fourth[j].sell}</td></tr>)
//  }
//  return teams
// }
  

  // scrapedGames = () => {
  //   const lines = this.state.lines.slice(1);
  //     return (
  //       <tbody>
  //         {lines.map((line, idx) => <tr key={idx}><td>{line.teams}</td><td>{line.mls.ml}</td><td>{line.spreads.spread}</td><td>{line.totals.total}</td></tr>)}
  //       </tbody>
  //     )
  //   }

   
  render() {
    
    return (
      
      <Container fluid>
        <NBABG>
          <Row>
        <Col size="md-12">
        <h3 className="mx-auto text-center" >Today's NBA schedule</h3>
        <Marquee>
        <Daily>

        </Daily>
        </Marquee>
        </Col>
        </Row>
        <div style={spacer2}>
            </div>
        <Row>
          <Col size="md-12">
         <NBAscrape>

         </NBAscrape>

      </Col>
        </Row>
        <div style={spacer}>
            </div>
        </NBABG>

        
        <div style={spacer}>
            </div>


          <NFLBG>
         <Row>
        <Col size="md-12">
        <h3 className="mx-auto text-center" >Today's NFL schedule</h3>
        <Marquee>
  
        <Daily2></Daily2>
        </Marquee>
        </Col>
        </Row>  
        <div style={spacer2}>
            </div>
          <Row>


            <Col size="md-12">
             <NFLscrape></NFLscrape>

      </Col>
        </Row>
        <div style={spacer}>
            </div>
        </NFLBG>
        <div style={spacer}>
            </div>
      
        
      </Container>


      
    );
  }
}

export default Home;
