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
      lines: []
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
      console.log('got lines', APIresponse)
       this.setState({lines: APIresponse})}
       )
      .catch(err => console.log(err));
  };
  getGames = () => {
    API.getGames()
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    
  
    this.getLines();
    this.getGames();
    

    // this.getGames();
  }
  // componentDidMount() {
  //   fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log('i got results')
  //         console.log(result)
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  //scrapedGames = () => {
//    let teams = []
//    for (let j = 1; j < nflResults.length; j++) {
//      teams.push(<tr><td>{nflResults.first[j]}</td><td>{nflResults.third[j].sell}</td><td>{nflResults.second[j].sell}</td>
//      <td>{nflResults.fourth[j].sell}</td></tr>)
//  }
//  return teams
// }
  // ScheduleA = () => {
  //   let styles = {
  //     width: "125px",
  //     margin: "0",
  //     padding: "0",
  //     float: "left"
  //   }
  //   let awayteams = []
  //   for (let i = 0; i < this.state.games.games.length; i++) {


  //     awayteams.push(<div key={i} style={styles}>{this.state.games.games[i].schedule.awayTeam.abbreviation}
  //     <br/>
  //     {this.state.games.games[i].schedule.homeTeam.abbreviation}
  //     </div> )
  //   }
  //   return awayteams

  // }


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
      <Container>
        {console.log(this.state.games)}
      <Row>
        <Col size="md-12">
        
        <Marquee>
          games go here
          {/* <h3>
          {this.ScheduleA()}
          </h3> */}
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
