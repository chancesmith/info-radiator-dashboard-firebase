import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import config from 'config';

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
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
