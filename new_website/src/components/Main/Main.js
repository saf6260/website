import React from 'react';
import Job from './Job/Job';
import Left from './Controllers/Left';
import Right from './Controllers/Right';
import './Main.css';

const Main = ({changeEdu, changeWork, changeAct, changeProj, edu, work, proj, act}) => {

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
                <Left changeNumber={changeEdu} num={edu} length={2} type={'education'}/>
                <Job topic='education' num={edu}/>
                <Right changeNumber={changeEdu} num={edu} length={2} type={'education'}/>
            </div>

            <p
                className='f2 mb0 pl4 ml5 pb2 pt4' 
            >
                Work Experience:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <Left changeNumber={changeWork} num={work} length={2} type={'work'}/>
                <Job topic='work' num={work}/>
                <Right changeNumber={changeWork} num={work} length={2} type={'work'}/>
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
                <Left changeNumber={changeProj} num={proj} length={2} type={'projects'}/>
                <Job topic='projects' num={proj}/>
                <Right changeNumber={changeProj} num={proj} length={2} type={'projects'}/>
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
                <Job topic='skills' num={'1'}/>
            </div>

            <p
                className='f2 mb0 pl4 ml5 pb2 pt4' 
            >
                Activities:
            </p>
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <Left changeNumber={changeAct} num={act} length={4} type={'activities'}/>
                <Job topic='activities' num={act}/>
                <Right changeNumber={changeAct} num={act} length={4} type={'activities'}/>
            </div>
        </div>
    );
}

export default Main;
