import React from 'react';
import Job from './Job/Job';
import Left from './Controllers/Left';
import Right from './Controllers/Right';
import './Main.css';

const Main = ({changeNumber, num}) => {

    return(
        <div className='general pt6'>
            <p
                className='f2 mb0 pl4 ml5 pb2' 
            >
                Education:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
                className='pb2'
            >
                <Left changeNumber={changeNumber} num={num} length={2}/>
                <Job topic='education' num={num}/>
                <Right changeNumber={changeNumber} num={num} length={2}/>
            </div>

            <p
                className='f2 mb0 pl4 ml5 pb2 pt4' 
            >
                Work Experience:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <Left changeNumber={changeNumber} num={num} length={2}/>
                <Job topic='work' num={num}/>
                <Right changeNumber={changeNumber} num={num} length={2}/>
            </div>

            <p
                className='f2 mb0 pl4 ml5 pb2 pt4' 
            >
                Projects:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
                className='pb2'
            >
                <Left changeNumber={changeNumber} num={num} length={2}/>
                <Job topic='projects' num={num}/>
                <Right changeNumber={changeNumber} num={num} length={2}/>
            </div>

            <p
                className='f2 mb0 pl4 ml5 pb2 pt4' 
            >
                Skills:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
                className='pb2'
            >
                <Job topic='skills' num={num}/>
            </div>

            <p
                className='f2 mb0 pl4 ml5 pb2 pt4' 
            >
                Activities:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <Left changeNumber={changeNumber} num={num} length={4}/>
                <Job topic='activities' num={num}/>
                <Right changeNumber={changeNumber} num={num} length={4}/>
            </div>
        </div>
    );
}

export default Main;
