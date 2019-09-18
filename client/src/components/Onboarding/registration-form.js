import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "./registration-form.css";
import { registerUser } from "../../actions/user-crud";
import { login } from "../../actions/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  formControl = ({ input, label, type, meta }) => (
    <span>
      <Form.Control {...input} autoComplete="off" />
      {this.renderError(meta)}
    </span>
  );

  render() {
    return (
      <Form>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
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

  if (formValues.email && email(formValues.email)) {
    errors.email = "Invalid email address";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default connect()(
  reduxForm({
    form: "registration",
    validate
  })(RegistrationForm)
);
