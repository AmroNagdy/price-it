import React from 'react';
import InputForm from './InputForm';
import { Button, Form } from 'react-bootstrap';

export default props => {

  return (
    <div>
      <h2>Inputs</h2>
      <Form>
        {Object.entries(props.parameters).map(p => <InputForm key={p[0]} name={p[0]} description={p[1].description} />)}
      </Form>
      <Button variant="primary" type="submit">
        Calculate
      </Button>
    </div>
  );

};