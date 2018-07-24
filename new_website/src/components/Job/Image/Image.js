import React from 'react';

const Image = ({image}) => {

    return(
        <div className='pa2 tc'>
            <img src={process.env.PUBLIC_URL + image} alt="Something went wrong"/>
        </div>
    );
}

export default Image;
