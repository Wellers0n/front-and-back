import React, { Component } from 'react';
import './App.css';
import tinderLogo from './images/tinder-logo.png'
import mulher from  './images/mulher.png';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo" >
             <img src={tinderLogo} alt="logo" />
          </div>
          <div className="nav">
            <ul>
              <li><a href="#">SWIPE</a></li>
              <li><a href="#">MATCH</a></li>
              <li><a href="#">CHAT</a></li>
            </ul>
          </div>
          <div className="login">
            <button>LOG IN</button>
          </div>
        </header>
        <main>
          <div className='mainLeft'>
            <img src={mulher} alt="mulher" />
          </div>
          <div className='mainRigth'>
            <p>Meet new and <br/>interesting <br/>people nearby</p>
            <button>SIGN UP ONLINE</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
