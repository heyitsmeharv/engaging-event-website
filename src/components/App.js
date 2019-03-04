import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={300}
                    classNames="page"
                    key={location.key}
                  >
                  <Switch location={location}>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/navigation" component={Navigation} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              );
            }}
          />
        </Wrapper>
      </Router>
    );
  }
}

export default App;