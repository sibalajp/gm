import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Settings from '@material-ui/icons/Settings';




const useStyles = makeStyles(theme=> ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    button: {
        margin: theme.spacing(2),
    },

  }));
  
const SideNav = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          {['How It Works', 'Pricing'].map((text, index) => (
            <ListItem button key={text} component={Link} to={ index % 2 === 0 ? '/howitworks': '/pricing' }>
              <ListItemIcon>{index % 2 === 0 ? <Settings /> : <AttachMoney /> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        <Button className={classes.button} variant="outlined" href="#outlined-buttons" >
            <Link to={''}>Login</Link>
        </Button>
        <Button variant="outlined" href="#outlined-buttons" >
            <Link to={'/signup'}>Sign Up</Link>
        </Button>
        </List>
       
      </div>
    );
  

  
    return (
      <div>
        <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
      </div>
    );
  }


  export default SideNav;