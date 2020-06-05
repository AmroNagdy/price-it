import React from 'react';
import StyledApp from './components/styles/StyledApp';
import NavigationBar from './components/navigation/NavigationBar';
import Model from './components/model/Model';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BlackScholes from './model/options/BlackScholes';
import Landing from './components/landing/Landing';

export default () => {

  return (
    <StyledApp>
      <HashRouter>
        <NavigationBar />
        <Switch>
          <Route path='/options/black-scholes' render={() => <Model model={BlackScholes} />} />
          <Route path='/' render={() => <Landing />} />
        </Switch>
      </HashRouter>
    </StyledApp>
  );

};