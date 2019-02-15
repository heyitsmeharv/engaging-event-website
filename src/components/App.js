import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../resources/styles/wrapper';
import Home from '../pages/Home';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                </Switch>
              );
            }}
          />
        </Router>
      </Wrapper>
    );
  }
}

export default App;