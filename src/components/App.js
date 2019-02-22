import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../resources/styles/wrapper';
import Home from '../pages/Home';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path="/" component={NavBar}/>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
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