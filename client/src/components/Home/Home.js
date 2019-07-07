import MainPic from './MainPic';
import NavBar from './NavBar';
import HowItWorks from './HowItWorks';

import React, { Component } from 'react';

import './home.css';



class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hiwisActive: ""
    }
  }

  

  componentDidMount() {
    this.setState({hiwisActive:"active"})
  }


  render() {
    return (
       <div className="home-container">
          <NavBar hiwisActive={this.state.hiwisActive}/>
          <MainPic />
          <HowItWorks />
       </div>
    );
  }
}



export default Home;
