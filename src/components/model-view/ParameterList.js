import React from 'react';
import ParameterForm from 'components/model-view/ParameterForm';
import { connect } from 'react-redux';
import StyledH2 from 'components/styles/StyledH2';

const ParameterList = props => {

  return (
    <div style={{ paddingBottom: '20px' }}>
      <StyledH2>Parameters</StyledH2>
      {Object.entries(props.parameters).map(([parameterName, parameter]) => <ParameterForm key={parameterName} parameter={parameter} />)}
    </div>
  );

};

const mapStateToProps = state => ({
  parameters: state.model.parameters
});

export default connect(mapStateToProps)(ParameterList);