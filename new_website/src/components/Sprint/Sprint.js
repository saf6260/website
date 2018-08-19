import React from 'react';
import './Sprint.css';

const Sprint = () => {
    return(
        <div style={{position:'absolute'}}>
            <div>
                <p className='f2 mt5 pt3 pl3 mb3'>Sprint Breakdown:</p>
            </div>
            <div className='meter'>
                <div className='bulb first'>
                    <div className='redCircle'></div>
                    <p className='text'><strong>Sprint One</strong></p>
                </div>
                <div className='bar'>
                    <div className='redBar'></div>
                </div>
                <div className='bulb bulbTwo'>
                    <div className='redBarUp'></div>
                    <div className='redCircle redCircleTwo'></div>
                    <p className='text textExtra1'><strong>Sprint Two</strong></p>
                </div>
                <div className='bar barTwo'></div>
                <div className='bulb extra'>
                    <div className='redBarUp grey'></div>
                    <div className='redCircle redCircleTwo grey'></div>
                    <p className='text textExtra1'><strong>Sprint Three</strong></p>
                </div>
                <div className='bar extraBar'></div>
                <div className='bulb extra'>
                    <div className='redBarUp grey'></div>
                    <div className='redCircle redCircleTwo grey'></div>
                    <p className='text textExtra1'><strong>Project Completed</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Sprint;
