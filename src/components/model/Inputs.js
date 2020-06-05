import React from 'react';
import InputForm from './InputForm';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

const Inputs = props => {

  return (
    <div>
      <h2>Inputs</h2>
      <Form>
        {props.parameters.map(p => <InputForm key={p.name} parameter={p} />)}
      </Form>
    </div>
  );

};

const mapStateToProps = state => ({
  parameters: state.model.instance.parameters
});

export default connect(mapStateToProps)(Inputs);