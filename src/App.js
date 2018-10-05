import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tasks from './Tasks';

class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="App">
        <h1>Sample App</h1>
        <Tasks idade="29" nome="Jonatan" />
        <Tasks idade="21" nome="Cristiano" />
      </div>
    );
  }
}

export default App;
