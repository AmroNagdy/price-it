import React from 'react';
import { connect } from 'react-redux';
import H1Style from '../styles/H1Style';

function Heading(props) {

  return (
    <H1Style><b>{props.assetClassName}</b> {' ' + props.modelName}</H1Style>
  );

};

const mapStateToProps = state => ({
  assetClassName: state.model.activeModel.assetClassName,
  modelName: state.model.activeModel.modelName
});

export default connect(mapStateToProps)(Heading);