import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {

    if(isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                <div className = 'dropdown'>
                    <span>
                        About 
                    </span>
                    <div className = 'dropdown-content'>
                        <p>
                            Test
                        </p>
                    </div>
                </div>
                <p
                    className = 'f4 dim black ph2 pointer'
                    style = {{background: 'transparent'}}
                    >
                    Resume
                </p>
                <p
                    className = 'f4 dim black ph2 pointer'
                    style = {{background: 'transparent'}}
                >
                    Chat
                </p>
            </nav>
        );
    }
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'center'}}>
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
                <div className = 'dropdown'>
                    <span className = 'f4 dim black ph4 pointer pv2'>
                        Sign In
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
