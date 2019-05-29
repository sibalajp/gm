import React, { Component } from 'react';
import logo from '../../../img/logo.png';




class NavBar extends Component {

    conponentDidMount() {
      // navbar stick to top
      let navbar =  document.getElementById("navbar-container");
      console.log(navbar)
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



  render() {
    return(
      <div id="navbar-container" className="navbar-container">
        <div id="logo">
          <img src={logo} alt="Logo of Goaledminds"/>
        </div>
        <div className="dt-menu-toggle"> <span className="dt-menu-toggle-icon"></span></div>
        <nav className="menu-wrapper">
            <ul id="main-ul-menu">
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Bios">Bios</a></li>
              <li><a href="#Blog">Blog</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </div>

    )
  }

}


export default NavBar;
