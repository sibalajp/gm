import React, { Component } from 'react';
import './signup.css';



class Signup extends Component {


    render() {
        return(
            <div>
                <form>
                    <label for="email">Email Address</label>
                    <input type="text" name="email"></input><br></br>
                    <label for="password">Password</label>
                    <input type="text" name="password"></input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }



}


export default Signup;