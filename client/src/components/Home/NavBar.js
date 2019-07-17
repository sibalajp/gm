import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Navbarcomp from './navbar-comp';






class NavBar extends Component {

    constructor(props){
      super(props)
    
      this.state = {
        howitworksActive: "active",
        pricingActive: "",
        bgColor: ""
      }
    }
    
    conponentDidMount() {
        // navbar stick to top
        let navbar =  document.getElementById("navbar-container");
  
        let sticky = navbar.offsetTop;

        const stickyNavbar = () => {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          }
          else {
            navbar.classList.remove("sticky");
          }
        }
        window.onscroll =  function() {stickyNavbar()};


        

        
    }

    boxClick = (e) => {
     this.setState({ bgColor: "yellow"})
   }

  
  
  render() {
    

    return(
      <div id="navbar-container" className="navbar-container">   
        <div className="navbar-inner">
          {/* <div id="logo">
            <img src="https://img.icons8.com/windows/64/000000/kangaroo.png" alt="bucketroo logo"></img>
          </div>
          <div id="menu_wrapper" className="md-none menu-wrapper">
            <nav>
                <ul id="main_ul_menu">
                  <li> <Link href="#how_it_works" className={` ${this.props.hiwisActive}`} to={'/howitworks'}>How It Works</Link></li>
                   <li>|</li>
                  <li className={ `pricing ${this.props.isActive} ` }><Link id="pricing"   to={'/pricing'}>Pricing</Link></li>
                </ul>
            </nav>
          </div>
          <div className="login-signup">
            <button className="md-none login">Login</button>
            <button className="md-none signup"><Link to={'/signup'}>Sign Up</Link></button>
            <i style={{ backgroundColor: this.state.bgColor }} onClick={ this.boxClick }class="fas fa-bars"></i>
          </div> */}
         <Navbarcomp />
         
        </div>
      </div>

    )
  }

}


export default NavBar;
