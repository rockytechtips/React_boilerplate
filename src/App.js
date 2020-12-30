import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Services from "./views/Service";
import { Page } from "./components/TitleComponent";
import NotFound from "./views/NotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Page exact path="/" component={Home} title="Home" />
          <Page exact path="/about" component={About} title="About" />
          <Page exact path="/services" component={Services} title="Services" />
          <Page exact path="/contact" component={Contact} title="Contact" />
          <Page component={NotFound} title="Page not found" />
        </Switch>
      </Router>
    );
  }
}

export default App;
