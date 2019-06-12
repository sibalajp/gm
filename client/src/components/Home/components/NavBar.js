import React, { Component } from 'react';
import logo from '../../../img/logo.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';




class NavBar extends Component {
    constructor(props){
      super(props)

      this.state = {
        menuwrapper: "menu-wrapper"
      }

      this.getMenu = this.getMenu.bind(this)
    }

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


  getMenu() {
    let menu = this.state.menuwrapper;
    if(menu === "menu-wrapper") {
      this.setState({menuwrapper: "menu-wrapper responsive"});
    }
    else {
      this.setState({menuwrapper: "menu-wrapper"});
    }

  }

  render() {
    return(
      <div id="navbar-container" className="navbar-container">
        <div className="navbar-inner">
          <div id="logo">
            <img src={logo} alt="Logo of Goaledminds"/>
          </div>
          <div id="menu_wrapper" className={this.state.menuwrapper}>
            <nav>
                <ul id="main_ul_menu">
                  <li><a href="#Home" className="active" >Home</a></li>
                  <li><Link to={'/about'}>About</Link></li>
                  <li><a href="#Bios">Bios</a></li>
                  <li><a href="#Blog">Blog</a></li>
                  <li><a href="#Contact">Contact</a></li>
                  <li>
                    <a href="#" className="icon" onClick={this.getMenu}>
                      <i className="fas fa-bars"></i>
                    </a>
                </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>

    )
  }

}


export default NavBar;
