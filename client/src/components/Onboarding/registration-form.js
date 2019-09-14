import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "./registration-form.css";
import { registerUser } from "../../actions/user-crud";
import { login } from "../../actions/auth";
import FormControl from "./formControl";
import Form from "react-bootstrap/Form";

export class RegistrationForm extends Component {
  componentDidMount() {
    document.title = "Register";
  }

  onSubmit = values => {
    const { email, password } = values;
    const user = { email, password };

    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(email, password)));
  };

  render() {
    let error;
    const email = value =>
      value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
    // const required = value => (value ? undefined : "Required");
    // const minValue = min => value =>
    //   value && value < min ? `Must be at least ${min}` : undefined;
    // const minValue8 = minValue(8);

    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <Form id="register" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h2>Register</h2>
        {error}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Field
            component={FormControl}
            type="text"
            name="email"
            validate={email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Field
            component={FormControl}
            type="password"
            name="password"
            // validate={[required]}
          />
        </Form.Group>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default connect()(
  reduxForm({
    form: "registration",
    validate
  })(RegistrationForm)
);
