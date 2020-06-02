import React from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import { Button, Form } from 'react-bootstrap';

const Inputs = props => {

  return (
    <div>
      <h2>Inputs</h2>
      <Form>
        {props.inputs.map(input => <InputForm key={input.name} name={input.name} description={input.description} />)}
      </Form>
      <Button variant="primary" type="submit">
        Calculate
      </Button>
    </div>
  );

};

const mapStateToProps = state => ({
  inputs: state.model.activeModel.inputs
});

export default connect(mapStateToProps)(Inputs);