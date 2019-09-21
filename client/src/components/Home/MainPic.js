import React, { Component } from "react";
import "./mainpic.css";
import "../../utils/carousel.util";
import homepic from "../../img/man-wash.jpg";

let style = {
  backgroundImage: `url(${homepic})`,
  minHeight: "600px",
  minWidth: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class MainPic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcodes: [91501, 91502, 91504, 91506, 91505],
      zipcode: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkZip = this.checkZip.bind(this);
  }

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  checkZip(event) {
    event.preventDefault();

    let zipVal = false;
    let zipcodes = this.state.zipcodes;
    console.log(this.state.zipcode);
    for (var i = 0; i < zipcodes.length; i++) {
      if (this.state.zipcode == zipcodes[i]) {
        zipVal = true;
      }
    }

    if (zipVal) {
      //TODO: redirect to next page with "Congrats Your area is served by bucketroo and a sign up"
      alert("Yes! We service your area");
    } else {
      //TODO: redirect to next page stating that we don't serve your area and second half of the page is "Cities we serve"
    }
  }

  render() {
    return (
      <div className="carousel-container" style={style}>
        <div className="mainpic-content">
          <h1>In-home classic car wash as low as $17</h1>{" "}
        </div>
        <div className="mainpic-content">
          <h2>We wash with passion, without the fancy gear</h2>{" "}
        </div>
        <div className="mainpic-content form-group">
          <form onSubmit={this.checkZip}>
            <input
              className="zip-code"
              type="text"
              name="fname"
              placeholder="ZIPCODE"
              onChange={this.handleChange}
            ></input>
            <input
              id="zip-code-button"
              className="zip-button"
              type="submit"
              value="Get Started"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default MainPic;
