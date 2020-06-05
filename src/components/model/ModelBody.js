import React from 'react';
import Inputs from './Inputs';
import Output from './Output';
import { connect } from 'react-redux';

export default () => {

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <Inputs />
      <Output />
    </div>
  );

};