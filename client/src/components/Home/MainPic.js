import React, { Component } from 'react';
import './mainpic.css';
import '../../utils/carousel.util';
import homepic from '../../img/man-wash.jpg';

let style = {
  backgroundImage: `url(${homepic})`,
  minHeight: '600px',
  minWidth: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}


class MainPic extends Component {

  
  render() {
    return(
      <div className="carousel-container" style={ style}>
          <div class="mainpic-content"><h1>In-home classic car wash as low as $17</h1>  </div>
          <div class="mainpic-content"><h2>We wash with passion, without the fancy gear</h2>  </div>
          <div class="mainpic-content form-group">
            <form class="" action="/">
              <input className="zip-code" type="text" name="fname" placeholder="ZIPCODE"></input>
              <input id="zip-code-button" className="zip-button" type="submit" value="Get Started"></input>   
            </form>
          </div>
      </div>
    )
  }

}


export default MainPic;
