import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./components/homepage";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Work } from "./components/work";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              path="/react-portfolio-template-2020"
              exact
              component={HomePage}
            />
            <Route
              path="/react-portfolio-template-2020/about"
              component={About}
            />
            <Route
              path="/react-portfolio-template-2020/contact"
              component={Contact}
            />
            <Route
              path="/react-portfolio-template-2020/work"
              component={Work}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
