import React from 'react';
import Title from './Title/title';
import Navigation from './Nav/Navigation';
import './TopBar.css';

const TopBar = () => {
    return(
        <div className = 'bb fixed'>
            <Title />
            <Navigation isSignedIn={false}/>
        </div>
    );
}

export default TopBar;
