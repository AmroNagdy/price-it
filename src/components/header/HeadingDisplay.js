import React from 'react';
import { connect } from 'react-redux';

function HeadingDisplay(props) {

  return (
    <h1>{props.assetClassName + ' | ' + props.modelName}</h1>
  );

};

const mapStateToProps = state => ({
  assetClassName: state.headingDisplay.assetClassName,
  modelName: state.headingDisplay.modelName
});

export default connect(mapStateToProps)(HeadingDisplay);