import React from 'react';
import { connect } from 'react-redux';

function ModelBody(props) {

  return (
    <p>Model is selected.</p>
  );

};

const mapStateToProps = state => ({
  model: state.model.activeModel
});

export default connect(mapStateToProps)(ModelBody);