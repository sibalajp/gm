import React, { Component } from 'react';
import './howitworks.css'
import step1 from '../../img/step-1.png';
import step2 from '../../img/step-2.png';
import step3 from '../../img/step-3.png';

import appointment from '../../img/appointment.png';
import rating from '../../img/rating.png';


class Process extends Component {

    render() {
      return(
        <div  id="how_it_works" className=" howitworks-container">
          <h2>How It Works</h2>
          <div className="steps-content"> 
            <div className="hiw-sub-containers">
              <img className="steps-circle" src={step1}></img>
              <h1> Make An Appointment</h1>
              <p> Tell us when and where to meet you</p>
              <img className="steps-image" src={appointment}></img>
            </div>
            <div className="hiw-sub-containers">
             
              <img className="steps-circle" src={step2}></img>
              <h1> Make An Appointment</h1>
              <p> Tell us when and where to meet you</p>
            </div>
            <div className="hiw-sub-containers">
              <img className="steps-circle" src={step3}></img>
              <h1> Make An Appointment</h1>
              <p> Tell us when and where to meet you</p>
              <img className="steps-image" src={rating}></img>
              
            </div>

          </div>
          
        </div>
      )
    }

}



export default Process;
