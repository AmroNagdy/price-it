import React from 'react';
import ParameterList from 'components/model-view/ParameterList';
import Output from 'components/model-view/Output';

export default () => {

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <ParameterList />
      <Output />
    </div>
  );

};