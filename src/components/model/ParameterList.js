import React from 'react';
import ParameterForm from './ParameterForm';
import { connect } from 'react-redux';
import StyledH2 from '../styles/StyledH2';

const ParameterList = props => {

  return (
    <div style={{ width: '60vw', paddingBottom: '20px' }}>
      <StyledH2>Parameters</StyledH2>
      {Object.entries(props.parameters).map(([parameterName, parameter]) => <ParameterForm key={parameterName} parameter={parameter} />)}
    </div>
  );

};

const mapStateToProps = state => ({
  parameters: state.model.parameters
});

export default connect(mapStateToProps)(ParameterList);