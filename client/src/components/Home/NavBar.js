import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" title={<img src="https://img.icons8.com/windows/64/000000/kangaroo.png"/>}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src="https://img.icons8.com/windows/64/000000/kangaroo.png"/>
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Bucketroo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


class NavBar extends Component {

    constructor(props){
      super(props)
    
      this.state = {
        howitworksActive: "active",
        pricingActive: ""
      }
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

   

 
 
  render() {
    
    return(
      <div id="navbar-container" className="navbar-container">
        <ButtonAppBar />
       
        {/* <div className="navbar-inner">
          <div id="logo">
          <img src="https://img.icons8.com/windows/64/000000/kangaroo.png" alt="bucketroo logo"></img>
          </div>
          <div id="menu_wrapper" className="menu-wrapper">
            <nav>
                <ul id="main_ul_menu">
                  <li> <Link href="#how_it_works" className={` ${this.props.hiwisActive}`} to={'/howitworks'}>How It Works</Link></li>
                   <li>|</li>
                  <li className={ `pricing ${this.props.isActive}` }><Link id="pricing"   to={'/pricing'}>Pricing</Link></li>
                </ul>
            </nav>
          </div>
        </div> */}
      </div>

    )
  }

}


export default NavBar;
