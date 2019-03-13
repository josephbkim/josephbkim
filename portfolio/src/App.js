import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import App from "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Projects from "./components/ProjectGallery/Projects";
import Contact from "./components/Contact";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIgloo } from "@fortawesome/free-solid-svg-icons";

// library.add(faIgloo);

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
