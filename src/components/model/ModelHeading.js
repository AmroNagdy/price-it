import React from 'react';
import StyledH1 from '../styles/StyledH1';

export default props => {

  return (
    <StyledH1><b>{props.assetClass}</b> {` ${props.modelName}`}</StyledH1>
  );

};