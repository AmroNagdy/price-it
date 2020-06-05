import React from 'react';
import StyledH1 from '../styles/StyledH1';
import { connect } from 'react-redux';

const ModelHeading = props => {

  return (
    <StyledH1><b>{props.assetClass}</b> {` ${props.name}`}</StyledH1>
  );

};

const mapStateToProps = state => ({
  assetClass: state.model.instance.assetClass,
  name: state.model.instance.name
});

export default connect(mapStateToProps)(ModelHeading);