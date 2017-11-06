import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { config } from './config.js'

firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 0
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('dashboard');
    const usersCount = rootRef.child('usersCount');
    usersCount.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="dashboard">
          <h1 className="page-title"><img src="Vector_theLab.png" /></h1>
          <div className="data-list">
            <div className="data-list__single">
              <div className="data-list__title">Visits</div>
              <div className="data-list__int">{this.state.speed}</div>
              <div className="data-list__description">people</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
