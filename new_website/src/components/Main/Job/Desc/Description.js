import React from 'react';

const Description = ({data, type, id}) => {

    const splitData = data.split('\n');

    const general = () => {
        return(
            <div>
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

    console.log(type + ', ' + id);

    if(type==='skills'){
        return(
            <div>
                <p className = 'tc ma1 f3'>
                    {splitData[0]} --- {splitData[1]} --- {splitData[2]} --- {splitData[3]} --- {splitData[4]} --- {splitData[5]} --- {splitData[6]} --- {splitData[7]} --- {splitData[8]}
                </p>
            </div>
        );
    }

    else if(type==='projects' && id===undefined){
        return(
            <div className='tc ma1 f3'>
                {general()}
            </div>
        );
    }

    else{
        return(
            <div className='tc ma1 f4'>
                {general()}
            </div>
        );
    }
}

export default Description;
