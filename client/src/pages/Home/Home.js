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
import { Col, Row, Container } from "../../components/Grid";
// import { List } from "../../components/List";


const spacer = {
  height: '100px'
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      lines: [],
      items2: [],
      nbaLines: []
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  getLines = () => {
    API.getLines()
    .then(APIresponse =>{
      console.log('NFL lines', APIresponse)
       this.setState({lines: APIresponse})}
       )
      .catch(err => console.log(err));
  };
  getNbaLines = () => {
    API.getNbaLines()
    .then(APIresponse =>{
      console.log('NBA lines', APIresponse)
       this.setState({nbaLines: APIresponse})}
       )
      .catch(err => console.log(err));
  };
  getGames = () => {
    API.getGames()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  };

  getGames2 = () => {
    API.getGames2()
      .then(res => this.setState({ items2: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    this.getGames2();
    this.getLines();
    this.getGames();
    this.getNbaLines();
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
  ScheduleA = () => {
    let styles = {
      width: "125px",
      margin: "0",
      padding: "0",
      float: "left",
    }
    const games = this.state.items.games
   return ( games.map((game, idx) => <div key={idx} style={styles}>{game.schedule.awayTeam.abbreviation}
    <br/>
    {game.schedule.homeTeam.abbreviation}
    </div>))
   
  }

  ScheduleB = () => {
    let styles = {
      width: "125px",
      margin: "0",
      padding: "0",
      float: "left",
      color: "red"
    }
    const games = this.state.items2.games
   return ( games.map((game, idx) => <div key={idx} style={styles}>{game.schedule.awayTeam.abbreviation}
    <br/>
    {game.schedule.homeTeam.abbreviation}
    </div>))
   
  }


  scrapedGames = () => {
    const lines = this.state.lines.slice(1);
      return (
        <tbody>
          {lines.map((line, idx) => <tr key={idx}><td>{line.teams}</td><td>{line.mls.ml}</td><td>{line.spreads.spread}</td><td>{line.totals.total}</td></tr>)}
        </tbody>
      )
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
    const lines = this.state.lines;
    const games = this.state.items;
    const games2 = this.state.items;
    return (
      
      <Container>
      <Row>
        <Col size="md-12">
        <h3 className="mx-auto text-center" >Today's NBA schedule</h3>
        <Marquee>
          <h3>
          {games.length <= 0 ? null : this.ScheduleA()}
          </h3>
        </Marquee>
        <h3 className="mx-auto text-center" >Today's NFL schedule</h3>
        <Marquee>
          <h3>
          {games2.length <= 0 ? null : this.ScheduleB()}
          </h3>
        </Marquee>


        </Col>
        </Row>
        

          <Row>
            <Col size="md-12">
              <table className="table-striped table-bordered lines">
                <thead>
                  <tr>
                    <th scope="col">Away/Home</th>
                    <th scope="col">Spread</th>
                    <th scope="col">Moneyline</th>
                    <th scope="col">Under/Over</th>
                </tr>
              </thead>
                {lines.length <= 0 ? null : this.scrapedGames()}
             </table>

      </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <table className="table-striped table-bordered lines">
              <thead>
                <tr>
                  <th scope="col">Favorite</th>
                  <th scope="col">Spread</th>
                  <th scope="col">Underdog</th>
                  <th scope="col">Under/Over</th>
                </tr>
              </thead>
                {lines.length <= 0 ? null : this.scrapedNbaGames()}
          </table>

      </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <div className="spacer" style={spacer}>

          </div>
          </Col>
          <Col  size="md-12">
            

              {/* <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2> */}
          
          </Col>
        </Row> 
        
        <Row>
        </Row>
        
        <Row>
          {/* <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col> */}
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default Home;
