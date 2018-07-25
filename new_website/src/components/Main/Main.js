import React from 'react';
import Job from './Job/Job';
import Left from './Controllers/Left';
import Right from './Controllers/Right';

const Main = ({changeNumber, changeTopic, topic, num, length}) => {

    const test = () => {
        console.log('test')
    }

    return(
        <div 
            style={{display: 'flex', justifyContent: 'center'}}
            onScroll={test}
        >
            <Left changeNumber={changeNumber} num={num} length={length}/>
            <Job topic={topic} num={num}/>
            <Right changeNumber={changeNumber} num={num} length={length}/>
        </div>
    );
}

export default Main;
