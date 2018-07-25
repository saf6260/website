import React from 'react';
import './Navigation.css';

const general = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'center', background: 'transparent'}}>
            <div className = 'dropdown'>
                <span className = 'f4 dim ph4 pointer pv2'>
                    About
                </span>
                <div className = 'dropdown-content'>
                    <p className = 'f4 dim pointer ph4'>
                        Face Recognition
                    </p>
                    <p className = 'f4 dim pointer ph4'>
                        Sprint Breakdown
                    </p>
                    <p className = 'f4 dim pointer ph4'>
                        Old Website
                    </p>
                </div>
            </div>
            <div className = 'dropdown'>
                <span className = 'f4 dim ph4 pointer pv2'>
                    Resume
                </span>
                <div className = 'dropdown-content'>
                    <p className = 'f4 dim pointer ph4'>
                        View Resume
                    </p>
                </div>
            </div>
        </nav>
    );
}

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                {general()}
                <div className = 'dropdown'>
                    <span className = 'f4 dim black ph4 pointer pv2'>
                        Hi, Scott
                    </span>
                    <div className = 'dropdown-content'>
                        <p className = 'f4 dim pointer ph4'>
                            Chat
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                {general()}
                <div className = 'dropdown'>
                    <span className = 'f4 dim black ph4 pointer pv2'>
                        Login
                    </span>
                    <div className = 'dropdown-content'>
                        <p className = 'f4 dim pointer ph4'>
                            Register
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
