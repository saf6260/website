import React from 'react';
import Title from './Title/title';
import Navigation from './Nav/Navigation';
import './TopBar.css';

const TopBar = ({changeRoute}) => {
    return(
        <div className = 'bb fixed'>
            <Title />
            <Navigation isSignedIn={false} changeRoute={changeRoute}/>
        </div>
    );
}

export default TopBar;
