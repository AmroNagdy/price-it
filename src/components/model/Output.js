import React from 'react';
import { connect } from 'react-redux';

const Output = props => {

  return (
    <div>
      <h2>Output</h2>
      <h2>{props.priceFunction(props.parameters)}</h2>
    </div>
  );

};

const mapStateToProps = state => ({
  priceFunction: state.model.instance.priceFunction,
  parameters: state.model.instance.parameters
});

export default connect(mapStateToProps)(Output);