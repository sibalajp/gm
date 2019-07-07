import React, { Component } from 'react';
import './pricing.css';
import NavBar from '../Home/NavBar';




class Pricing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isActive: ""
        }
    }

    componentDidMount() {
        this.setState({isActive:"active"})
    }


    render () {
        return(
            <div>
                <NavBar isActive={this.state.isActive}/>
            </div>
        )
    }

}


export default Pricing;