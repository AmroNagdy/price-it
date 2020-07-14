import React from 'react';
import StyledH1 from 'components/styles/StyledH1';
import { connect } from 'react-redux';

const ModelHeading = props => {

  return (
    <StyledH1><b>{props.assetClass}</b> {` ${props.name}`}</StyledH1>
  );

};

const mapStateToProps = state => ({
  assetClass: state.model.assetClass,
  name: state.model.name
});

export default connect(mapStateToProps)(ModelHeading);