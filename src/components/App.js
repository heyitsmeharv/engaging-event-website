import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../resources/styles/wrapper';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Navigation from '../pages/Navigation';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path="/" component={Nav}/>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/navigation" component={Navigation} />
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