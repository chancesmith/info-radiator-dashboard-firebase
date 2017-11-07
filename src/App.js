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
      visits: 0,
      countiesCount: 0
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('dashboard');
    const usersCount = rootRef.child('usersCount');
    const countiesCount = rootRef.child('countiesReachedCount');
    usersCount.on('value', snap => {
      this.setState({
        visits: snap.val()
      });
    });
    countiesCount.on('value', snap => {
      this.setState({
        countiesCount: snap.val()
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
              <div className="data-list__int">{this.state.visits}</div>
              <div className="data-list__description">people</div>
            </div>
            <div className="data-list__single">
              <div className="data-list__title">Counties</div>
              <div className="data-list__int">{this.state.countiesCount}</div>
              <div className="data-list__description">reached</div>
            </div>
            <div className="data-list__single">
              <div className="data-list__title">Fun</div>
              <div className="data-list__int">100%</div>
              <div className="data-list__description">achieved</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
