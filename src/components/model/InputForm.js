import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export default props => {

  return (
    <Form.Group>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control placeholder={props.description} />
    </Form.Group>
  );

};