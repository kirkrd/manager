import React, { Component } from 'react';
import Main from '../Main'
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
         
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
          <img className="header-image" src="https://static.tumblr.com/2cf5d7d5946abdc8231485160a60c206/n7wg8ju/S9Xnkatc1/tumblr_static_tumblr_static_3n2exil40xic8k8skg848808w_640.gif"/>
        </header>
        <div className="nav-bar">
            <ul className="nav-ul">
              <li className="nav-li">
                <a className="nav-link" href={"/"}>
                  Home
                </a>
              </li>
            </ul>
        </div>
        <Main />
        
      </div>
      
    );
  }
}

export default App;
