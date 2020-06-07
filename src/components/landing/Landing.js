import React from 'react';
import LandingHeading from './LandingHeading';
import LandingBody from './LandingBody';
import { loadModel } from '../../redux/actions/ModelActions';
import { connect } from 'react-redux';

const Landing = props => {

  return (
    <>
      <LandingHeading />
      <LandingBody />
    </>
  );

};

const mapDispatchToProps = dispatch => ({
  loadModel: model => dispatch(loadModel(model))
});

export default connect(null, mapDispatchToProps)(Landing);