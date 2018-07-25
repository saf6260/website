import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/Main';

import {changeTopic, changeNumber, login} from './actions'

const mapStateToProps = state => {
    return {
        user: state.login.user,
        isSignedIn: state.login.isSignedIn,
        topic: state.changeTopic.topic,
        number: state.changeNumber.number,
        length: state.changeTopic.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (event) => dispatch(login(event.target.value)),
        onChangeTopic: (event) => dispatch(changeTopic(event.target.value)),
        onChangeNumber: (event) => dispatch(changeNumber(event)),
    }
}

class App extends Component {
    render() {
        const {onChangeNumber, onChangeTopic, topic, number, length} = this.props;
      return (
            <div>
                <TopBar />
                <Main changeNumber={onChangeNumber} changeTopic={onChangeTopic} topic={topic} num={number} length={length}/>
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
