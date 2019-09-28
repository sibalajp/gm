import React, { Component } from "./node_modules/react";
import { Field, reduxForm } from "./node_modules/redux-form";

import Form from "./node_modules/react-bootstrap/Form";

export class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Field component={Form.Control} />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};
};

export default reduxForm({
  form: "loginForm",
  validate
})(LoginForm);
