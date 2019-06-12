import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/index';
import About from './About/index'
import './App.css'





class App extends Component {

  render() {
    return(
      <div className="container" >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
