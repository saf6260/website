import React from 'react';
import Title from './Title/title';
import Navigation from './Nav/Navigation';
import './TopBar.css';

const TopBar = ({changeRoute, loginClicked, registerClicked}) => {
    return(
        <div className = 'bb fixed'>
            <Title />
            <Navigation 
                isSignedIn={false} 
                changeRoute={changeRoute} 
                registerClicked={registerClicked}
                loginClicked={loginClicked}
            />
        </div>
    );
}

export default TopBar;
