import React from "react";
import RegistrationForm from "./registration-form";
import "./landing-page.css";

const LandingPage = () => {
  return (
    <div className="onboard-container">
      <div className="container">
        <RegistrationForm />
      </div>
    </div>
  );
};
export default LandingPage;
