import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../resources/styles/wrapper';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Navigation from '../pages/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationActive: false,
    }
  }

  render() {
    const { navigationActive } = this.state;
    return (
      <>
        <Navigation navigationActive={navigationActive} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hire" component={Contact} />
          <Route exact path="/faq" component={Contact} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </>
    );
  }
}

export default App;