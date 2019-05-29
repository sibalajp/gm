import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import Process from './components/Process';

import React, { Component }from 'react';

import './home.css'



class Home extends Component {

  render() {
    return (
       <div id="home-container">
        <NavBar />
        <Carousel />
        <Process />
       </div>
    );
  }
}



export default Home;
