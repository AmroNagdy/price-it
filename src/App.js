import React from 'react';
import AppStyle from './components/styles/AppStyle';
import NavigationBar from './components/heading/NavigationBar';
import ModelHeading from './components/heading/ModelHeading';
import LandingPageHeading from './components/heading/LandingPageHeading';
import LandingPageBody from './components/body/LandingPageBody';
import ModelBody from './components/body/ModelBody';
import { connect } from 'react-redux';

const App = props => {

  const modelIsSelected = props.activeModel === null;

  return (
    <AppStyle>
      <NavigationBar />
      {modelIsSelected ? <LandingPageHeading /> : <ModelHeading />}
      {modelIsSelected ? <LandingPageBody /> : <ModelBody />}
    </AppStyle>
  );

};

const mapStateToProps = state => ({
  activeModel: state.model.activeModel
});

export default connect(mapStateToProps)(App);