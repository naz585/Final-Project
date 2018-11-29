import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class NBA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      seasonalGames: [],
      playerInjuries: [],
      Standings: []
    }
  };


  Seasonal = () => {
    API.nbaSeasonal()
    .then(APIresponse =>{
      console.log('Seasonal games', APIresponse)
       this.setState({seasonalGames: APIresponse})}
       )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    this.Seasonal();
    
    // this.getGames();
  }

  render() {
    const seasonalGames = this.state.seasonalGames.games
    {console.log(seasonalGames)}
    return (
        <Container>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1 className="text-center">NBA Page Not Found</h1>
          <h1 className="text-center">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
    )

    }

}
// const NBA = () => (
//   <Container fluid>
//     <Row>
//       <Col size="md-12">
//         <Jumbotron>
//           <h1 className="text-center">NBA Page Not Found</h1>
//           <h1 className="text-center">
//             <span role="img" aria-label="Face With Rolling Eyes Emoji">
//               🙄
//             </span>
//           </h1>
//         </Jumbotron>
//       </Col>
//     </Row>
//   </Container>
// );

export default NBA;
