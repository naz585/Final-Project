import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NFL from "./pages/NFL";
import NBA from "./pages/NBA";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";

import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/NFL" component={NFL} />
        <Route exact path="/NBA" component={NBA} />
        <Route exact path="/LogIn" component={Login} />
        <Route exact path="/SignUp" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
