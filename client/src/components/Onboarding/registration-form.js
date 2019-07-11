import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import './registration-form.css';
import {registerUser} from '../../actions/user-crud';
import {login} from '../../actions/auth';
import Input from './input';


export class RegistrationForm extends Component {

    componentDidMount() {
        document.title = "Register"
    }

    onSubmit(values) {
        const {email, password} = values;
        const user = {email, password};

        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(email, password)));
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
                className=""
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
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                    label="First Name:"
                    className="required"
                    maxLength="12"
                  
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                    label="Last Name:"
                    className="required"
                   
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    label="Password:"
                    className="required"
                   
                />
                <Field
                    component={Input}
                    type="password"
                    label="Confirm Password:"
                    name="passwordConfirm"
                    className="required"
              
                />
                <button
                    type="submit"
                >
                    Register
                </button>
            </form>
        );
    }




}


export default connect()(reduxForm({
    form: 'registration',
    
})(RegistrationForm));