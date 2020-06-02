import React from 'react';
import { connect } from 'react-redux';
import Inputs from './Inputs';
import Output from './Output';

const ModelBody = props => {

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <Inputs />
      <Output />
    </div>
  );

};

const mapStateToProps = state => ({
  model: state.model.activeModel
});

export default connect(mapStateToProps)(ModelBody);