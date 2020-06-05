import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export default props => {

  const parameter = props.parameter;

  return (
    <Form.Group>
      <Form.Label>{parameter.name}</Form.Label>
      <Form.Control placeholder={parameter.description} onChange={event => parameter.value = event.target.value} />
    </Form.Group>
  );

};