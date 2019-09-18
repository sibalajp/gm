import React, { Component } from "react";
import "./pricing.css";

import silverShield from "../../img/shield-silver.png";
import clock from "../../img/clock.svg";
import check from "../../img/check.png";

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: ""
    };
  }

  componentDidMount() {
    this.setState({ isActive: "active" });
  }

  render() {
    return (
      <section className="pricing-container">
        <div className="pricing-body">
          <div className="pricing-header">
            <h1>Cleaning Package Made Easy</h1>
          </div>
          <div className="pricing-statement">
            <p>
              Here at Bucketroo, we believe in providing convenient, in-home car
              washes, so you can focus on what matters most.{" "}
            </p>
          </div>
          <div className="packages">
            <div className="packages-internal">
              <div className="first-package">
                <div className="package-top">
                  <img src={silverShield}></img>
                  <div className="image-overlay">
                    <p>Bucketroo</p>
                    <span>$22</span>
                  </div>
                </div>

                <div className="cleaning-time">
                  <p>
                    <img src={clock}></img>From 30-40 minutes
                  </p>
                </div>

                <div className="package-includes">
                  <ul>
                    <li>
                      <img src={check}></img>Full exterior wash down
                    </li>
                    <li>
                      <img src={check}></img>Exterior window cleaning
                    </li>
                    <li>
                      <img src={check}></img>Interior window cleaning
                    </li>
                    <li>
                      <img src={check}></img>Interior and trunk vacuum
                    </li>
                    <li>
                      <img src={check}></img>Interior wipe down
                    </li>
                    <li>
                      <img src={check}></img>Door jambs
                    </li>
                    <li>
                      <img src={check}></img>Glossy exterior finish
                    </li>
                  </ul>
                </div>
                <div className="read-more"></div>
                <div className="select-package-button"></div>
              </div>
              <a>Get Started</a>
            </div>
          </div>
          <div className="packages-footer">
            <p>
              Due to the extra time and supplies necessary, we apply an extra
              $7.00 for large vehicles and $12.00 for larger vehicles
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
