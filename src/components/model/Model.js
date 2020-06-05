import React from 'react';
import ModelHeading from './ModelHeading';
import ModelBody from './ModelBody';
import { connect } from 'react-redux';
import { loadModel } from '../../redux/actions/ModelActions';

const Model = props => {

  props.loadModel(props.model);

  return (
    <>
      <ModelHeading />
      <ModelBody />
    </>
  );

};


const mapDispatchToProps = dispatch => ({
  loadModel: instance => dispatch(loadModel(instance))
});

export default connect(null, mapDispatchToProps)(Model);