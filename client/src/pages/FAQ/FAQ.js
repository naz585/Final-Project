import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
/*import "./FAQ.css";*/


const spacer = {
  height: '100px'
};

const FAQ = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <article>
          <h1 className="text-center">
moneyline: price of a team to win the game outright (numbers based off of $100 bet)
    ex: -200 (risk $200 to profit $100)
        +200 (risk $100 to profit $200)

<div style={spacer}>
            </div>
        

point spread: the number of points the better team is projected to win by
    ex: Patriots (-7) vs Jets
        -Patriots projected to win by 7 points

        <div style={spacer}>
            </div>

favorite: the expected winner of the game
underdog: the expected loser of the game

<div style={spacer}>
            </div>
cover: the betting result of the game. In the example above, if the Patriots win
21-7, they covered the 7 point spread. Conversly, if the Patriots win 10-7, the
Jets would have covered the 7 point spread.
<div style={spacer}>
            </div>
vig: the standard commision the book takes. The standard spread vig is 10%.
    ex: Patriots (-7) vs Jets
        -Whether I bet on the Patriots -7 or the Jets +7, the price</h1>
         </article>
      </Col>
    </Row>
  </Container>
);

export default FAQ;
