import React, { Component } from 'react';
import '../styles/carousel.css';
import '../../../utils/carousel.util';
import bg1 from '../../../img/bg1.png';
import bg2 from '../../../img/bg2.png';
import bg3 from '../../../img/bg3.png';



class Carousel extends Component {

  render() {
    return(
      <div className="carousel-container">
        <main className="main-content">
          <section className="slideshow">
            <div className="slideshow-inner">
              <div className="slides">
                <div className="slide is-loaded is-active ">
                  <div className="slide-content">
                    <div className="caption">
                      <div className="title">Slide title 1</div>
                      <div className="text">
                        <p>Slide description One</p>
                      </div>
                      <a href="#" className="btn">
                        <span className="btn-inner">Learn More</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={bg1} alt="" className="image" />
                  </div>
                </div>
                <div className="slide is-loaded">
                  <div className="slide-content">
                    <div className="caption">
                      <div className="title">Slide title 2</div>
                      <div className="text">
                        <p>Slide description 2</p>
                      </div>
                      <a href="#" className="btn">
                        <span className="btn-inner">Learn More</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={bg2} alt="" className="image" />
                  </div>
                </div>
                <div className="slide is-loaded">
                  <div className="slide-content">
                    <div className="caption">
                      <div className="title">Slide title 3</div>
                      <div className="text">
                        <p>Slide description 3</p>
                      </div>
                      <a href="#" className="btn">
                        <span className="btn-inner">Learn More</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={bg3} alt="" className="image" />
                  </div>
                </div>
                <div className="slide is-loaded">
                  <div className="slide-content">
                    <div className="caption">
                      <div className="title">Slide title 4</div>
                      <div className="text">
                        <p>Slide description 4</p>
                      </div>
                      <a href="#" className="btn">
                        <span className="btn-inner">Learn More</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg" alt="" className="image" />
                  </div>
                </div>
              </div>
              <div className="arrows">
                <div className="arrow prev">
                  <span className="svg svg-arrow-left">
                    <svg version="1.1" id="svg4-Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      enableBackground="new 0 0 14 26"
                      x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26"
                      xmlSpace="preserve"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
                    <span className="alt sr-only"></span>
                  </span>
                </div>
                <div className="arrow next">
                  <span className="svg svg-arrow-right">
                    <svg version="1.1" id="svg5-Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 14 26"
                      enableBackground="new 0 0 14 26"
                      x="0px" y="0px" width="14px" height="26px"
                      xmlSpace="preserve"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/> </svg>
                    <span className="alt sr-only"></span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

}


export default Carousel;
