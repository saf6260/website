import React from 'react';
import Title from './Title/title';
import Navigation from './Nav/Navigation';

const TopBar = () => {
    return(
        <div className = 'bb'>
            <Title />
            <Navigation isSignedIn={false}/>
        </div>
    );
}

export default TopBar;
