import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const SignUp = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1 className="text-center">This is a TEST of KNOWLEDGE!@!@!@!</h1>
          <h1 className="text-center">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄S
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default SignUp;