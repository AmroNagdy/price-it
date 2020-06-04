import React from 'react';
import ModelHeading from './ModelHeading';
import ModelBody from './ModelBody';

export default props => {

  return (
    <>
      <ModelHeading assetClass={props.model.assetClass} modelName={props.model.name} />
      <ModelBody parameters={props.model.parameters} pricingFunction={props.model.pricingFunction} />
    </>
  );

};