import React, { Component } from 'react';
import './howitworks.css'
import step1 from '../../img/step-1.png';
import step2 from '../../img/step-2.png';
import step3 from '../../img/step-3.png';

import appointment from '../../img/appointment.png';
import rating from '../../img/rating.png';
import carwash from '../../img/car-wash.png';


class HowItWorks extends Component {

    render() {
      return(
        <div  id="how_it_works" className=" howitworks-container">
          <h2>How It Works</h2>
          
          <div className="steps-content"> 
            <div className="hiw-sub-containers">
              

              <img className="steps-circle" src={step1}></img>
              <h1> Make An Appointment</h1>
              <p> Tell us when and where to meet you</p>
              <div className="step-image-container">
                <img className="steps-image" src={appointment}></img>
              </div>
            </div>

            <div className="hiw-sub-containers">
             
              <img className="steps-circle" src={step2}></img>
              <h1> Get your car washed</h1>
              <p> One of our partners will meet you at your house, equipped with the basics, and ready perform.</p>
              <div className="step-image-container">
                <img className="steps-image" src={carwash}></img>
              </div>
            </div>

            <div className="hiw-sub-containers">
              
              <img className="steps-circle" src={step3}></img>
              <h1> Rate our partner</h1>
              <p>When car wash is finished, tell us your thoughts. It helps us strive for quality service.</p>
              <div className="step-image-container">
               <img className="steps-image" src={rating}></img>
              </div>
            </div>

          </div>
          
        </div>
      )
    }

}



export default HowItWorks;
