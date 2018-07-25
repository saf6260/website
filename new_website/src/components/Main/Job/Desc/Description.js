import React from 'react';

const Description = ({data}) => {

    const splitData = data.split('\n');

    return(
        <div className = 'tc ma1'>
            <p>{splitData[0]}</p>
            <p>{splitData[1]}</p>
            <p>{splitData[2]}</p>
            <p>{splitData[3]}</p>
            <p>{splitData[4]}</p>
            <p>{splitData[5]}</p>
            <p>{splitData[6]}</p>
            <p>{splitData[7]}</p>
            <p>{splitData[8]}</p>
        </div>
    );
}

export default Description;
