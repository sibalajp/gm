import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "./registration-form.css";
import { registerUser } from "../../actions/user-crud";
import { login } from "../../actions/auth";

import { Form, Button, Alert } from "react-bootstrap";

export class RegistrationForm extends Component {
  componentDidMount() {
    document.title = "Register";
  }

  onSubmit = values => {
    const { email, password } = values;
    const user = { email, password };
    console.log("user:", user);

    return this.props
      .registerUser(user)
      .then(() => this.props.login(email, password));
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="">{error}</div>
        </div>
      );
    }
  }

  formControl = ({ input, label, type, meta }) => (
    <span>
      <Form.Control
        style={meta.error && meta.touched ? { border: "1px solid red" } : {}}
        {...input}
        autoComplete="off"
      />
      {this.renderError(meta)}
    </span>
  );

  render() {
    return (
      <div className="main-register-container">
        <div className="inner-register">
          <div className="register-start">Let's get started!</div>
          <Form
            className="register-form"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Field component={this.formControl} name="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Field
                component={this.formControl}
                name="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  console.log(formValues);
  const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email address"
      : undefined;

  if (!formValues.email) {
    errors.email = "You must enter a title";
  }

  //   if (formValues.email && email(formValues.email)) {
  //     errors.email = "Invalid email address";
  //   }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default connect(
  null,
  { registerUser, login }
)(
  reduxForm({
    form: "registration",
    validate
  })(RegistrationForm)
);
