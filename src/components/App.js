import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../resources/styles/wrapper';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Navigation from '../pages/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path="/" component={Navigation}/>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              );
            }}
          />
        </Wrapper>
      </Router>
    );
  }
}

export default App;