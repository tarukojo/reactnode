import React, { Component } from 'react';
import logo from './logo.svg';
import TextAreaComp from './TextAreaComp';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kirjoitusharjoitus</h2>
        </div>
        <div className="App-intro">
          <br/>
          <div className="App-text">
          Tämä on React.js:llä toteutettu kirjoitusharjoitus.<br/> 
          Kirjoita alla oleva lause oikein. Jos se menee oikein, teksti on vihreää, jos väärin, punaista.        
          </div>
          <br/>
        </div>
        <div className="App-body">  
          <form>                    
              <TextAreaComp />   
          </form>   
               
        </div>
      </div>
    );
  }
}

export default App;
