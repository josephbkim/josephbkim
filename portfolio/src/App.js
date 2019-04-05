import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Projects from "./components/ProjectGallery/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume/Resume";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
