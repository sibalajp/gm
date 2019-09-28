import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/home";
import Pricing from "./pricing/pricing";
import signup from "./onboarding/registration-form";
import LandingPage from "./onboarding/landing-page";
import NavBar from "./home/navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { refreshAuthToken } from "../actions/auth";
import Dashboard from "./dashboard/dashboard";

class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefersh();
    }
  }

  componentWillMount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="">
        <NavBar />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard}></Route>
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

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);
