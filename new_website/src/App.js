import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/Main';

import {changeNumber, login} from './actions'

const mapStateToProps = state => {
    return {
        user: state.login.user,
        isSignedIn: state.login.isSignedIn,
        number: state.changeNumber.number,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (event) => dispatch(login(event.target.value)),
        onChangeNumber: (event) => dispatch(changeNumber(event)),
    }
}

class App extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.onChangeTopic);
    }

    render() {
        const {onChangeNumber, number} = this.props;
      return (
            <div>
                <TopBar />
                <Main 
                    changeNumber={onChangeNumber} 
                    num={number} 
                    className='main'
                />
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
