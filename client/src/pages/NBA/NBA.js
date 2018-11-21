import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class NBA extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

  componentDidMount() {
    fetch("/api/nfl/scores")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

      console.log(this.state.items)
  }


  render() {
    return(

    <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
            
            {this.state.items}
        

        

        
        </Jumbotron>
      </Col>
    </Row>
  </Container>



    )
    }
  }


export default NBA;
