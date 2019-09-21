import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/home";
import Pricing from "./pricing/pricing";
import signup from "./onboarding/registration-form";
import LandingPage from "./onboarding/landing-page";
import NavBar from "./home/navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/howitworks" component={Home} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/register" component={LandingPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
