import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from './SideNav';

const Navbarcomp = () => {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(2),
        },
        root: {
          flexGrow: 1,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const classes = useStyles();
      
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}></Typography>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                     <MenuIcon ><SideNav/></MenuIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
    

    
}


export default Navbarcomp;
