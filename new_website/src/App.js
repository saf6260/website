import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Job from './components/Job/Job';

import {changeTopic, changeNumber, login} from './actions'

const mapStateToProps = state => {
    return {
        user: state.login.user,
        isSignedIn: state.login.isSignedIn,
        topic: state.changeTopic.topic,
        number: state.changeNumber.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (event) => dispatch(login(event.target.value)),
        onChangeTopic: (event) => dispatch(changeTopic(event.target.value)),
        onChangeNumber: (event) => dispatch(changeNumber(event.target.value)),
    }
}

class App extends Component {
    render() {
        const {onChangeNumber, onChangeTopic, topic, number} = this.props;
      return (
            <div>
                <TopBar />
                <Job changeNumber={onChangeNumber} changeTopic={onChangeTopic} topic={topic} num={number}/>
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
