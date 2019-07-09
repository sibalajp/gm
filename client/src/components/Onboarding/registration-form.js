import React, { Component } from 'react';
import './registration-form.css';
import {registerUser} from '../../actions/user-crud';


class RegistrationForm extends Component {

    componentDidMount() {
        document.title = "Register"
    }

    onSubmit(values) {
        const {email, password} = values;
        const user = {email, password};

        //start showing an animation 
        // this.props.dispatch(loadingAnimationToggle(true))
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    componentWillUnmount(){
        this.props.dispatch(loadingAnimationToggle(false))
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
            <form
                className="onboarding-form register form blurb"
                id="register"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Register</h2>

                {error}
                
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    label = "Username:"
                    className="required"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                    label="First Name:"
                    className="required"
                    maxLength="12"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                    label="Last Name:"
                    className="required"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    label="Password:"
                    className="required"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    label="Confirm Password:"
                    name="passwordConfirm"
                    className="required"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                >
                    Register
                </button>
                {this.props.loadingAnimation && <LoadingAnimation/>}
            </form>
        );
    }




}