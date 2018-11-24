import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import Card from "../../components/Card";
// import Form from "../../components/Form";
// import Book from "../../components/Book";
// import Footer from "../../components/Footer";
//import Table from "../../components/Table";
import marquee from "../../components/marquee"
import table from "../../components/Table"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import data from "../../results/daily_games-nba-2018-2019-regular.json"
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
      items: []
    };
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  getLines = () => {
    API.getLines()
    .then(APIresponse => console.log(APIresponse))
      .catch(err => console.log(err));
  };

  getGames = () => {
    API.getGames()
    .then(APIresponse => console.log(APIresponse))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    console.log(data.games);
    this.getLines();
    this.getGames();
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

  ScheduleA = () => {
    let styles = {
      
      width: "9%",
     margin: "0",
     padding: "0",
     float: "left"
    }
    let awayteams = []
    for (let i = 0; i < data.games.length; i++) {

      awayteams.push(<div style={styles}>{data.games[i].schedule.awayTeam.abbreviation}
      <br/>
      {data.games[i].schedule.homeTeam.abbreviation}
      </div> )
    }
    return awayteams

  }

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }



  render() {
    return (
      <Container>
      <Row>
        <Col size="md-12">

        <marquee>
          <h3>
          {this.ScheduleA()}
          </h3>
        </marquee>
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
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>

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
