import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NFL from "./pages/NFL";
import NBA from "./pages/NBA";
import Callback from "./pages/callback";
import history from "./history";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Auth from './auth';


const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}




const App = () => (
  <Router history={history}>
    <div>
      <Nav auth={auth} />
      <Switch>
        <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route exact path="/Profile" render={(props) => <Profile auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        <Route exact path="/NFL" component={NFL} />
        <Route exact path="/NBA" component={NBA} />
      </Switch>
    </div>
  </Router>
);

export default App;
