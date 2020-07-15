import React from 'react';
import { connect } from 'react-redux';
import StyledH2 from 'components/styles/StyledH2';
import StyledH3 from 'components/styles/StyledH3';

const Output = props => {

  const price = props.priceFunction(props.parameters);

  return (
    <div>
      <StyledH2>Price</StyledH2>
      <StyledH3>{price === null ? 'N/A' : price}</StyledH3>
    </div>
  );

};

const mapStateToProps = state => ({
  priceFunction: state.model.priceFunction,
  parameters: state.model.parameters
});

export default connect(mapStateToProps)(Output);