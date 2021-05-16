import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../screens/home/Home";

class Controller extends Component {
  constructor() {
    super();
    this.baseUrl = "http://localhost:8080/api/";
    this.state = {
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    };
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} baseUrl={this.baseUrl} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Controller;
