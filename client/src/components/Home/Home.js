import MainPic from './MainPic';
import NavBar from './NavBar';
import HowItWorks from './HowItWorks';

import React, { Component } from 'react';

import './home.css';



class Home extends Component {

  render() {
    return (
       <div className="home-container">
          <NavBar />
          <MainPic />
          <HowItWorks />
       </div>
    );
  }
}



export default Home;
