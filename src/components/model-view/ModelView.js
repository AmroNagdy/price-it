import React from 'react';
import ModelViewHeading from 'components/model-view/ModelViewHeading';
import ModelViewBody from 'components/model-view/ModelViewBody';
import { connect } from 'react-redux';
import { loadModel } from 'redux/actions/ModelActions';

const ModelView = props => {

  props.loadModel(props.model);

  return (
    <>
      <ModelViewHeading />
      <ModelViewBody />
    </>
  );

};

const mapDispatchToProps = dispatch => ({
  loadModel: model => dispatch(loadModel(model))
});

export default connect(null, mapDispatchToProps)(ModelView);