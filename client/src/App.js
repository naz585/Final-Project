import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

import NFL from "./pages/NFL";
import NBA from "./pages/NBA";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/nfl" component={NFL} />
        <Route exact path="/nba" component={NBA} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
