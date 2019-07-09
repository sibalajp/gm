import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import Pricing from './Pricing/pricing';
import './App.css';





class App extends Component {

  render() {
    return(
      <div className="container" >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/pricing" component={Pricing}/>
            <Route exact path="/howitworks" component={Home}/>
            <Route exact path="/signup" component={signup}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
