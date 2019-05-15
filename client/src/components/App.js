import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import Home from './Home'





class App extends Component {
  render() {
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}/>


          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
