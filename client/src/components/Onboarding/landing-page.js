import React from "react";
import RegistrationForm from "./registration-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./landing-page.css";

const LandingPage = props => {
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="onboard-container">
      <div className="container">
        <RegistrationForm />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
