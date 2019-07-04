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
          <div class="mainpic-content"><h1>Quick Mobile Car Wash</h1>  </div>
          <div class="mainpic-content"><h2>We bring a bucket, soap, towels - fit for simple car wash service</h2>  </div>
          <div class="mainpic-content"><button>MAKE AN APPOINTMENT</button> </div>
      </div>
    )
  }

}


export default MainPic;
