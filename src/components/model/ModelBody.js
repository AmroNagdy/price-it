import React from 'react';
import Inputs from './Inputs';

export default props => {

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <Inputs parameters={props.parameters} />
      {/* <Output /> */}
    </div>
  );

};