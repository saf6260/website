import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Job from './components/Job/Job';

class App extends Component {
  render() {
      return (
            <div>
                <TopBar />
                <Job />
            </div>
    );
  }
}

export default App;
